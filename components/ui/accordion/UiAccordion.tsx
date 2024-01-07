import { Box } from "@mui/material";

const UiAccordion = () => {
  return (
    <Box className="my-4">
 
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3"  />
        <div className="collapse-title text-xl font-medium  w-[100%] rounded-lg">
          <input
            className="w-[99%] h-full min-h-12 z-30 rounded-md"
            value={"Click to open this one and close others"}
          />
        </div>
        <div className="collapse-content">
           <input className="w-[96%] min-h-16 h-full" value={"hello"} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium  w-[100%] rounded-lg">
          <input
            className="w-[99%] h-full min-h-12 z-30 rounded-md"
            value={"Click to open this one and close others"}
          />
        </div>
        <div className="collapse-content">
           <input className="w-[96%] min-h-16 h-full" value={"hello"} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium  w-[100%] rounded-lg">
          <input
            className="w-[99%] h-full  min-h-12 z-30  rounded-md"
            value={"Click to open this one and close others"}
          />
        </div>
        <div className="collapse-content">
           <input className="w-[96%] min-h-16 h-full" value={"hello"} />
        </div>
      </div>
    </Box>
  );
};

export default UiAccordion;
