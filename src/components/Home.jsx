const Home = () => {
  return (
    <div
      className="grid gap-2 font-tilt-neon mx-auto my-10 p-6 rounded-3xl w-[380px]
    bg-gradient-to-tr from-blue-500/10 via-[#F5F5F5]/10 to-[#ff2982]/10"
    >
      <div className="">
        <img
          src="../../public/imgsPortfolio/Developer.gif"
          alt=""
          className=""
        />
      </div>

      <div className="">
        <h1 className="font-bold  text-2xl text-[#F5F5F5] segundo-text-shadow ">
          Hola!
        </h1>
      </div>

      <div className="">
        <p className="text-[#3b82f6] font-bold  ">
          Desarrollador web Full-stack
        </p>
      </div>

      <div className="">
        <p className="text-[#F5F5F5] min-w-fit text-xl font-light font-raj w-[240px]">
          Comprometido con los objetivos, siempre atento a las necesidades del
          entorno y al mejoramiento continuo de procesos
        </p>
      </div>

      <footer className="mt-20">
        <img className="" src="/esesr.png" alt="" />
        <h1 className=" font-light text-2xl text-[#3b82f6] font-raj">
          {" "}
          ESNEIDER R. B.{" "}
        </h1>
      </footer>
    </div>
  );
};

export default Home;
