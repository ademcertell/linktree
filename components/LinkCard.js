import React from "react";

export default function Link() {
    return (
        <div className="flex justify-center items-center text-white">
            <ul className="w-[244px] sm:w-[400px] font-semibold">
                <li className="scale-100 translate-x-4 skew-x-3 hover:shadow-md">
                    <a href="https://ademcancertel.vercel.app" target="_blank" className="cards" >
                        Website
                    </a>
                </li>
                <li className="scale-100 translate-x-4 skew-x-3 hover:shadow-md">
                    <a href="https://1000kitap.com/ademcancertel" target="_blank" className="cards" >
                        1000Kitap
                    </a>
                </li>
                <li className="scale-100 translate-x-4 skew-x-3 hover:shadow-md">
                    <a href="https://steamcommunity.com/id/ademcancertel" target="_blank" className="cards" >
                        Steam
                    </a>
                </li>
            </ul>
        </div>
    )
}