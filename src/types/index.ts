import { Item} from "../db/types";

export type PublicItem = Pick<Item, 'created_at'|'user'|'id'|'title'|'price'|'type'>