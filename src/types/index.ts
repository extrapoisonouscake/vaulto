export interface Item {
	id: string
	title: string
	created_at: string
	updated_at: string
	email: string
	access_token?: string
}
export type PublicItem = Omit<Item, 'access_token'|'email'>