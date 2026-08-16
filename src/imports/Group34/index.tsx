import imgRectangle13 from "./9c14bcc5b2fba6b38370c012becd2118db0a6729.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] text-shadow-[0px_1px_100px_rgba(252,205,88,0.2)] text-white top-0 whitespace-nowrap">Trackpad Issue</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#8f8a8a] text-[18px] text-shadow-[0px_1px_100px_rgba(252,205,88,0.2)] top-0 whitespace-nowrap">By Johan Cortes</p>
      <div className="absolute bg-[#29241a] border border-[#544a4a] border-solid h-[286px] left-0 rounded-[33px] top-0 w-[284px]" />
      <div className="absolute left-0 rounded-[33px] size-[262px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[33px] size-full" src={imgRectangle13} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] text-white top-0 whitespace-nowrap">Available Soon</p>
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] text-white top-0 whitespace-nowrap">Available Soon</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#8f8a8a] text-[18px] top-0 whitespace-nowrap">In Progress</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#8f8a8a] text-[18px] top-0 whitespace-nowrap">In Progress</p>
      <div className="absolute bg-[#1a1e29] border border-[#544a4a] border-solid h-[286px] left-0 rounded-[33px] top-0 w-[284px]" />
      <div className="absolute bg-[rgba(185,185,185,0.12)] left-0 rounded-[33px] size-[262px] top-0" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#291a1a] border border-[#544a4a] border-solid h-[286px] left-0 rounded-[33px] top-0 w-[284px]" />
      <div className="absolute left-0 rounded-[33px] size-[262px] top-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[33px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[33px] size-full" src={imgRectangle13} />
          <div className="absolute bg-[#3e2f2f] inset-0 rounded-[33px]" />
        </div>
      </div>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="contents relative size-full">
      <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[normal] left-0 text-[100px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        CHOOSE A SIMULATION
      </p>
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}