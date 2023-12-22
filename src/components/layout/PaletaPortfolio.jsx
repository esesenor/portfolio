import { commonStyle, commonStyleA } from "../constants/constants"

const PaletaPortfolio = () => {
  return (
    <div className='grid grid-cols-1 fixed right-0 bottom-0'>
        <div className='bg-[#001f3f] text-[#F5F5F5]' style={commonStyle}>Azul Profundo</div>
        <div className='bg-[#DAA520]' style={commonStyle}>Oro</div>
        <div className='bg-[#F5F5F5]' style={commonStyle}>Blanco Luna</div>
        <div className='bg-[#A9A9A9]' style={commonStyle}>Gris plata</div>
        <div className='bg-[#ff2982] h-[10px]' style={commonStyleA}></div>
        <div className='bg-[#3b82f6] h-[10px]' style={commonStyleA}></div>
  </div>
  )
}



export default PaletaPortfolio
