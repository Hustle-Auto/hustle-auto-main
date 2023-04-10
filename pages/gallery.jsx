import React, { useEffect, useState } from "react";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";

import Icon from "../components/icon";
import Card from "../components/ui/Card";
import PageSection from "../components/ui/PageSection";

const sendGetBucketInfoRequest = async () => {
  return axios
    .get(
      "https://us-central1-exalted-booster-377120.cloudfunctions.net/v1-api-gpix/"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const sendGetImageRequest = async (fileName) => {
  return axios
    .post(
      `https://us-central1-exalted-booster-377120.cloudfunctions.net/v1-api-gpix?fileName=${fileName}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      // get all file names
      const bucketInfo = await sendGetBucketInfoRequest();

      const fileNames = bucketInfo.map((file) => {
        return file.name;
      });
      // get all images
      const res = await Promise.all([
        ...fileNames.map((fileName) => sendGetImageRequest(fileName)),
      ]);

      // set images
      setImages(res);
    };
    getImages();
  }, []);

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

          <div className="sm:grid-cols-3 sm:grid">
            {images.map((image) => {
              return (
                <div key={image.id} className="p-8">
                  <div className="flex justify-center">
                    <Image
                      src={image.link.mediaLink}
                      alt={image.link.mediaLink}
                      width="2999"
                      height="3000"
                      className="object-cover p-2 pb-0 -mt-11"
                    />
                  </div>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <Icon.Instagram className="w-5" />
                      </Card.Title>
                      <Card.Text>
                        <li>full service</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </PageSection>
      </main>
    </>
  );
};

export default Gallery;
