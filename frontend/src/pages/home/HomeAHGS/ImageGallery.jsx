import { useState } from 'react';
import './Header.css';

// Import images
import plant1 from './plant1.jpg';
import plant2 from './plant2.jpg';
import plant3 from './plant3.jpg';
import plant4 from './plant4.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: plant1, // Correctly referencing the imported image
      title: 'Plant 1',
      info: 'Plant 1: This is a succulent with thick, fleshy leaves that store water.',
    },
    {
      src: plant2, // Correctly referencing the imported image
      title: 'Plant 2',
      info: 'Plant 2: Known for its medicinal properties and vibrant green color.',
    },
    {
      src: plant3, // Correctly referencing the imported image
      title: 'Plant 3',
      info: 'Plant 3: These are tomatoes, rich in vitamins and essential nutrients.',
    },
    {
      src: plant4, // External image URL
      title: 'Plant 4',
      info: 'Plant 4: This is a sunflower, known for its bright yellow petals.',
    },
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">My Plants</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="info-box" onClick={() => setSelectedImage(null)}>
          <h3>Plant Information:</h3>
          <p>{selectedImage.info}</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
