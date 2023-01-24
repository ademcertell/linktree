import React from "react";
import Image from "next/image";

export default function Avatar() {
    return (
        <div className="w-full pt-12 pb-4 flex justify-center items-center flex-col text-center">
            <img
              height={90}
              width={90}
              src='https://avatarfiles.alphacoders.com/320/320459.jpg'
              className="rounded-full"
              alt='Adem Can Certel'
            />
            <div>
                <h1 className="text-white text-2xl font-bold">Adem Can Certel</h1>
            </div>
        </div>
    )
}