import svgPaths from "./svg-nmdd6whwu5";
import imgFrame22 from "./5fbd4d761a8a8a3dfcf798425b241c5daeb2d0fe.png";
import imgMentor6 from "./28690d7534d4b465f06831c8e6137560e94ec897.png";

function Frame() {
  return (
    <div className="absolute h-[30.211px] left-0 top-0 w-[57.756px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[244.93%] left-[-48.08%] max-w-none top-[-77.5%] w-[195.58%]" src={imgFrame22} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame />
      <div className="absolute bg-black h-[1.39px] left-0 top-0 w-[6.439px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[13.929px] left-0 top-0 w-[54.643px]">
        <div className="absolute inset-[-5.74%_0.17%_-5.74%_0.31%]">
          <svg className="block size-full" fill="none" height="15.5266" preserveAspectRatio="none" viewBox="0 0 54.3783 15.5266" width="54.3783">
            <path d={svgPaths.p1430fd80} fill="#FFFCFC" id="Vector 8" stroke="white" strokeWidth="0.799031" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato:Bold_Italic',sans-serif] italic leading-[13.626px] left-[11.5px] text-[10.714px] text-black text-center top-0 tracking-[0.545px] whitespace-nowrap">User</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[13.929px] left-0 top-0 w-[61px]">
        <div className="absolute inset-[-5.74%_0.36%_-5.74%_0.51%]">
          <svg className="block size-full" fill="none" height="15.5266" preserveAspectRatio="none" viewBox="0 0 60.4704 15.5266" width="60.4704">
            <path d={svgPaths.p1e13fa00} fill="#FFFCFC" id="Vector 8" stroke="white" strokeWidth="0.799031" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato:Bold_Italic',sans-serif] italic leading-[13.626px] left-[20.65px] text-[10.714px] text-black text-center top-0 tracking-[0.545px] w-[41.305px]">Mentor</p>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="contents relative size-full">
      <div className="[word-break:break-word] absolute font-['Lato:Medium_Italic',sans-serif] italic leading-[0] left-0 text-[12px] text-white top-0 tracking-[0.9px] whitespace-nowrap">
        <p className="leading-[22.5px] mb-0">I’m using a external mouse with a usb receiver and it</p>
        <p className="leading-[22.5px]">works totally fine</p>
      </div>
      <Group />
      <Group1 />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Lato:Bold_Italic',sans-serif] italic leading-[22.5px] left-0 text-[12px] text-right text-white top-0 tracking-[0.9px] w-[334px]">You called the user and got extra information, then don’t forget to caller verify user and if they mention the word of the day, share it with them</p>
      <Group2 />
      <div className="absolute h-[50.323px] left-0 top-0 w-[52px]" data-name="mentor 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.33%] left-[-55%] max-w-none top-[-14%] w-[208.06%]" src={imgMentor6} />
        </div>
      </div>
    </div>
  );
}