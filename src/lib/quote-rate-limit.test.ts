import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { isRateLimited, resetQuoteRateLimit } from "./quote-rate-limit.ts";

const WINDOW_MS = 10 * 60 * 1000;

afterEach(() => {
  resetQuoteRateLimit();
});

describe("isRateLimited", () => {
  it("allows five submissions in the window and blocks the sixth", () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      assert.equal(isRateLimited("203.0.113.8", 1_000), false);
    }
    assert.equal(isRateLimited("203.0.113.8", 1_000), true);
  });

  it("counts each address on its own", () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      isRateLimited("203.0.113.8", 1_000);
    }
    assert.equal(isRateLimited("203.0.113.9", 1_000), false);
  });

  it("accepts a new submission once the window has passed", () => {
    for (let attempt = 0; attempt < 6; attempt += 1) {
      isRateLimited("203.0.113.8", 1_000);
    }
    assert.equal(isRateLimited("203.0.113.8", 1_000 + WINDOW_MS), false);
  });
});
