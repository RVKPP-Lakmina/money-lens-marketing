import { Button } from "@/components/ui/button";

interface Cta10Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta = ({
  // heading = "Call to Action",
  description = "Get 2500 LKR in credit when you spend 10,000 LKR as a new Business Plus member.",
  buttons = {
    primary: {
      text: "Sign Up Today",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Cta10Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-primary-foreground flex w-full flex-col gap-4  overflow-hidden rounded-lg p-4 md:rounded-xl lg:flex-row lg:items-center lg:p-4">
          <div className="flex-2">
            {/* <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3> */}
            <p className="text-muted-foreground max-w-full lg:text-md">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
