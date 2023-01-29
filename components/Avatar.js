import React from "react";

export default function Avatar() {
    return (
        <div className="w-full pt-12 pb-4 flex justify-center items-center flex-col text-center">
            <img
              height={100}
              width={100}
              src='https://raw.githubusercontent.com/AdemCanCertel/homepage/main/static/photos/favicon.png'
              alt='Adem Can Certel'
            />
            <div className="my-2">
                <h1 className="text-white text-3xl font-bold">Adem Can Certel</h1>
            </div>
        </div>
    )
}