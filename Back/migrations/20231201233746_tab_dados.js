exports.up = function (knex) {
  return knex.schema.createTable('tab_dados', (t) => {
    t.increments();
    t.string('nome', 100).notNull().unique();
    t.string('descricao', 100).notNull();
    t.string('foto', 100).notNull();
    t.integer('user_id').unsigned().notNullable();
    t.foreign('user_id').references('tab_users.id').onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tab_dados');
};
