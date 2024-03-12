import { db } from "@/db";
import { PublicItem } from "@/types";
import { ItemTypes } from "@/db/types";
import { StringsOnlyRecord } from "@/types/utils";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ArchiveBoxIcon, DocumentIcon, DocumentTextIcon, MicrophoneIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

const itemBadgeData:Record<ItemTypes,StringsOnlyRecord<'startColor'|'endColor'>&{icon:typeof ArchiveBoxIcon}> = {
	[ItemTypes.Archive]:{startColor:"indigo-300",endColor:"indigo-400",icon:ArchiveBoxIcon},
	[ItemTypes.Audio]:{startColor:"indigo-300",endColor:"indigo-400",icon:MicrophoneIcon},
	[ItemTypes.Image]:{startColor:"indigo-300",endColor:"indigo-400",icon:PhotoIcon},
	[ItemTypes.Text]:{startColor:"indigo-300",endColor:"indigo-400",icon:DocumentTextIcon},
	[ItemTypes.Video]:{startColor:"indigo-300",endColor:"indigo-400",icon:VideoCameraIcon},
	[ItemTypes.Other]:{startColor:"indigo-300",endColor:"indigo-400",icon:DocumentIcon},
}

export const getServerSideProps = (async(context)=>{
	if(!context.params?.id){return {notFound:true}}
	const item = await db.selectFrom('items').where('id','=',context.params.id).select(['created_at','user','id','title','price','type']).executeTakeFirst()
	if(!item) return {notFound:true}
	return {props:{item}}
}) satisfies GetServerSideProps<{ item: PublicItem }>

export default function Page({item}:InferGetServerSidePropsType<typeof getServerSideProps>){
	const badgeData = itemBadgeData[item.type]
	return(
		<div className="flex flex-col gap-2 items-center">
			<div className={`w-20 aspect-square rounded-md p-unit-sm bg-gradient-to-tr from-${badgeData.startColor} to-${badgeData.endColor}`}>
				{<badgeData.icon color="white"/>}
			</div>
		</div>
	)
}