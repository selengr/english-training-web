const UITable = () => {

  return (
    <div className="w-full border-[1px] border-cyan-500 rounded-2xl">
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>test</th>
              <th>test</th>
              <th>test</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {[1,23,88876,543,2,3456,78,765,4,56,7,654,3,4].map((item,index) => {
              if(index != 0){
                return (
                    <>
                      <tr>
                        <td>reza  dghilwdf </td>
                        <td>reza  dghilwdf </td>
                        <td>reza  dghilwdf </td>
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
