"use client";
import React from "react";
import Link from "next/link";

const CustomLink = ({ title, path, icon }) => {
  return (
    <Link href={`/${path}`}>
      <div className="flex justify-items-center items-center border border-black-500 mb-4 p-2 rounded-md gap-x-3">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default CustomLink;