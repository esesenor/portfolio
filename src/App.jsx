import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Tec from './components/Tec'
import Social from './components/Social'
import Projects from './components/Projects'
import LluviaObjCurvas from './components/layout/LluviaObjCurvas'
import BgStars from './components/layout/BgStars'
import Canvas2 from './components/layout/Canvas2'
import Canvas from './components/layout/Canvas'
import { saveAs } from 'file-saver';
import DownloadButton from './components/layout/DownloadButton'

function App() {

  const handleDownload = () => {
    // Lógica para generar el archivo PDF
    const contenidoPDF = "/CV.pdf"; 

    // Crear un Blob con el contenido del PDF
    const blob = new Blob([contenidoPDF], { type: 'application/pdf' });
      
    // Descargar el archivo usando file-saver
    saveAs(blob, 'CVEsneiderRios.pdf');
  }

  return (
    <main className='grid grid-cols-1 gap-4 justify-center items-center'> 
      <BgStars /> 
      <Social />
      {/**<AsciiArtAnimation /> */}
      <Home/>
      <Canvas />
      <About />
      <div>
        <h1 className='text-center text-white font-extrabold text-lg mb-4'>Descarga</h1>
        <DownloadButton onClick={handleDownload()} text={'PDF Curriculum'}/>
      </div>
      <LluviaObjCurvas />
      <Projects />
      
      <Canvas2 />
      <Tec /> 
      
      <Footer />
      
     
    </main>
      )
}

export default App
