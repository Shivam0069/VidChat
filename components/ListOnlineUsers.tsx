"use client";
import { useSocket } from "@/context/SocketContext";
import { useUser } from "@clerk/nextjs";
import React from "react";
import Avatar from "./Avatar";

export default function ListOnlineUsers() {
  const { user } = useUser();
  const { onlineUsers, handleCall } = useSocket();
  return (
    <div className="flex w-full gap-2 border-b border-b-primary/10 items-center pb-2">
      {onlineUsers &&
        onlineUsers.map((onlineUser) => {
          if (onlineUser.profile.id === user?.id) return null;
          return (
            <div
              key={onlineUser.userId}
              className="flex flex-col gap-1 items-center cursor-pointer"
              onClick={() => handleCall(onlineUser)}
            >
              <Avatar src={onlineUser.profile.imageUrl} />
              <div className="text-sm">
                {onlineUser.profile.fullName?.split(" ")[0]}
              </div>
            </div>
          );
        })}
    </div>
  );
}
