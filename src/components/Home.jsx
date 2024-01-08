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
        <h1 className="font-bold font-rubik text-2xl text-[#F5F5F5] segundo-text-shadow pt-10">
          Hola!
        </h1>
      </div>

      <div className="">
        <p className="text-[#3b82f6] font-bold font-rubik text-lg py-4">
          Soy Desarrollador web Full-stack
        </p>
      </div>

      <div className="">
        <p className="text-[#F5F5F5] min-w-fit text-xl font-light font-raj w-[240px] font-rubik">
          Orientado a generar resultados significativos mediante enfoques
          coherentes, utilizando de manera eficiente los recursos disponibles y
          adaptándome a las circunstancias del momento. Mi compromiso se refleja
          en mi lealtad, responsabilidad y dedicación a preservar la integridad
          de cada iniciativa.
        </p>
      </div>

      <footer className="mt-20">
        <a
          className="go_store"
          href="https://api.whatsapp.com/send?phone=573194682210"
        >
          <img className="" src="/esesr.png"></img>
        </a>
        <h1 className=" font-light text-2xl text-[#3b82f6] font-raj">
          {" "}
          ESNEIDER R. B.{" "}
        </h1>
      </footer>
    </div>
  );
};

export default Home;
