import React, { useState, useEffect,useCallback } from 'react';

const images = ['https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybSUyMGxpdmVzdG9ja3xlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1535275226173-7ee8b465f0c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1570802685082-2224bd954723?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBsYXlpbmclMjBlZ2dzfGVufDB8fDB8fHww']; 

const imagess = ['https://images.unsplash.com/photo-1442943861491-36a87a01e726?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvYXR8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1527394105696-fd7b97ad0f0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpZ3N8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293c3xlbnwwfHwwfHx8MA%3D%3D']
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfSlides = 2;
  const intervalDuration = 4000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
  }, [numberOfSlides]);

  useEffect(() => {
    const abortController = new AbortController();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    const intervall = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
    }, intervalDuration);

    const carouselInterval = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(intervall);
      clearInterval(carouselInterval);
      abortController.abort();
    };
  }, [nextSlide]);

  // Render your carousel component with images

  return (
      <div id="carouselExampleIndicators" className="carousel slide">
      
  <div className="carousel-inner">
    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
      <img src={images[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption" id='text-one'>
        <h1>BUILD A SUSTAINABLE FUTURE</h1>
        <p>FOR PASTORAL LANDSCAPES AND SMALL FARMERS</p>
      <button id="shop-now" className="btn btn-outline-success">Learn more</button>
      </div>
    </div>
    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
      <img src={imagess[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption" id='text-two'>
      <h1>GRASS FED, PASTURE RAISED CALIFORNIA LOCAL MEAT</h1>
      <p>FOR PASTORAL LANDSCAPES AND SMALL FARMERS</p>
      <button id="shop-now" className="btn btn-outline-success">Learn more</button>
      </div>
    </div>
    
  </div>
  <button id='left' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button id='right' className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel