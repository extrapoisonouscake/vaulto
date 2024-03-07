import type { ColumnType, Insertable, Selectable, Updateable } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type ItemTable = {
    id: string;
    title: string;
    created_at: Generated<Timestamp>;
    updated_at: Timestamp;
    email: string;
    access_token: string | null;
};
export type Person = Selectable<ItemTable>
export type NewPerson = Insertable<ItemTable>
export type PersonUpdate = Updateable<ItemTable>
export type Database = {
    items: ItemTable;
};
