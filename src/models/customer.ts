import type { Customer } from "astro:db";

export type CustomerInfo = typeof Customer.$inferSelect;
