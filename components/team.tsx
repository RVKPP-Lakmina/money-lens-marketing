"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

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
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Upani Ayanga",
      role: "CEO & Founder",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-2",
      name: "Harsha Vidanagamage",
      role: "CTO",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-3",
      name: "Kusal Samakya",
      role: "Head of Design",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-4",
      name: "Pathum Sandeepa",
      role: "Lead Engineer",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-5",
      name: "Pramesh Lakmina",
      role: "Product Manager",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-6",
      name: "Seniru Kasthuriarachi",
      role: "UX Designer",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  ],
}: Team1Props) => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl text-foreground bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(16,185,129,0.4)]">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {members.map((member) => (
            <DirectionAwareHover
              key={member.id}
              imageUrl={member.avatar}
              className="w-full max-w-sm"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(167,243,208,0.6)]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-neutral-200">
                  {member.role}
                </p>
                <div className="flex gap-3 pt-2">
                  {member.github && (
                    <a
                      href={member.github}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="size-4 text-white" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="size-4 text-white" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="size-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };
