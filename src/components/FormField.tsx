import { WithRequired } from "@/types/utils";
import { Input, InputProps } from "@nextui-org/react";
import { HTMLAttributes, HTMLProps } from "react";
import { FieldError, UseFormRegister, useFormContext } from "react-hook-form";
type InputHTMLProps = HTMLProps<HTMLInputElement>
interface Props {
    error?: FieldError;
    valueAsNumber?: boolean;
}
export function FormField({
	placeholder,
	name,
	error,
	label,
	valueAsNumber,
	...props
  }:Props&WithRequired<InputProps,'placeholder'|'name'>) {
	const { register } = useFormContext()
	return(
	<>
	  <Input
		{...register(name, { valueAsNumber })}
		{...props}
	  />
	  {error && <span className="error-message">{error.message}</span>}
	</>
  )};