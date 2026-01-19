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
      <section className="py-32">
        <div className="container">
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
                <div
                    key={stat.id}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 text-center shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 md:text-left"
                >
                  {/* Accent border top */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#156C97] via-[#1a8ec9] to-[#156C97]" />

                  <div className="text-6xl font-extrabold bg-gradient-to-br from-[#156C97] via-[#1a8ec9] to-emerald-600 bg-clip-text text-transparent">
                    <Counter value={stat.value} />
                  </div>

                  <p className="text-base font-semibold text-neutral-700 leading-snug">
                    {stat.label}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export { Stats };
