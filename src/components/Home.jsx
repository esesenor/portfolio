const Home = () => {
  return (
    <div
      className="grid gap-2 mx-auto my-10 p-6 rounded-3xl w-[380px]
    bg-gradient-to-tr from-blue-500/10 via-[#F5F5F5]/10 to-[#ff2982]/10
    xl:w-[600px]"
    >
      <div className="p-2">
        <img src="/Developer.gif" alt="" className="" />
      </div>

      <div className="">
        <h1 className="font-bold  text-2xl text-[#F5F5F5] segundo-text-shadow p-2">
          Hola!
        </h1>
      </div>

      <div className="">
        <p className="text-[#3b82f6] font-bold p-2 ">
          Desarrollador web Full-stack
        </p>
      </div>

      <div className="">
        <p className="text-[#F5F5F5] min-w-fit text-xl font-light font-raj w-[240px]">
          Enfocado en contribuir con métodos coherentes para lograr el valor
          significativo bajo las circunstancias del momento. Leal, responsable y
          comprometido con la integridad de cada iniciativa.
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
