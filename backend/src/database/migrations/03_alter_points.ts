import Knex from 'knex'

export async function up(knex: Knex) {
	return knex.schema.alterTable('points', (table) => {
		table.renameColumn('latitute', 'latitude')
	})
}

export async function down(knex: Knex) {
	return knex.schema.alterTable('points', (table) => {
		table.dropColumn('latitute')
	})
}
