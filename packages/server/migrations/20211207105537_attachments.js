exports.up = (knex) => {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() =>
    knex.schema.createTable('attachments', (table) => {
      table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table.string('error_report_id', 256)
      table.string('photo')
      table.string('video')
      table.timestamp('created').defaultTo(knex.fn.now())
    })
  )
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('attachments')
}
