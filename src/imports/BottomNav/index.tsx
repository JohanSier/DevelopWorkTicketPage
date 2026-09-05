import svgPaths from "./svg-9azk37cs4q";

function CommunicationChatConversationCircle({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Communication / Chat_Conversation_Circle">
      <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.69%_-4.17%]">
          <svg className="block size-full" fill="none" height="17.5002" preserveAspectRatio="none" viewBox="0 0 19.4995 17.5002" width="19.4995">
            <path d={svgPaths.p3fb36780} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] items-center justify-center px-[13px] py-[7px] relative rounded-[10px] shrink-0" data-name="Button">
      <CommunicationChatConversationCircle className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">Call Flow</p>
    </div>
  );
}

export default function BottomNav() {
  return (
    <div className="bg-[#0a0a0a] border border-[#272727] border-solid content-stretch flex items-center px-[8px] py-[6px] relative rounded-[15px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.18),0px_8px_32px_0px_rgba(0,0,0,0.7),0px_0px_24px_0px_rgba(255,255,255,0.03)] size-full" data-name="BottomNav">
      <Button />
    </div>
  );
}