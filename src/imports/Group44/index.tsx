function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Why</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-0 px-[10px] py-[5px] rounded-[8px] top-0">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">When</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-0 px-[10px] py-[5px] rounded-[8px] top-0">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Where</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-0 px-[10px] py-[5px] rounded-[8px] top-0">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">What</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-0 px-[10px] py-[5px] rounded-[8px] top-0">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Who</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[normal] left-0 text-[39px] text-shadow-[0px_4px_41px_white] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        5W’s
      </p>
      <Frame2 />
      <Frame3 />
      <Frame5 />
      <Frame1 />
      <Frame />
    </div>
  );
}