"use client";

import { Spinner, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [ifLoad, setIfLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIfLoad(true);
    });
  });
  return (
    <>
      <Image
        removeWrapper
        src="https://aimg8.dlssyht.cn/u/1843036/ev_user_module_content_tmp/2019_06_20/tmp1561015550_1843036_s.jpg"
        className="z-0 w-full h-full object-cover h-80 sm:h-96 bg-gray-500"
        alt="qixing members"
      />
      {!ifLoad ? (
        <div className="animate-ping absolute top-0 w-full h-full flex justify-center">
          <Spinner color="default" />
        </div>
      ) : null}
    </>
  );
}
