import UiButton from "@/components/ui/UiButton";
import React from "react";
import { useState } from "react";

function CreateTable({setTableData,tableData}:any) {
  const [formInputData, setformInputData] = useState({
    column1: "",
    column2: "",
    column3: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { column1: "", column2: "", column3: "" };
      setformInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CreateTable;

function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row rounded-2xl p-4 mb-2 border-[1px] border-cyan-500 ">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.column1}
          name="column1"
          placeholder="column1"
          className={`input input-bordered input-sm w-[99%] ml-1 my-1 form-control`}
        />
      </div>
      <div className="col">
        <input
          type="email"
          onChange={handleChange}
          value={formInputData.column2}
          name="column2"
          className={`input input-bordered input-sm w-[99%] ml-1 my-1 form-control`}
          placeholder="column2"
        />
      </div>
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.column3}
          name="column3"
          className={`input input-bordered input-sm w-[99%] ml-1 my-1 form-control`}
          placeholder="column3"
        />
      </div>
      <div className="col mt-4">
      <UiButton
            type="submit"
            onClick={handleSubmit}
            className="Glass bg-sky-950 mt-14 hover:bg-sky-950 text-white text-ms-lg h-[38px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
          >
            create table
          </UiButton>
    
      </div>
    </div>
  );
}

export { FormInput };

function Table({ tableData }) {
  return (
    <table className="table">
      {/* <thead>
        <tr>
          <th>S.N</th>
          <th>column1</th>
          <th>column2</th>
          <th>column3</th>
        </tr>
      </thead> */}
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              {index == 0 && (
                <>
                  <>
                    <td className="bg-sky-800 text-gray-400 font-bold">S.N</td>
                    <td className="bg-sky-800 text-gray-400 font-bold">
                      {data.column1}
                    </td>
                    <td className="bg-sky-800 text-gray-400 font-bold">
                      {data.column2}
                    </td>
                    <td className="bg-sky-800 text-gray-400 font-bold">
                      {data.column3}
                    </td>
                  </>
                </>
              )}
              {index != 0 && (
                <>
                  <td>{index + 1 - 1}</td>
                  <td>{data.column1}</td>
                  <td>{data.column2}</td>
                  <td>{data.column3}</td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { Table };
