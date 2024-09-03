import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Avatar({ src }: { src?: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        height={40}
        width={40}
      />
    );
  }
  return <FaUserCircle size={24} />;
}
