export function createInMemoryRateLimiter({ windowMs, max }) {
  const buckets = new Map();

  function cleanup(now) {
    // Simple cleanup to prevent unbounded growth.
    for (const [key, bucket] of buckets) {
      if (now - bucket.windowStart >= windowMs * 2) buckets.delete(key);
    }
  }

  return function rateLimit(key) {
    const now = Date.now();
    cleanup(now);

    const existing = buckets.get(key);
    if (!existing) {
      buckets.set(key, { windowStart: now, count: 1 });
      return { blocked: false, remaining: max - 1 };
    }

    if (now - existing.windowStart >= windowMs) {
      buckets.set(key, { windowStart: now, count: 1 });
      return { blocked: false, remaining: max - 1 };
    }

    existing.count += 1;
    if (existing.count > max) {
      return { blocked: true, remaining: 0 };
    }

    return { blocked: false, remaining: max - existing.count };
  };
}
