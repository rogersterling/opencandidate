import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

export async function storeQuestion(slug: string, question: string) {
  const r = getRedis();
  if (!r) return;
  const key = `questions:${slug}`;
  // Use sorted set, increment score for duplicate questions
  const normalized = question.trim().slice(0, 500);
  if (!normalized) return;
  await r.zincrby(key, 1, normalized);
}

export async function getPopularQuestions(
  slug: string,
  limit = 10
): Promise<string[]> {
  const r = getRedis();
  if (!r) return [];
  const key = `questions:${slug}`;
  // Get top questions by score (descending)
  const results = await r.zrange(key, 0, limit - 1, { rev: true });
  return results as string[];
}
