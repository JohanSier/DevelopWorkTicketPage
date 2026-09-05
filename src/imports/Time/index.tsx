import svgPaths from "./svg-cs97cg2zej";

export default function Time({ className }: { className?: string }) {
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