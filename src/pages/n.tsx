import { FormField } from "@/components/FormField";
import { Item } from "@/db/types";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
interface FormFields extends Pick<Item,'price'|'title'|'type'> {
	source:File
}

export default function Page(){
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	  } = useForm<FormFields>();
	return(
		<>
		<h2>New Item</h2>
		<form onSubmit={handleSubmit}>
			<FormField type="email" register={register} placeholder="vaulto@gmail.com" name="email"/>
			<FormField placeholder="My Secret Project" register={register} name="title"/>
			<FormField
			</form>	
		
		</>
	)
}