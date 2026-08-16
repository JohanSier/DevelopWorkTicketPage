export default function Group() {
  return (
    <div className="contents relative size-full">
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] text-white top-0 whitespace-nowrap">Available Soon</p>
      <p className="[word-break:break-word] absolute font-['Lato:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#8f8a8a] text-[18px] top-0 whitespace-nowrap">In Progress</p>
      <div className="absolute bg-[#1a1e29] border border-[#544a4a] border-solid h-[286px] left-0 rounded-[33px] top-0 w-[284px]" />
      <div className="absolute bg-[rgba(185,185,185,0.12)] left-0 rounded-[33px] size-[262px] top-0" />
    </div>
  );
}