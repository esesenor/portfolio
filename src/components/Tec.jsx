import { hoverStyle, tecStyle } from "../constants/constants";

const Tec = () => {
  return (
    <div
      className="grid mx-auto w-[380px] justify-center items-center p-14 gap-10 rounded-3xl my-20 
    bg-black"
    >
      <div className="">
        <img src="/tecnologies2.gif" alt="" className="" />
      </div>

      <div className="grid grid-cols-3 mx-auto gap-4 items-center justify-center">
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/js.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/css.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/html.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/git.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/github.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/react.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/tailwind.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/r.png" alt="" />
        </div>
        <div style={tecStyle} className={`hover:${hoverStyle}`}>
          <img src="/python.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tec;
