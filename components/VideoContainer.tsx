"use client";
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
      className="rounded border w-[800px] "
      autoPlay
      playsInline
      muted={isLocalStream}
      ref={videoRef}
    ></video>
  );
}
