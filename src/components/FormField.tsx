import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
	type?: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;//!fix
    error?: FieldError;
    valueAsNumber?: boolean;
}
export const FormField: React.FC<Props> = ({
	type='text',
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
  }) => (
	<>
	  <input
		type={type}
		placeholder={placeholder}
		{...register(name, { valueAsNumber })}
	  />
	  {error && <span className="error-message">{error.message}</span>}
	</>
  );