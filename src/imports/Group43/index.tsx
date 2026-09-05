import svgPaths from "./svg-7mpd1ez25l";

function Time({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Time">
      <div className="absolute inset-[16.67%]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <circle cx="10" cy="10" id="Ellipse 54" r="9" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[31.25%] top-[35.42%]">
        <div className="absolute inset-[-28.57%_-22.22%]">
          <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 6.5 5.5" width="6.5">
            <path d={svgPaths.p12451900} id="Vector 64" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  return <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#272727] border-solid h-[265px] left-0 rounded-[15px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.18),0px_8px_32px_0px_rgba(0,0,0,0.7),0px_0px_24px_0px_rgba(255,255,255,0.03)] top-0 w-[288px]" data-name="BottomNav" />;
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] h-[39.045px] items-center justify-center left-0 px-[13px] py-[7px] rounded-[10px] top-0 w-[109.944px]" data-name="Button">
      <Time className="relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">Time Rule</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <BottomNav />
      <Button />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="contents relative size-full">
      <Group2 />
      <div className="absolute bg-[#272727] h-[64px] left-0 rounded-[10px] top-0 w-[222px]" />
      <div className="[word-break:break-word] absolute font-['Lato:Italic',sans-serif] italic leading-[0] left-0 text-[#bbb] text-[0px] top-0 tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[15px] mb-0 text-[11px] whitespace-pre">{`30 mins in: `}</p>
        <p className="text-[13px] text-white whitespace-pre">
          <span className="leading-[15px]">A</span>
          <span className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px]">sk T2 for help</span>
        </p>
      </div>
      <div className="[word-break:break-word] absolute font-['Lato:Italic',sans-serif] italic leading-[0] left-0 text-[#bbb] text-[0px] top-0 tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[15px] mb-0 text-[11px] whitespace-pre">{`15 mins in: `}</p>
        <p className="text-[13px] text-white whitespace-pre">
          <span className="leading-[15px]">A</span>
          <span className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px]">sk T1 for help</span>
        </p>
      </div>
      <div className="[word-break:break-word] absolute font-['Lato:Italic',sans-serif] italic leading-[0] left-0 text-[#bbb] text-[0px] top-0 tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[15px] mb-0 text-[11px] whitespace-pre">{`45 - 60 mins in: `}</p>
        <p className="font-['Lato:Bold_Italic',sans-serif] leading-[15px] text-[13px] text-white whitespace-pre">Escalate if you aren’t close to solving</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Lato:Italic',sans-serif] italic leading-[0] left-0 text-[#bbb] text-[8px] top-0 tracking-[0.6px] w-[203px] whitespace-pre-wrap">
        <p className="leading-[9px] mb-0">If you have worked the ticket more than a few days, but can’t figure it out still, escalate</p>
        <p className="leading-[9px] mb-0">​</p>
        <p className="leading-[9px]">If you’re getting close, you feel like you almost got it solved, keep going</p>
      </div>
    </div>
  );
}