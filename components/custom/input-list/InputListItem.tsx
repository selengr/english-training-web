import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import UiButton from "@/components/ui/UiButton";
import { SaveTable } from "@/app/types/dashboard";

interface FieldProps {
  placeholder?: string;
  id: string;
  label: string;
  required?: boolean;
  register: any;
  errors: any;
  styleClass?: string;
  SaveTable: (inputList:any) => void
}

// ========================================================input component
const InputListItem: React.FC<FieldProps> = ({
  id,
  label,
  placeholder,
  register,
  errors,
  styleClass,
  required = false,
  SaveTable
}) => {
  const [inputList, setInputList] = useState<SaveTable[]>([
    {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input_rank: null,
    },
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

//   useEffect(() => {
//     if (inputList.length > 0) {
//       inputList[inputList.length - 1].input === ""
//         ? setIsDisabled(true)
//         : setIsDisabled(false);
//     }
//   }, []);

useEffect(() => {
    if (inputList.length > 0) {
      inputList[inputList.length - 1].input === ""
        ? setIsDisabled(true)
        : setIsDisabled(false);
    }
  });

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input_rank: null,
      },
    ]);
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputList = [...inputList];
    newInputList[index].input = value;
    newInputList[index].input_rank = index + 1;
    console.log('newInputList :>> ', newInputList);
    setInputList(newInputList);
  };

  const handleRemoveItem = (index) => {
    const newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
  };

  console.log(inputList);

  return (
    <div className="App">
      <label htmlFor={id} className="block text-lg font-semibold mt-2">
        {label}
      </label>

      {inputList.length > 0
        ? inputList.map((input, index) => (
            <div key={index} style={inputStyles} className="flex flex-row">
              {/* <button>{index === 0 ? "title" : "option"}</button> */}
              <TextField
                id={id+index}
                label={`column ${index + 1}`}
                variant="outlined"
                className="w-1/4 h-14"
                // {...register(id, { required: required })}
                onChange={(event) => handleInputChange(event, index)}
              />
              <TextField
                id={id+index}
                label={`column ${index + 1}`}
                variant="outlined"
                className="w-1/4 h-14"
                // {...register(id, { required: required })}
                onChange={(event) => handleInputChange(event, index)}
              />
              <TextField
                id={id+index}
                label={`column ${index + 1}`}
                variant="outlined"
                className="w-1/4 h-14"
                // {...register(id, { required: required })}
                onChange={(event) => handleInputChange(event, index)}
              />
              <TextField
                id={id+index}
                label={`column ${index + 1}`}
                variant="outlined"
                className="w-1/4 h-14"
                // {...register(id, { required: required })}
                onChange={(event) => handleInputChange(event, index)}
              />
              <button
                className=""
                style={btnStyle}
                onClick={() => handleRemoveItem(index)}
              >
                <span role="img" aria-label="x emoji">
                  ❌
                </span>
              </button>
            </div>
          ))
        : "No item in the list "}
            <div className="flex flex-row">
        <UiButton
          onClick={handleListAdd}
          disabled={isDisabled}
          className="Glass bg-white m-2 disabled:text-slate-40 text-slate-950 text-sm h-[35px] w-40 rounded-[15px]"
        >
          Add More
        </UiButton>
        <UiButton
          onClick={()=>SaveTable(inputList)}
          className="Glass bg-lime-300 m-2 disabled:text-slate-40 text-white text-sm h-[35px] w-32 rounded-[15px]"
        >
          save
        </UiButton>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: "0.2rem",
  cursor: "pointer",
  marginTop: "1rem",
};

const inputStyles = {
  marginTop: ".6rem",
};


export default InputListItem