"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
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

interface TeamProps {
  heading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team = ({
  heading = "Our Team",
  description = "Meet our team who makes the idea of MONEY LENS come into reality!",
  members = [
    {
      id: "member-1",
      name: "Upani Ayanga",
      role: "CEO & Founder",
      avatar: "/our-team/Upani.png",
      github: "https://github.com/UpaniAyanga",
      linkedin: "https://www.linkedin.com/in/upani-l/",
    },
    {
      id: "member-2",
      name: "Harsha Vidanagamage",
      role: "CTO",
      avatar: "/our-team/Harsha.png",
      github: "https://github.com/harshacv01",
      linkedin: "https://www.linkedin.com/in/harsha-cv/",
    },
    {
      id: "member-3",
      name: "Kusal Samakya",
      role: "Head of Design",
      avatar: "/our-team/Kusal.png",
      github: "https://github.com/kus4l",
      linkedin: "https://www.linkedin.com/in/kusal-sumanaweera/",
    },
    {
      id: "member-4",
      name: "Pathum Sandeepa",
      role: "Lead Engineer",
      avatar: "/our-team/Pathum.png",
      github: "https://github.com/PathumSandeepa",
      twitter: "https://x.com/PathumSandeepa6",
      linkedin: "https://www.linkedin.com/in/pathumz/",
    },
    {
      id: "member-5",
      name: "Pramesh Lakmina",
      role: "Product Manager",
      avatar: "/our-team/Pramesh.png",
      github: "https://github.com/RVKPP-Lakmina",
      linkedin: "https://www.linkedin.com/in/rvkp-priyashan-lakmina/",
    },
    {
      id: "member-6",
      name: "Seniru Kasthuriarachi",
      role: "UX Designer",
      avatar: "/our-team/Seniru.png",
      github: "https://github.com/seniru22",
      linkedin: "https://www.linkedin.com/in/seniru-kasthuriarachchi-3b9b4626a/",
    },
  ],
}: TeamProps) => {
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
              <div className="relative w-40 h-auto group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Social Icons Container */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 flex items-center gap-3">
                  {member.github && (
                    <SocialLink
                      href={member.github}
                      icon={<Github size={18} />}
                    />
                  )}
                  {member.linkedin && (
                    <SocialLink
                      href={member.linkedin}
                      icon={<Linkedin size={18} />}
                    />
                  )}
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center space-y-0.5">
                <h3 className="text-lg font-bold text-[#156C97]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Small Component for Social Buttons
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-[#156C97]"
      onClick={(e) => e.stopPropagation()}
    >
      {icon}
    </a>
  );
};

export { Team };