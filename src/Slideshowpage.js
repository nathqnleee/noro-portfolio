import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
import endGif from './strong-cute-love-hug-ukptk2pjqsd2af7g.gif';


const photos = [
  { src: IMG_5078, text: 'The day you became my girlfriend 💓' },
  { src: IMG_4382, text: 'One of those real love nights 🥳' },
  { src: IMG_366, text: 'My favourite photo of us 😊' },
  { src: IMG_AE4, text: 'Our recent night out #sugarmomma 💰' },
  { src: IMG_4457, text: 'Cute hike day 🚶‍♀️🚶‍♂️' },
  { src: IMG_4461, text: 'Scenic beach day 🏖' },
  { src: IMG_4569, text: 'One of our routine Danbo runs 😋' },
  { src: IMG_4789, text: 'Me everytime I see you because you are so beautiful 😍' },
  { src: IMG_5013, text: 'My favourite shirt, the model is so pretty 💓' },
  { src: IMG_5079, text: 'I photo I laugh at everytime I see it 😂' },
  { src: IMG_5080, text: 'The day you demolished me in mini golf 😏' },
  { src: IMG_5081, text: 'Sat with a cutie on the ferris wheel 😳' },
  { src: IMG_5082, text: 'Super overwhelmed this day but you still persevered, I\'m always so proud of you 🤗' },
  { src: IMG_5083, text: 'The day we lost hope in humanity 😭' },
  { src: IMG_5084, text: 'Contact with my rave bae 🤩' },
  { src: IMG_5085, text: '💩 Calendar party but our costumes still cute 😇' },
  { src: IMG_5086, text: 'One of many gym dates (ft Katie) 💪' },
  { src: IMG_5087, text: 'One of the happiest months eva for Doro! 🥳' },
  { src: IMG_5088, text: 'On a cute stroll with the jicks 🚶‍♀️🚶‍♂️' },
  { src: endGif, text: 'Thank you for being my girlfriend 😚 I love you so much!! Happy Valentines Day Love 💌'},
];

function SlideshowPage() {
  const [index, setIndex] = useState(0);

  const nextPhoto = () => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="container">
        <Link to="/" className="home-button">Home</Link> {/* Home button */}
      <div className="image-container">
        <img src={photos[index].src} alt="Slideshow" className="slideshow-image" />
        <p className="image-description">{photos[index].text}</p>
      </div>
      <button onClick={nextPhoto} className="button">Next Photo</button>
    </div>
  );
}

export default SlideshowPage;