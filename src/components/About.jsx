const About = () => {
  return (
    <section
      className="block mx-auto bg- w-[380px] rounded-3xl p-6 my-20
        bg-gradient-to-tr from-yellow-400/20 via-[#F5F5F5]/10 to-purple-600/10"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <header className="flex flex-col gap-1 w-[450px] justify-center items-center">
          <img
            src="../../public/imgsPortfolio/about 2.gif"
            alt=""
            className=""
          />
          <p className="text-[#F5F5F5] font-light font-raj w-[340px] border p-6">
            Mi desempeño laboral ha involucrado roles desafiantes desde el
            liderazgo. Como desarrollador web, buscaré aportar una perspectiva
            única para unir objetivos con soluciones web innovadoras y
            eficientes.
          </p>
        </header>

        <article>
          <ul className="flex flex-row gap-1 ml-2">
            <li className="flex flex-col gap-2">
              <h2 className="font-tilt-neon font-bold  text-3xl text-[#f5f5f5] primer-text-shadow text-left ">
                Educación
              </h2>
              <ul className="flex flex-col gap-2 ">
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Desarrollo de Apps Móviles
                  </h3>
                  <span className="text-[#F5F5F5]">Google</span>
                </li>
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Fundamentos Marketing Digital
                  </h3>
                  <span className="text-[#F5F5F5]">Google</span>
                </li>
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Estadística
                  </h3>
                  <span className="text-[#F5F5F5]">UNAL Colombia</span>
                </li>
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Desarrollo Web
                  </h3>
                  <span className="text-[#F5F5F5]">Academlo</span>
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-2 ">
              <h2 className="font-tilt-neon font-bold  text-3xl text-[#f5f5f5] primer-text-shadow text-center">
                Información
              </h2>
              <ul className="flex flex-col gap-2 rounded-3xl p-2">
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Email
                  </h3>
                  <span className="text-[#F5F5F5] text-sm">
                    esneiderriosb@gmail.com
                  </span>
                </li>
                <li>
                  <h3 className="font-tilt-neon font-bold text-[#3b82f6] segundo-text-shadow">
                    Ubicación
                  </h3>
                  <span className="text-[#F5F5F5]">Medellín, Antioquia</span>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
