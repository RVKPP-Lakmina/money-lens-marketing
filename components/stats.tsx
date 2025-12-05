import { ArrowRight } from "lucide-react";
import { Counter } from "@/components/counter";

interface Stats8Props {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats = ({
  heading = "Platform performance insights",
  description = "Ensuring stability and scalability for all users",
  link = {
    text: "Read the full impact report",
    url: "https://www.shadcnblocks.com",
  },
  stats = [
    {
      id: "stat-1",
      value: "90%",
      label: "Literacy Rate In Sri Lanka",
    },
    {
      id: "stat-2",
      value: "1.5M+",
      label: "CSE Investors Growing daily",
    },
    {
      id: "stat-3",
      value: "88%",
      label: "Bank Access Yet underutilized",
    },
    {
      id: "stat-4",
      value: "3x",
      label: "Better Returns With smart guidance",
    },
  ],
}: Stats8Props) => {
  return (
    <section className="py-32 ">
      <div className="container">
        {/* <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
          <a
            href={link.url}
            className="flex items-center gap-1 font-bold hover:underline"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a>
        </div> */}
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5 text-center md:text-left">
              <div className="text-6xl font-bold">
                <Counter value={stat.value} />
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };
