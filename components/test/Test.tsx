import Image from "next/image";

const Test = () => {
  return (
    //   <div className="diff aspect-[16/9] flex flex-col">
    //     <div className="diff-item-1">
    //       <Image
    //         height={0}
    //         width={0}
    //         className="w-full h-36"
    //         alt="daisy"
    //         src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
    //       />
    //     </div>
    //     <div className="diff-item-2">
    //       <Image
    //         height={0}
    //         width={0}
    //         className="w-full filter h-36"
    //         alt="daisy"
    //         src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
    //       />
    //     </div>
    //     <div className="diff-resizer"></div>
    //   </div>
    <div className="flex flex-row">
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            DAISY
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            DAISY
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>

      <div className="">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 h-screen">
              <Image
                height={0}
                width={0}
                className="w-full filter h-screen"
                alt="daisy"
                src="/images/fikeus-west-2.avif"
              />

              <div className="mockup-code">
                <pre data-prefix="$">
                  <code>npm i daisyui</code>
                </pre>
              </div>

              <div className="mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
</div>

              <div className="mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
</div>

              <div className="mockup-code">
  <pre data-prefix="1"><code>npm i daisyui</code></pre> 
  <pre data-prefix="2"><code>installing...</code></pre> 
  <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* <div class="diff aspect-[16/9]">
  <div class="diff-item-1">
    <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
  </div>
  <div class="diff-item-2">
    <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg" />
  </div>
  <div class="diff-resizer"></div>
</div> */}
    </div>
  );
};

export default Test;
