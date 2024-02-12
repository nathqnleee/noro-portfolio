import React, { useState } from 'react';
import IMG_5078 from './memories/IMG_5078.PNG'; 
import IMG_4382 from './memories/IMG_4382.JPG'; 
import IMG_366 from './memories/366A9476_Original.JPG'; 
import IMG_AE4 from './memories/AE452313-277F-44E5-8077-108336A5F011.jpg'; 
import IMG_4457 from './memories/IMG_4457.JPG'; 
import IMG_4461 from './memories/IMG_4461.JPG'; 
import IMG_4569 from './memories/IMG_4569.PNG'; 
import IMG_4789 from './memories/IMG_4789.JPG'; 
import IMG_5013 from './memories/IMG_5013.JPG'; 
import IMG_5079 from './memories/IMG_5079.PNG'; 
import IMG_5080 from './memories/IMG_5080.PNG'; 
import IMG_5081 from './memories/IMG_5081.PNG'; 
import IMG_5082 from './memories/IMG_5082.PNG'; 
import IMG_5083 from './memories/IMG_5083.PNG'; 
import IMG_5084 from './memories/IMG_5084.PNG'; 
import IMG_5085 from './memories/IMG_5085.PNG'; 
import IMG_5086 from './memories/IMG_5086.PNG'; 
import IMG_5087 from './memories/IMG_5087.PNG'; 
import IMG_5088 from './memories/IMG_5088.PNG'; 

const photos = [
  { src: IMG_5078, text: 'Start Point' },
  { src: IMG_4382, text: 'Photo 2 Description' },
  { src: IMG_366, text: 'Photo 2 Description' },
  { src: IMG_AE4, text: 'Photo 2 Description' },
  { src: IMG_4457, text: 'Photo 2 Description' },
  { src: IMG_4461, text: 'Photo 2 Description' },
  { src: IMG_4569, text: 'Photo 2 Description' },
  { src: IMG_4789, text: 'Photo 1 Description' },
  { src: IMG_5013, text: 'Photo 2 Description' },
  { src: IMG_5079, text: 'Photo 2 Description' },
  { src: IMG_5080, text: 'Photo 2 Description' },
  { src: IMG_5081, text: 'Photo 2 Description' },
  { src: IMG_5082, text: 'Photo 2 Description' },
  { src: IMG_5083, text: 'Photo 2 Description' },
  { src: IMG_5084, text: 'Photo 2 Description' },
  { src: IMG_5085, text: 'Photo 2 Description' },
  { src: IMG_5086, text: 'Photo 2 Description' },
  { src: IMG_5087, text: 'Photo 2 Description' },
  { src: IMG_5088, text: 'Photo 2 Description' },
];

function SlideshowPage() {
  const [index, setIndex] = useState(0);

  const nextPhoto = () => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={photos[index].src} alt="Slideshow" className="slideshow-image" />
        <p className="image-description">{photos[index].text}</p>
      </div>
      <button onClick={nextPhoto} className="button">Next Photo</button>
    </div>
  );
}

export default SlideshowPage;