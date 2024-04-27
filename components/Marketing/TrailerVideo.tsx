"use client";

import "./TrailerVideo.css";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

const videoEmbedingURL =
  "https://v.qq.com/txp/iframe/player.html?vid=q09259fybz7";

export default function TrailerVideo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  });

  const handleIframeOnload = () => {
    console.log("handleIframeOnload");
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-48 sm:h-80 bg-black rounded-large">
      <iframe
        style={{
          border: 0,
          // opacity: 0,
        }}
        onLoad={handleIframeOnload}
        src={videoEmbedingURL}
        className="w-full h-48 sm:h-80 rounded-large fade-in"
        allowFullScreen={true}
      ></iframe>
      {isLoading ? (
        <div className="absolute flex content-center content-center justify-center h-full w-full top-0">
          <Spinner color="default" />
        </div>
      ) : null}
    </div>
  );
}
