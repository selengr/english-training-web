interface FieldProps {
    placeholder?: string;
    id: string;
    label: string;
    required: boolean;
    register: any;
    errors: any;
    styleClass?: string;
  }
  
  // ========================================================input component
  export const CustomField: React.FC<FieldProps> = ({
    id,
    label,
    placeholder,
    register,
    errors,
    styleClass,
    required,
  }) => {
    return (
      <>
        <div>
          <label htmlFor={id} className="block text-lg font-semibold mt-2">
            {label}
            <span className={"text-rose-600"}>*</span>
          </label>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={`${styleClass} ${
              errors[id] && " border-rose-500 border-[1px]"
            }`}
            {...register(id, { required: true })}
          />
          {errors[id] && errors[id].type && (
            <p className="text-rose-500 pr-2">{errors[id].message}</p>
          )}
        </div>
      </>
    );
  };