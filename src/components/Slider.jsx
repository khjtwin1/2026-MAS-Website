import '../styles/Slider.css';
function Slider({slideProjects, width, height, direction}) {
  return (
    <div className='slider'>
      <div className='slide-track' style={{animationDirection:direction}}>
        {slideProjects.map(item => 
            <img style={{width:`${width}px`, height:`${height}px`}} key={item.img} src={item.img}/>
        )}
        {slideProjects.map(item => 
            <img style={{width:`${width}px`, height:`${height}px`}} key={item.img} src={item.img}/>
        )}
      </div>
    </div>
        
  );
}


export default Slider;