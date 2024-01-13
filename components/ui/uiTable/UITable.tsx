const UITable = (
  data: { data: { column1: string; column2: string; column3: string }[] } | null
) => {

  return (
    <div className="w-full border-[1px] border-cyan-500 rounded-2xl">
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>{data?.data[0].column1}</th>
              <th>{data?.data[0].column2}</th>
              <th>{data?.data[0].column3}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data.map((item,index) => {
              if(index != 0){
                return (
                    <>
                      <tr>
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                        <td>{item.column3}</td>
                      </tr>
                    </>
                  );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UITable;
