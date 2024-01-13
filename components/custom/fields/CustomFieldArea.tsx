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
 
  export const CustomFieldArea: React.FC<FieldProps> = ({
    id,
    label,
    placeholder,
    register,
    errors,
    styleClass,
    required = false,
  }) => {
    return (
      <>
        <div className={"w-100"}>
          <label className="block  font-bold mt-2" htmlFor={id}>
            {label}
          </label>
          <textarea
            id={id}
            rows={3}
            placeholder={placeholder}
            className={`textarea textarea-bordered textarea-md w-[99%] ml-1 mt-1
            ${styleClass} ${
              errors[id] && " border-rose-500 border-[1px]"
            }`}
            {...register(id, { required: required })}
          ></textarea>
          {errors[id] && errors[id].type && (
            <p className="text-rose-500 pr-2">{errors[id].message}</p>
          )}
        </div>
      </>
    );
  };
  