import '../styles/Slider.css';

function Slider({slideList,direction, name}) {
  return (
    <div className='slider'>
      {/* direction 슬라이드 방향   normal: 오른쪽 -> 왼쪽   reverse: 왼쪽 -> 오른쪽 */}
      <div className='slide-track' style={{animationDirection: direction}}>
        {[...slideList, ...slideList].map((item, index) => (
          <img
            key={index}
            className={name}
            src={item.image}
          />
        ))}
      </div>
    </div>
        
  );
}

export default Slider;