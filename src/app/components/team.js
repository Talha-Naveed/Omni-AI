import { Instagram, Linkedin } from "lucide-react";
import React from "react";

// Picture on right , details on left with a carousel
export default function Team() {
  team_components = [
    {
      name: "Talha",
      biography: "Gamer, Weeb, and Software Engineer to be",
      href: "https://cdn.discordapp.com/attachments/1321707753437401178/1321707824513941596/IMG_20240809_1323582.jpg?ex=676e37d5&is=676ce655&hm=56da63d6f61f9ee07be22bc505ba26598eb9617a9a2d168f8c0c7664bbdb4a8b&",
      github: "https://github.com/Talha-Naveed",
      Linkedin: "https://www.linkedin.com/in/talhanaveedakhtar/",
      Instagram: "https://www.instagram.com/talha._.naveed/",
    },
  ];
  return (
    <div className="bg-gray-400">
      <div>The Minds behind OmniAI</div>
    </div>
  );
}
