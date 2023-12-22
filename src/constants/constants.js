import random from 'canvas-sketch-util/random';

const commonStyle = {
    width: '200px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const commonStyleA = {
    width: '200px',
    height: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  
  const randomIndex = random.rangeFloor(0, 3);
  const animationNames = ['colorChange', 'colorChange2', 'colorChange3'];
  const animationName = animationNames[randomIndex];
 
  const tecStyle = {
    width: '65px',
    height: '65px',
    background: '#3b82f6',
    borderRadius: '20px',
    padding: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
    animation: `${animationName} 1s infinite`,
  };
  
  const hoverStyle = {
    background: 'linear-gradient(to top right, orange, #3b82f6, red)',
  };
  

  
  export{
    commonStyle,
    commonStyleA,
    tecStyle,
    hoverStyle,
  }