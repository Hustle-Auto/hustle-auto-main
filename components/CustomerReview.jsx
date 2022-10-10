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
      <Card.ImageTop>
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt="review"
          layout="responsive"
        />
      </Card.ImageTop>
      <Card.Body>
        <Card.Title>{customerName}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerReview;
