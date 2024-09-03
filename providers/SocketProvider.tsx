import { SocketContextProvider } from "@/context/SocketContext";
import React from "react";

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SocketContextProvider>{children}</SocketContextProvider>;
}
