"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
interface iVideoContainer {
  stream: MediaStream | null;
  isLocalStream: boolean;
  isOnCall: boolean;
}
export default function VideoContainer({
  stream,
  isLocalStream,
  isOnCall,
}: iVideoContainer) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  return (
    <video
      className={cn(
        "rounded border w-[800px] ",
        isLocalStream &&
          isOnCall &&
          "md:w-[200px] w-16 h-16  absolute top-0 left-0 md:h-auto border-2 border-purple-500"
      )}
      autoPlay
      playsInline
      muted={isLocalStream}
      ref={videoRef}
    ></video>
  );
}
