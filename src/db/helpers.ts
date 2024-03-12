import { sql } from "kysely";

export function tsEnum(enumObject: Record<string|number,string|number>) {
	return sql`enum(${sql.join(Object.values(enumObject).filter(v=>!isNaN(+v)).map(sql.literal))})`
}