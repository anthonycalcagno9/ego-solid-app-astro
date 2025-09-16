import { defineDb, defineTable, column } from "astro:db";

const Customer = defineTable({
  columns: {
    emailAddress: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

export default defineDb({
  tables: { Customer },
});
