import { useState } from "react";
import { IMAGE_PLACEHOLDER } from "../shared/constants";

const ImageLoader = ({ alt = 'avatar', src = IMAGE_PLACEHOLDER }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => setIsLoaded(true);
  return (
    <>
      {!isLoaded && (
        <div
          className="loader"
          style={{ visibility: isLoaded ? "hidden" : "visible" }}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </>
  );
};

export default ImageLoader;
