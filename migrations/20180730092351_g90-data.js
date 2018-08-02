exports.up = function(knex, Promise) {
    return knex.schema.createTable("studentData", table => {
        table.increments("id");
        table.text("first_name");
        table.text("last_name");
        table.text("prev_occupation");
        table.text("hometown");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("studentData");
};
