import svgPaths from "./svg-okrbsrgyc";

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

export default function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] items-center justify-center px-[13px] py-[7px] relative rounded-[10px] size-full" data-name="Button">
      <Time className="relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">Time Rule</p>
    </div>
  );
}