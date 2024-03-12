import type { ColumnType, Insertable, Selectable, Updateable } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;


export enum ItemTypes {
  Image,
  Video,
  Text,
  Archive,
  Audio,
  Other
}
type CreatedAt = Generated<ColumnType<Date,Date|string,never>>
export interface ItemTable {
    id: Generated<string>;
    title: string;
    created_at: CreatedAt;
    user: string;
    access_token: string | null;
    price:number;
    type:ItemTypes
};
export type Item = Selectable<ItemTable>
export type NewItem = Insertable<ItemTable>
export type ItemUpdate = Updateable<ItemTable>

export interface UserTable {
  id:Generated<string>
  email:string
  created_at:CreatedAt
}
export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export type Database = {
    users:UserTable
    items: ItemTable;
};
export { sql } from 'kysely'