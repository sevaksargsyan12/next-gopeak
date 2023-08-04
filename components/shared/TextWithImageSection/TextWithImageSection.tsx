import useResizer from "hooks/useResizer";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

interface TextWithImageSectionProps {
  heading: string;
  paragraphs: string[];
  showImageInMobile?: boolean;
  image: string | StaticImageData;
  imageAlt: string;
}

const TextWithImageSection = ({
  image,
  heading,
  imageAlt,
  paragraphs,
  showImageInMobile,
}: TextWithImageSectionProps) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleImageVisibility = useCallback(() => {
    if (showImageInMobile) {
      return;
    }

    if (window.innerWidth <= 768) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  }, [showImageInMobile]);

  useResizer(handleImageVisibility);

  useEffect(() => {
    handleImageVisibility();
  }, [handleImageVisibility]);

  return (
    <section className="row m-auto pt-45 pt-sm-55 pt-md-62 justify-content-between px-7 px-sm-40 px-md-46">
      <div className="col-10 col-md-5 col-lg-4 pt-7 m-auto mb-35">
        <h2 className="who-we-are-heading">{heading}</h2>
        {paragraphs.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="text-sm mb-4 fw-400 text-color-midnight-90"
            >
              {paragraph}
            </p>
          );
        })}
      </div>
      {isImageVisible && (
        <div className="col-12 col-md-7 col-lg-8 m-auto d-flex justify-content-center mw-min-content">
          <Image className="text-with-image-section-image" alt={imageAlt} src={image} />
        </div>
      )}
    </section>
  );
};

export default TextWithImageSection;
