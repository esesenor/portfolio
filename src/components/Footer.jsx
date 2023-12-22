import Social_foo from "./Social_foo"

const Footer = () => {
  return (

        <footer className="mt-2 p-1 grid grid-col-1 justify-center items-center" >
            <div className="flex flex-row gap-4 justify-center items-center text-center">

            <div className="">
                <h3 className="text-[11px] text-white">
                La simplicidad es el alma de la eficiencia - Austin Freeman</h3>
            </div>
            <figure>
                <a className="go_store" href="https://api.whatsapp.com/send?phone=573194682210">
                    <img className="" src="/esesr.png"></img>
                </a>
            </figure>


            <div className="flex flex-col place-content-center gap-2">
                <a href="https://www.flaticon.es/iconos-gratis/git" 
                title="git iconos" 
                className="text-[11px] text-white">
                    Git iconos creados por riajulislam - Flaticon
                    </a>
            </div>

            </div>

            <div className="grid grid-col-1 gap-1 justify-center items-center">
                <Social_foo />
                <p className="text-[11px] text-center text-white mb-4">Todos los derechos reservados... &#128586; &#128585; &#128584;</p>
            </div>
            
        </footer>

  )
}

export default Footer
