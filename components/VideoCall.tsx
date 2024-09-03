"use client";
import { useSocket } from "@/context/SocketContext";
import React from "react";
import VideoContainer from "./VideoContainer";

export default function VideoCall() {
  const { localStream } = useSocket();
  return (
    <div>
      {localStream && (
        <VideoContainer
          stream={localStream}
          isLocalStream={true}
          isOnCall={false}
        />
      )}
    </div>
  );
}
