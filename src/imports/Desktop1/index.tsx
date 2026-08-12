import svgPaths from "./svg-yi0ipakdrx";
import imgShot20260812ALaS90049AM1 from "./fb318056c750e8555eee1335e27d3a04649a8aad.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24.255px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.2553" preserveAspectRatio="none" viewBox="0 0 24.2553 24.2553" width="24.2553">
        <g id="Frame">
          <path d={svgPaths.p2ce92780} id="Vector" stroke="#E4E4E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[12.128px] text-white whitespace-nowrap">Home</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[53.362px]">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24.255px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.2553" preserveAspectRatio="none" viewBox="0 0 24.2553 24.2553" width="24.2553">
        <g id="Frame">
          <path d={svgPaths.p21ce5800} id="Vector" stroke="#E4E4E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[12.128px] text-white whitespace-nowrap">Work Ticket</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[64.277px]">
      <Frame1 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24.255px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.2553" preserveAspectRatio="none" viewBox="0 0 24.2553 24.2553" width="24.2553">
        <g id="Frame">
          <path d={svgPaths.p527e700} id="Vector" stroke="#E4E4E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[12.128px] text-white whitespace-nowrap">Escalations</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[59.426px]">
      <Frame2 />
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[18.191px] h-[57px] items-center justify-center left-[calc(50%-0.38px)] px-[38.809px] py-[14.553px] rounded-[60.638px] top-[836px] w-[269.234px]">
      <div aria-hidden className="absolute border-[#e4e4e4] border-[1.213px] border-solid inset-0 pointer-events-none rounded-[60.638px] shadow-[0px_1px_7px_0px_white]" />
      <Frame4 />
      <Frame5 />
      <Frame8 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#06050a] relative size-full" data-name="Desktop - 1">
      <Frame7 />
      <div className="absolute h-[566px] left-[217px] top-[195px] w-[1006px]" data-name="Shot 2026-08-12 a la(s) 9.00.49 a.m. 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShot20260812ALaS90049AM1} />
      </div>
    </div>
  );
}