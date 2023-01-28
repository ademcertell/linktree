import React from "react";

export default function Link() {
    return (
        <div className="flex justify-center items-center text-white">
            <ul className="w-[244px] sm:w-[500px] font-semibold ">
                <li>
                    <a href="https://ademcan.dev" target="_blank" className="cards" >
                        Personal Site
                    </a>
                </li>
                <li>
                    <a href="https://1000kitap.com/ademcancertel" target="_blank" className="cards" >
                        1000Kitap
                    </a>
                </li>
                <li>
                    <a href="https://steamcommunity.com/id/ademcancertel" target="_blank" className="cards" >
                        Steam
                    </a>
                </li>
            </ul>
        </div>
    )
}
