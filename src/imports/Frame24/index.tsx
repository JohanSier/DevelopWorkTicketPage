import svgPaths from "./svg-9o00xuoqnj";
import imgRectangle13 from "./9c14bcc5b2fba6b38370c012becd2118db0a6729.png";

function Group1() {
  return (
    <div className="absolute contents left-[361px] top-[287px]">
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-[411px] not-italic text-[28px] text-shadow-[0px_1px_100px_rgba(252,205,88,0.2)] text-white top-[597px] whitespace-nowrap">Trackpad Issue</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-[439px] not-italic text-[#8f8a8a] text-[18px] text-shadow-[0px_1px_100px_rgba(252,205,88,0.2)] top-[639px] whitespace-nowrap">By Johan Cortes</p>
      <div className="absolute bg-[#29241a] border border-[#544a4a] border-solid h-[286px] left-[361px] rounded-[33px] top-[287px] w-[284px]" />
      <div className="absolute left-[372px] rounded-[33px] size-[262px] top-[299px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33px] size-full" src={imgRectangle13} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[708px] top-[287px]">
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-[758px] not-italic text-[28px] text-white top-[597px] whitespace-nowrap">Available Soon</p>
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-[1105px] not-italic text-[28px] text-white top-[597px] whitespace-nowrap">Available Soon</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-[806px] not-italic text-[#8f8a8a] text-[18px] top-[639px] whitespace-nowrap">In Progress</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-[1153px] not-italic text-[#8f8a8a] text-[18px] top-[639px] whitespace-nowrap">In Progress</p>
      <div className="absolute bg-[#1a1e29] border border-[#544a4a] border-solid h-[286px] left-[708px] rounded-[33px] top-[287px] w-[284px]" />
      <div className="absolute bg-[rgba(185,185,185,0.12)] left-[719px] rounded-[33px] size-[262px] top-[299px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1055px] top-[287px]">
      <div className="absolute bg-[#291a1a] border border-[#544a4a] border-solid h-[286px] left-[1055px] rounded-[33px] top-[287px] w-[284px]" />
      <div className="absolute left-[1066px] rounded-[33px] size-[262px] top-[299px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[33px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[33px] size-full" src={imgRectangle13} />
          <div className="absolute bg-[#3e2f2f] inset-0 rounded-[33px]" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[361px] top-[200px]">
      <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[normal] left-[365px] text-[100px] text-white top-[200px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        CHOOSE A SIMULATION
      </p>
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="HomeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="HomeIcon">
          <path d={svgPaths.p60f7dc0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M6.75 16.5V9H11.25V16.5" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex flex-col gap-[3px] items-center px-[13px] py-[7px] relative rounded-[40px] shrink-0" data-name="Button">
      <HomeIcon />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[10px] text-center text-white tracking-[0.6px] whitespace-nowrap">Home</p>
    </div>
  );
}

function TicketIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="TicketIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="TicketIcon">
          <path d={svgPaths.p3084ce00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d="M6 15.75H12" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d="M9 12.75V15.75" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center px-[13px] py-[7px] relative rounded-[40px] shrink-0" data-name="Button">
      <TicketIcon />
      <p className="[word-break:break-word] font-['Lato:Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.35)] text-center tracking-[0.6px] whitespace-nowrap">Work Ticket</p>
    </div>
  );
}

function TemplatesIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="TemplatesIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="TemplatesIcon">
          <path d={svgPaths.p3d3fad80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d="M6 6H10.5M6 9H10.5M6 12H9" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d="M13.5 5.25H15V15.75H6V15" id="Vector_3" opacity="0.65" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center px-[13px] py-[7px] relative rounded-[40px] shrink-0" data-name="Button">
      <TemplatesIcon />
      <p className="[word-break:break-word] font-['Lato:Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.35)] text-center tracking-[0.6px] whitespace-nowrap">Templates</p>
    </div>
  );
}

function EscalationsIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="EscalationsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="EscalationsIcon">
          <path d={svgPaths.p3428d880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p31892ec0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p1004e820} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center px-[13px] py-[7px] relative rounded-[40px] shrink-0" data-name="Button">
      <EscalationsIcon />
      <p className="[word-break:break-word] font-['Lato:Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.35)] text-center tracking-[0.6px] whitespace-nowrap">Escalations</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#272727] border-solid content-stretch flex gap-[2px] items-center left-[calc(50%+0.5px)] px-[8px] py-[6px] rounded-[50px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.18),0px_8px_32px_0px_rgba(0,0,0,0.7),0px_0px_24px_0px_rgba(255,255,255,0.03)] top-[792px]" data-name="BottomNav">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#07070a] relative size-full">
      <Group />
      <BottomNav />
    </div>
  );
}