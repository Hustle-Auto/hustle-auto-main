import React, { useEffect, useState } from "react";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";

import Icon from "../components/icon";
import Card from "../components/ui/Card";
import PageSection from "../components/ui/PageSection";

// const sendGetBucketInfoRequest = async () => {
//   return axios
//     .get(
//       "https://us-central1-exalted-booster-377120.cloudfunctions.net/v1-api-gpix/"
//     )
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const sendGetImageRequest = async (fileName) => {
//   return axios
//     .post(
//       `https://us-central1-exalted-booster-377120.cloudfunctions.net/v1-api-gpix?fileName=${fileName}`
//     )
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const images = [
  {
    url: "/images/gallery/9E5E7EF5-C7DB-4F78-A91F-E4E31945531C.jpeg",
    width: 1020,
    height: 1020,
  },
  {
    url: "/images/gallery/313887298.jpg",
    width: 1080,
    height: 1080,
  },
  {
    url: "/images/gallery/317361506.jpg",
    width: 1080,
    height: 1349,
  },
  {
    url: "/images/gallery/317499881.jpg",
    width: 1080,
    height: 1350,
  },
  {
    url: "/images/gallery/317575030.jpg",
    width: 1080,
    height: 1080,
  },
  {
    url: "/images/gallery/317594813.jpg",
    width: 1080,
    height: 1080,
  },
  {
    url: "/images/gallery/BEB8CF72-5150-4758-90D0-E5055C39D8E9_1_201_a.jpeg",
    width: 1151,
    height: 1020,
  },
  {
    url: "/images/gallery/FEF86E35-50BA-4CFC-9CEC-9960483FEA4B_1_201_a.jpeg",
    width: 1150,
    height: 1020,
  },
];

const Gallery = () => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   const getImages = async () => {
  //     // get all file names
  //     const bucketInfo = await sendGetBucketInfoRequest();

  //     const fileNames = bucketInfo.map((file) => {
  //       return file.name;
  //     });
  //     // get all images
  //     const res = await Promise.all([
  //       ...fileNames.map((fileName) => sendGetImageRequest(fileName)),
  //     ]);

  //     // set images
  //     setImages(res);
  //   };
  //   getImages();
  // }, []);

  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="You can contact Hustle Automotive using the form"
        />
      </Head>
      <main>
        <PageSection>
          <h2 className="page-heading">Gallery</h2>

          <div className="my-10">
            <Masonry
              breakpointCols={3}
              className="flex space-x-4"
              columnClassName="space-y-4"
            >
              {images.map((image) => {
                return (
                  <a
                    key={image.url}
                    className="relative block overflow-hidden transition duration-500 hover:bg-accent group"
                    href={image.url}
                  >
                    <div className="w-full overflow-hidden transition duration-500 rounded group-hover:opacity-70 group-hover:scale-105">
                      <Image
                        src={image.url}
                        alt="Image"
                        width={image.width}
                        height={image.height}
                        layout="responsive"
                      />
                    </div>

                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-500 opacity-0 group-hover:opacity-100">
                      <div className="px-4 py-4 rounded bg-black/70">
                        <div className="flex space-x-2">
                          <Icon.Instagram className="w-6 h-6" />
                          <span className="text-white ">Instagram</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </Masonry>
          </div>
        </PageSection>
      </main>
    </>
  );
};

export default Gallery;
