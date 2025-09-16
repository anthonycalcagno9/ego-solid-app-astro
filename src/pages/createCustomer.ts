import type { CustomerInfo } from "@/models/customer";
import { Customer, db } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (body.name === "") {
      throw new Error("Name was empty, cannot create new record");
    }

    if (body.email === "") {
      throw new Error("Email address was empty, cannot create new record");
    }

    const customerToCreate: CustomerInfo = {
      emailAddress: body.email,
      name: body.name,
    };

    const response = await db
      .insert(Customer)
      .values(customerToCreate)
      .onConflictDoNothing();

    return new Response(
      JSON.stringify({ message: "successfully created customer record" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    return new Response(err.message, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
