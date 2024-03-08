import { Item} from "./db";

export type PublicItem = Pick<Item, 'created_at'|'email'|'id'|'title'|'price'|'type'>