// "use server";
"use client";
import {
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Picture on right , details on left with a carousel
export default function Team() {
  const team_components = [
    {
      name: "Talha",
      biography: "Computer Vision Expert",
      href: "https://i.imgur.com/jBFaB8t.jpeg",
      github: "https://github.com/Talha-Naveed",
      Linkedin: "https://www.linkedin.com/in/talhanaveedakhtar/",
      Instagram: "https://www.instagram.com/talha._.naveed/",
    },
    {
      name: "teser",
    },
  ];
  return (
    <div className="bg-gray-200 w-full h-auto">
      <div className="container-custom">
        <div className="text-4xl md:text-3xl lg:text-6xl text-left pl-5 pb-16 pt-16">
          The Minds behind OmniAI
        </div>
        <div>
          {/* <Carousel
            className="w-full h-200"
            // opts={{
            //   align: "start",
            //   loop: true,
            // }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {team_components.map((member) => (
                <CarouselItem key={member.name}>
                  <div className="p-1 ">
                    <Card className="h-full">
                      <CardContent className="flex p-6 h-full">
                        {member.name}
                        <div className="w-1/2">sda</div>
                        <div
                          className="w-1/2 h-auto"
                          style={{ backgroundImage: `url(${member.href})` }}
                        ></div>
                      </CardContent>
                    </Card>
                    <Card>sds</Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="flex space-x-4 px-4 md:px-8">
              {team_components.map((member) => (
                <CarouselItem key={member.name} className="flex-shrink-0">
                  <div className="p-4">
                    <Card className="w-full md:w-[80%] lg:w-[60%] mx-auto">
                      <CardContent className="flex flex-col md:flex-row items-center gap-4 p-6">
                        <div className="w-full md:w-1/2">
                          <h2 className="text-xl font-bold">{member.name}</h2>
                          <p className="text-sm">{member.biography}</p>
                          <div className="flex mt-4 space-x-2">
                            <a
                              href={member.github}
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              <Github></Github>
                            </a>
                            <a
                              href={member.Linkedin}
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              <Linkedin></Linkedin>
                            </a>
                            <a
                              href={member.Instagram}
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              <Instagram></Instagram>
                            </a>
                          </div>
                        </div>
                        <div
                          className="w-full md:w-1/2 h-96 bg-cover bg-no-repeat bg-center  rounded-md"
                          style={{ backgroundImage: `url(${member.href})` }}
                        ></div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" />
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
