import { db, Customer } from "astro:db";

export default async function seed() {
  await db
    .insert(Customer)
    .values({ emailAddress: "example@gmail.com", name: "anthony calcagno" });
}
