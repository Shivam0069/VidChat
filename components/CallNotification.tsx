"use client";
import { useSocket } from "@/context/SocketContext";
import React from "react";
import Avatar from "./Avatar";
import { MdCall, MdCallEnd } from "react-icons/md";

export default function CallNotification() {
  const { ongoingCall } = useSocket();
  if (!ongoingCall?.isRinging) return;
  return (
    <div className="absolute bg-slate-500 w-full bg-opacity-70 h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white min-w-[300px] min-h-[100px] flex flex-col items-center justify-center rounded p-4   ">
        <div className=" flex flex-col items-center">
          <Avatar src={ongoingCall.participants.caller.profile.imageUrl} />
          <h3 className="text-sm">
            {ongoingCall.participants.caller.profile.fullName?.split(" ")[0]}
          </h3>
        </div>
        <p className="mb-2 text-sm">Incoming Call</p>
        <div className="flex items-center justify-around w-full">
          <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
            <MdCall size={24} />
          </button>
          <button className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white">
            <MdCallEnd size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
