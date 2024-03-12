import { sql } from "kysely"
import { db } from "."
import { ItemTypes } from "./types"
import { tsEnum } from "./helpers"

export async function seed(){


const usersTablePromise = db.schema
    .createTable('users')
    .ifNotExists()
    .addColumn('id', 'uuid', (cb) => cb.primaryKey())
    .addColumn('email', 'varchar(255)', (cb) => cb.notNull().unique())
    .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute()
const itemsTablePromise = db.schema
    .createTable('items')
    .ifNotExists()
    .addColumn('id', 'uuid', (cb) => cb.primaryKey())
    .addColumn('user', 'varchar(255)', (cb) => cb.notNull().unique())
	.addColumn('title','varchar(255)',(cb)=>cb.notNull())
	.addColumn('type',tsEnum(ItemTypes),(cb)=>cb.notNull())
	.addColumn('price','integer')
	.addCheckConstraint('min_price',sql`price > 0`)
    .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
	.addColumn('access_token','varchar(255)')
    .execute()
	const [usersTable,itemsTable] = await Promise.all([usersTablePromise,itemsTablePromise])
	console.log('DB seeded.')
	return {usersTable,itemsTable}
}