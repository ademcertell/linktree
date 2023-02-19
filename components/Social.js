import React from 'react';
import Tippy from '@tippyjs/react';
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function InstagramIcon() {
  return (
     <FaInstagram
        className="text-white w-10 h-10"
     />
  )
}

function TwitterIcon() {
  return (
    <FaTwitter
        className="text-white w-10 h-10"
    />
  )
}

function GitHubIcon() {
  return (
    <FaGithub 
        className="text-white w-10 h-10"
    />
  )
}

function DiscordIcon() {
  return (
    <FaDiscord
        className="text-white w-10 h-10"
    />
  );
}

export default function () {
  return (
    <div className="flex justify-center space-x-5 pt-4 pb-2">
    <Tippy content="Instagram">
      <a target="_blank" href="https://instagram.com/ademcancertell">
        <InstagramIcon />
      </a>
    </Tippy>
    <Tippy content="Twitter">
      <a target="_blank" href="https://twitter.com/ademcancertell">
        <TwitterIcon />
      </a>
    </Tippy>
    <Tippy content="GitHub">
      <a target="_blank" href="https://github.com/AdemCanCertel">
        <GitHubIcon />
      </a>
    </Tippy>
    <Tippy content="GitHub">
      <a target="_blank" href="https://discord.gg/evA8fwEnN7">
        <DiscordIcon />
      </a>
    </Tippy>
    </div>
  );
}
