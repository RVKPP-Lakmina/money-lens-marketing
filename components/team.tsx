"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team = ({
                heading = "Our Team",
                description = "Meet our team who makes the idea of MONEY LENS come into reality! ",
                members = [
                  {
                    id: "member-1",
                    name: "Upani Ayanga",
                    role: "CEO & Founder",
                    avatar: "/our-team/Upani.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                  {
                    id: "member-2",
                    name: "Harsha Vidanagamage",
                    role: "CTO",
                    avatar: "our-team/Harsha.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                  {
                    id: "member-3",
                    name: "Kusal Samakya",
                    role: "Head of Design",
                    avatar: "our-team/Kusal.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                  {
                    id: "member-4",
                    name: "Pathum Sandeepa",
                    role: "Lead Engineer",
                    avatar: "our-team/Pathum.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                  {
                    id: "member-5",
                    name: "Pramesh Lakmina",
                    role: "Product Manager",
                    avatar: "our-team/Pramesh.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                  {
                    id: "member-6",
                    name: "Seniru Kasthuriarachi",
                    role: "UX Designer",
                    avatar: "our-team/Seniru.png",
                    github: "#",
                    twitter: "#",
                    linkedin: "#",
                  },
                ],
              }: Team1Props) => {
  return (
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-6 text-3xl p-4 font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {heading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {members.map((member) => (
                <div key={member.id} className="flex flex-col gap-2 items-center">
                  <div className="relative w-[160px] h-auto group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                      />
                      <div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                    </div>
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                          <div
                              className="bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                            <Linkedin className="size-4" style={{color: '#156C97'}}/>
                          </div>
                        </a>
                    )}
                  </div>

                  <div className="text-center space-y-0.5">
                    <h3 className="text-lg font-bold" style={{color: '#156C97'}}>
                      {member.name}
                    </h3>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export {Team};
