const Social = () => {
  return (
    <div
      className="fixed z-50 right-0 bottom-1/3 grid grid-rows-4 gap-1 h-[230px] w-[34px] rounded-full p-1
    bg-blue-400/30 items-center justify-center"
    >
      <div
        className="w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600"
      >
        <a href="https://api.whatsapp.com/send?phone=573194682210">
          <img className="" src="/wapp.png" alt="" />
        </a>
      </div>

      <div
        className="w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600"
      >
        <a>
          <img className="" src="/google.png" alt="" />
        </a>
      </div>

      <div
        className="w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600"
      >
        <a href="https://www.linkedin.com/in/esneider-rios-5278a5294/">
          <img className="" src="/li.png" alt="" />
        </a>
      </div>

      <div
        className="w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600"
      >
        <a href="https://twitter.com/peroporquesenor">
          <img className="" src="/t.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Social;
