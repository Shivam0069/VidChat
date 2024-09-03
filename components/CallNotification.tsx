"use client";
import { useSocket } from "@/context/SocketContext";
import React from "react";

export default function CallNotification() {
  const { ongoingCall } = useSocket();
  if (!ongoingCall?.isRinging) return;
  return (
    <div className="absolute bg-slate-500 w-full bg-opacity-70 h-screen top-0 left-0 flex items-center justify-center">
      SomeOne is Calling
    </div>
  );
}
