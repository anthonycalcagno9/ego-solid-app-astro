import type { APIRoute } from "astro";
import { Customer, db } from "astro:db";

export const GET: APIRoute = async () => {
  try {
    const customers = await db.select().from(Customer);
    console.log("Customers from Database = ", JSON.stringify(customers));
    return new Response(JSON.stringify(customers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    throw new Response(err.message, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
