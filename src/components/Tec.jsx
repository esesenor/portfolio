import StyleTec from "./layout/StyleTec";

const Tec = () => {
  return (
    <div
      className="grid mx-auto w-[380px] justify-center items-center p-14 gap-10 rounded-3xl my-20 
   bg-"
    >
      <div className="">
        <img src="/tecnologies2.gif" alt="" className="" />
      </div>

      <div className="grid grid-cols-3 mx-auto gap-4 items-center justify-center">
        <StyleTec>
          <img src="/js.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/css.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/html.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/git.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/github.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/react.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/tailwind.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/r.png" alt="" />
        </StyleTec>
        <StyleTec>
          <img src="/python.png" alt="" />
        </StyleTec>
      </div>
    </div>
  );
};

export default Tec;
