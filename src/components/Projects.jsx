import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const projects = [
    {
      title: "barRAPs",
      //text: "Application for viewing quotes from some contemporary rap artists",
      text: "Aplicación para visualizar algunas frases de canciónes de raperos de la escena actual",
      dir_img: "/punch2.png",
      pro: "https://barrapp.vercel.app/",
      rep: "https://github.com/esesenor/BARRAPP",
    },
    {
      title: "Rick and Morty",
      //text: "Using data from the Rick and Morty API to display a list of characters from each of the 126 possible worlds",
      text: "En esta app se muestran las tarjetas con los personajes por mundo de la serie Rick And Morty",
      dir_img: "/randm.png",
      pro: "https://r-rand-mm.vercel.app/",
      rep: "https://github.com/esesenor/RRandMM",
    },
    {
      title: "CRUD Users",
      //text: "App for Creating, Reading, Updating, and Deleting users.",
      dir_img: "/crud_users.png",
      pro: "https://crud-users-mu.vercel.app/",
      rep: "https://github.com/esesenor/CRUD_users",
    },
    {
      title: "Reporte del Clima",
      //text: "App to check the weather conditions in municipalities near Medellín.",
      text: "Es una interfaz que permite consultar el estado del clima en algunos municipos al rededor de Medellín",
      dir_img: "/clima.png",
      pro: "https://repclima.netlify.app/",
      rep: "https://github.com/esesenor/Reporte_Clima",
    },
    {
      title: "Pokedex",
      //text: "It's an app to view all the Pokémon from the series by searching by name or selecting a category; you can see all the details of each Pokémon",
      text: "Es un aplicativo que posibilita ver los pokemon con sus respectivas destrezas",
      dir_img: "/pokedex.png",
      pro: "https://mi-pokedex-pi.vercel.app/",
      rep: "https://github.com/esesenor/pokedex",
    },
  ];

  return (
    <section className="block py-20 mx-6 sm:mx-20 xl:mx-28 justify-center items-center ajuste2">
      <div className="">
        <img src="/projects.gif" alt="" className="mx-auto w-[15%]" />
      </div>

      <Swiper
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
      >
        {projects.map((img) => (
          <SwiperSlide key={img.title}>
            <article className="flex flex-col gap-2 justify-center items-center my-4 mr-2">
              <header className="block mx-auto">
                <img src={img.dir_img} alt="" />
              </header>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="">
                  <h5 className="text-white text-xl font-bold segundo-text-shadow mb-2">
                    {img.title}
                  </h5>
                  <span className="text-white w-[240px] text-sm">
                    {img.text}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <a
                    className="text-[#001f3f] w-[80px] text-sm font-extrabold p-1 rounded-full text-center
                     bg-gradient-to-br from-[#3b82f6] via-[#F5F5F5] to-[#DAA520]
                     hover:shadow-md hover:shadow-[#DAA520]"
                    href={`${img.pro}`}
                  >
                    Project
                  </a>
                  <a
                    className="text-[#001f3f] w-[80px] text-sm font-extrabold p-1 rounded-full text-center
                    bg-gradient-to-br from-[#ff2982] via-[#F5F5F5] to-[#3b82f6]
                    hover:shadow-md hover:shadow-[#ff2982]"
                    href={`${img.rep}`}
                  >
                    Repository
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-white font-extrabold text-xl text-center">{`<< slide >>`}</div>
    </section>
  );
};

export default Projects;
