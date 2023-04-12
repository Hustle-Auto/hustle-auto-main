import React from "react";

import { Storage } from "@google-cloud/storage";
import dayjs from "dayjs";
import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";

import Icon from "../components/icon";
import PageSection from "../components/ui/PageSection";

const hasUndefinedKeys = (obj) => {
  return Object.values(obj).some((value) => value === undefined);
};

export async function getServerSideProps() {
  const BUCKET_NAME = "hustleauto-bkt";
  const storage = new Storage();

  let files = [];

  try {
    [files] = await storage.bucket(BUCKET_NAME).getFiles();
  } catch (error) {
    console.log(`Error getting files from bucket '${BUCKET_NAME}'`);
    console.log(JSON.stringify(error));
  }

  const imagesData = files
    // All the important information is in the metadata property
    .map((file) => {
      return file.metadata;
    })
    // Get all the information we are interested in
    .map((fileMetadata) => ({
      id: fileMetadata.id,
      url: fileMetadata.mediaLink,
      updated: fileMetadata.updated,
      width: fileMetadata.metadata?.width,
      height: fileMetadata.metadata?.height,
      tag: fileMetadata.metadata?.tag,
      link: fileMetadata.metadata?.link ?? "",
    }))
    // Remove images that don't have all the information we need
    .filter((imageData) => !hasUndefinedKeys(imageData))
    // Sort by date
    .sort((a, b) => (dayjs(a.updated).isAfter(dayjs(b.updated)) ? -1 : 1));

  return {
    props: {
      imagesData: imagesData,
    },
  };
}

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
                  <section
                    key={image.url}
                    className="block border rounded shadow-sm"
                    href={image.instagram_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <a className="relative block overflow-hidden transition duration-500 hover:bg-white group">
                      <div className="w-full overflow-hidden transition duration-500 group-hover:opacity-100 group-hover:scale-105">
                        <Image
                          src={image.url}
                          alt="Image"
                          width={image.width}
                          height={image.height}
                          layout="responsive"
                        />
                      </div>

                      {/* <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-500 opacity-0 group-hover:opacity-100">
                        <div className="px-4 py-4 rounded bg-black/70">
                          <div className="flex space-x-2">
                            <Icon.Instagram className="w-6 h-6" />
                            <span className="text-white ">Instagram</span>
                          </div>
                        </div>
                      </div> */}
                    </a>
                    <article className="flex justify-between px-3 my-4">
                      <div className="px-3 py-1 text-sm text-white bg-black rounded-full">
                        {image.tag}
                      </div>

                      {image.link && (
                        <a className="flex items-center space-x-2 group">
                          <Icon.Instagram className="w-6 h-6" />
                          <div>
                            <span className="text-sm underline">Instagram</span>
                            <Icon.ExternalLink className="inline-block w-4 h-4 ml-2" />
                          </div>
                        </a>
                      )}
                    </article>
                  </section>
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
