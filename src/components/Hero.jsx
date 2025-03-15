import React, { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";


const Hero = () => {
  const [currentindex, setcurrentindex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [loadedVideo, setloadedVideo] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setloadedVideo((prev) => prev + 1);
  };
  const upcomingVideoIndex = (currentindex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    sethasClicked(true);
    setcurrentindex(upcomingVideoIndex);
  };
  const getVideoSrc = (index) => {
    return `videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                className="size-64 origin-center scale-150 object-cover object-center"
                loop
                muted
                id="current-video"
                onLoadedData={handleVideoLoad}
              ></video>
            </div>
          </div>
          <video
            src={getVideoSrc(currentindex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          ></video>
          <video
            src={getVideoSrc(currentindex === totalVideos ? 1 : currentindex)}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          ></video>
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 tracking-tighter">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 tracking-tighter">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button id="watch-trailer" title="watch-Trailer" leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex-center gap-1"/>
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black tracking-tighter">
          G<b>a</b>ming
        </h1>
    </div>
  );
};

export default Hero;
