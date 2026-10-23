import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { quoteSchema, type QuoteInput } from "./schemas.ts";

const validQuote: QuoteInput = {
  projectTypes: ["web", "apps"],
  budget: "3to10k",
  timeline: "1to3m",
  name: "Ana Ruiz",
  email: "ana@example.com",
  company: "Andaoliva",
  phone: "+34 600 000 000",
  message: "Necesitamos una aplicación de gestión para el almacén y el equipo de sala.",
  privacy: true,
};

describe("quoteSchema", () => {
  it("accepts a complete quote", () => {
    assert.equal(quoteSchema.safeParse(validQuote).success, true);
  });

  it("accepts a quote without company or phone", () => {
    const { company: _company, phone: _phone, ...rest } = validQuote;
    assert.equal(quoteSchema.safeParse(rest).success, true);
  });

  it("rejects an empty project list", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, projectTypes: [] });
    assert.equal(parsed.success, false);
  });

  it("rejects an unknown project type", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, projectTypes: ["blockchain"] });
    assert.equal(parsed.success, false);
  });

  it("rejects a short name", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, name: "A" });
    assert.equal(parsed.success, false);
  });

  it("rejects an invalid email", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, email: "ana" });
    assert.equal(parsed.success, false);
  });

  it("rejects a phone with letters", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, phone: "seis cientos" });
    assert.equal(parsed.success, false);
  });

  it("rejects a message shorter than 20 characters", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, message: "Hola" });
    assert.equal(parsed.success, false);
  });

  it("rejects a quote without privacy consent", () => {
    const parsed = quoteSchema.safeParse({ ...validQuote, privacy: false });
    assert.equal(parsed.success, false);
  });
});
