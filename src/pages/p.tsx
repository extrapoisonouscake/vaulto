import { db } from "@/db";
import { User } from "@/db/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUserIdWithJWT } from "./api/auth";

export const getServerSideProps = (async(context)=>{
	const {access} = context.req.cookies;
	if(!access) return {redirect:{destination:'/auth',permanent:false}}
	const userId = await getUserIdWithJWT(access)
	const user = await db.selectFrom('users').where('id','=',userId).select(['email','created_at','id']).executeTakeFirst()
	if(!user) return {notFound:true}
	return {props:{user}}
}) satisfies GetServerSideProps<{ user:User }>

export default function Page({user}:InferGetServerSidePropsType<typeof getServerSideProps>){
	return(
		<>
		<h2>Profile</h2>
		<span className="text-gray-600">Email</span>
		<p>{user.email}</p>
		</>
	)
}