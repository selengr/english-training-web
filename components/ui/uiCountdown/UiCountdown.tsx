
const UiCountdown = () => {
  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span  
            // style={{ "--value": 0 }}
            >00</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span  
            // style={{ "--value": 0 }}
            >00</span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span  
            // style={{ "--value": 0 }}
            >00</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span  
            // style={{ "--value": 47 }}
            >00</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default UiCountdown;
