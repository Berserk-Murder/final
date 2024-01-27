exports.up = function (knex) {
  return knex.schema.createTable('tab_coments', (t) => {
    t.increments()
    t.string('comment').notNull()
    t.integer('user_id').unsigned().notNullable();
    t.integer('post_id').unsigned().notNullable();
    t.timestamp('data').defaultTo(knex.fn.now());
    t.foreign('user_id').references('tab_users.id');
    t.foreign('post_id').references('tab_dados.id');
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tab_coments')
}