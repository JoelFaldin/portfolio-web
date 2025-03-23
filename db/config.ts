import { defineDb, defineTable, column } from 'astro:db';

const Messages = defineTable({
  columns: {
    messageId: column.text(),
    name: column.text(),
    email: column.text(),
    message: column.text(),
  }
})

export default defineDb({
  tables: { Messages },
})