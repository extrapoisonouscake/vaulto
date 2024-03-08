import { db } from "@/db";
import { PublicItem } from "@/types";
import { ItemTypes } from "@/types/db";
import { StringsOnlyRecord } from "@/types/utils";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";



export const getServerSideProps = (async(context)=>{
	if(!context.params?.id){return {notFound:true}}
	const item = await db.selectFrom('item').select(['created_at','email','id','title','price','type']).where('id','=',context.params.id).executeTakeFirst()
	if(!item) return {notFound:true}
	return {props:{item}}
}) satisfies GetServerSideProps<{ item: PublicItem }>

const itemBadgeData:Record<ItemTypes,StringsOnlyRecord<'start'|'end'>&{icon:}> = {
	[ItemTypes.Archive]:
}

export default function Page({item}:InferGetServerSidePropsType<typeof getServerSideProps>){
	return(
		<div className="flex flex-col gap-2 items-center">

		</div>
	)
}