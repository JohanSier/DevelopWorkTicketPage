import svgPaths from "./svg-312053kpy9";

function VideoFill({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Video_fill">
      <div className="absolute inset-[12.5%]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p21d34680} fill="white" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

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

function BottomNav() {
  return <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#272727] border-solid h-[675px] left-0 rounded-[15px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.18),0px_8px_32px_0px_rgba(0,0,0,0.7),0px_0px_24px_0px_rgba(255,255,255,0.03)] top-0 w-[288px]" data-name="BottomNav" />;
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[6px] items-center justify-center left-0 px-[13px] py-[7px] rounded-[10px] top-0" data-name="Button">
      <CommunicationChatConversationCircle className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">Call Flow</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[6px] items-center justify-center left-0 px-[13px] py-[7px] rounded-[10px] top-0 w-[151px]" data-name="Button">
      <VideoFill className="relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">Play Example</p>
      <p className="[word-break:break-word] font-['Lato:Bold_Italic',sans-serif] italic leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">2:00</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <BottomNav />
      <p className="[word-break:break-word] absolute font-['Lato:Bold_Italic',sans-serif] h-[51.746px] italic leading-[15px] left-0 text-[#bbb] text-[13px] top-0 tracking-[0.6px] w-[250px] whitespace-pre-wrap">{`— Hello [User], Good Afternoon My Name is [Your Name] with the SOS team. How's your (Day) (Afternoon) going?  `}</p>
      <Button />
      <Button1 />
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

function Group4() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Lato:Bold_Italic',sans-serif] italic left-0 text-[#bbb] text-[13px] top-0 tracking-[0.6px]">
      <p className="absolute leading-[15px] left-0 top-0 w-[243px]">— Alright, let me assisst you with this issue, is it okay if I remote into your computer?</p>
      <p className="absolute leading-[15px] left-0 top-0 w-[243px]">— If anything else comes up feel free to reach out, the SOS will be happy to help. Have a good one!</p>
      <p className="absolute leading-[15px] left-0 top-0 w-[243px]">{`— I'm reaching out because of the ticket that you opened with us. `}</p>
      <p className="absolute leading-[15px] left-0 top-0 w-[243px] whitespace-pre-wrap">{`— Just to let you know this call is being recorded for quality and training purposes.  `}</p>
      <div className="absolute leading-[0] left-0 top-0 w-[243px] whitespace-pre-wrap">
        <p className="leading-[15px] mb-0">{`— Would it be okay if we do another quick verification? `}</p>
        <p className="leading-[15px] mb-0">​</p>
        <p className="leading-[15px] mb-0">{`I just sent you a push notification to your cellphone through the Microsoft Authenticator app, could you confirm the sign in belongs to you? `}</p>
        <p className="leading-[15px] mb-0">​</p>
        <p className="leading-[15px] mb-0">OR</p>
        <p className="leading-[15px] mb-0">​</p>
        <p className="leading-[15px]">{`I just sent you an SMS message to your cellphone ending in: (Last four digits) Could you provide me with the six digit code? `}</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="contents relative size-full">
      <Group1 />
      <Group3 />
    </div>
  );
}