import { FormField } from "@/components/FormField";
import { Item } from "@/db/types";
import { ArrowUpTrayIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { FormEvent, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
interface FormFields extends Pick<Item,'price'|'title'> {
	source:File
}
const FormSchema:ZodType<FormFields> = z.object({
	email:z.string().email(),
	title:z.string().min(1).max(50),
	price:z.number().min(0.01).max(10000),
	source:z.instanceof(File)
})
export default function Page(){
	const methods = useForm<FormFields>({
		resolver:zodResolver(FormSchema)
	});
	const fileInputRef = useRef<HTMLInputElement>(null)
	const onSubmit = async(fields:FormFields)=>{
		
		const formData = new FormData()
		for(const field of Object.entries(fields)){
			formData.append(field[0],field[1])
		}
		const request = await fetch('/api/item',{method:'POST',body:formData})
		if(request.ok){

		}
	}
	return(
		<>
		<h2>New Item</h2>
		<FormProvider {...methods}>
		<form onSubmit={methods.handleSubmit(onSubmit)}>
			<FormField type="email" placeholder="vaulto@gmail.com" label="Email" name="email"/>
			<FormField placeholder="My Secret Project" name="title" label="Title"/>
			<FormField placeholder="200" type="number" min="0.01" step="0.01" name="price" label="Price" endContent={<CurrencyDollarIcon/>}/>
			<div onClick={()=>fileInputRef.current?.click()} className="flex rounded-md border-dashed border-s-1 p-unit-md border-gray-400 items-center justify-center">
<ArrowUpTrayIcon className="w-5"/>
</div>
<Input name="source" ref={fileInputRef} className="hidden" type="file"/>
<Button type="submit">Submit</Button>
			</form>	</FormProvider>
		
		</>
	)
}