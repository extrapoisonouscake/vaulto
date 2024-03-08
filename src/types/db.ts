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
export type ItemTable = {
    id: string;
    title: string;
    created_at: Generated<Timestamp>;
    updated_at: Timestamp;
    email: string;
    access_token: string | null;
    price:number;
    type:ItemTypes
};
export type Item = Selectable<ItemTable>
export type NewItem = Insertable<ItemTable>
export type ItemUpdate = Updateable<ItemTable>
export type Database = {
    item: ItemTable;
};
