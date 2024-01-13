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
    required = false,
  }) => {
    return (
      <>
        <div>
          <label htmlFor={id} className="block text-lg font-semibold mt-2">
            {label}
            <span className={"text-rose-600"}>{required?"*":""}</span>
          </label>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={`input input-bordered input-md w-[99%] ml-1 my-1
             ${styleClass} ${
              errors[id] && " border-rose-500 border-[1px]"
            }`}
            {...register(id, { required: required })}
          />
          {errors[id] && errors[id].type && (
            <p className="text-rose-500 pr-2">{errors[id].message}</p>
          )}
        </div>
      </>
    );
  };