import React, { useEffect, useState } from "react";

import { Storage } from "@google-cloud/storage";
import axios from "axios";
import dayjs from "dayjs";
import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";

import Icon from "../components/icon";
import Card from "../components/ui/Card";
import PageSection from "../components/ui/PageSection";

const BUCKET_NAME = "pranav-hustleauto-bucket";

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const storage = new Storage();

  async function getAllImagesData() {
    const [files] = await storage.bucket(BUCKET_NAME).getFiles();

    const imagesData = files
      // All the important information is in the metadata property
      .map((file) => file.metadata)
      // Get all the information we are interested in
      .map((fileMetadata) => ({
        id: fileMetadata.id,
        url: fileMetadata.mediaLink,
        updated: fileMetadata.updated,
        width: fileMetadata.metadata.width,
        height: fileMetadata.metadata.height,
      }))
      // Sort by date
      .sort((a, b) => (dayjs(a.updated).isAfter(dayjs(b.updated)) ? 1 : -1));

    return imagesData;
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      imagesData: await getAllImagesData(),
    },
  };
}

// const getAllImagesData = async () => {
//   const res = await axios.get(
//     `https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o`
//   );

//   return res.data.items.map((imageData) => ({
//     id: imageData.id,
//     url: imageData.mediaLink,
//     updated: imageData.updated,
//     width: imageData.metadata.width,
//     height: imageData.metadata.height,
//   }));
// };

const Gallery = ({ imagesData }) => {
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
              {imagesData.map((image) => {
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
