import { db } from "@/db";
import { Item } from "@/types";
import { GetServerSideProps } from "next";



export const getServerSideProps = (async(context)=>{
	if(!context.params?.id){context.res.statusCode= 400; return {}}
	const item = await db.selectFrom('items').where('id','=',context.params.id).executeTakeFirst()
}) satisfies GetServerSideProps<{ item: Item }>