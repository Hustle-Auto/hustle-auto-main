import Image from "next/image";

import Card from "./ui/Card";

const CustomerReview = ({
  imageSrc,
  imageWidth,
  imageHeight,
  customerName,
  description,
}) => {
  return (
    <Card>
      <section className="card-image-top">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt="review"
          layout="responsive"
        />
      </section>
      <section className="card-body">
        <h4 className="text-2xl font-semibold tracking-tight uppercase card-title font-heading">
          {customerName}
        </h4>
        <p className="card-text">{description}</p>
      </section>
    </Card>
  );
};

export default CustomerReview;
