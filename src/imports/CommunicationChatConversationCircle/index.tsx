import svgPaths from "./svg-onvyetoav7";

export default function CommunicationChatConversationCircle({ className }: { className?: string }) {
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