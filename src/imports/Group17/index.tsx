import imgFrame22 from "./5fbd4d761a8a8a3dfcf798425b241c5daeb2d0fe.png";

function Frame() {
  return (
    <div className="absolute h-[30.211px] left-0 top-0 w-[57.756px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[244.93%] left-[-48.08%] max-w-none top-[-77.5%] w-[195.58%]" src={imgFrame22} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <Frame />
      <div className="absolute bg-black h-[1.39px] left-0 top-0 w-[6.439px]" />
    </div>
  );
}