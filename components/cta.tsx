import { Button } from "@/components/ui/button";
import { StickyBanner } from "@/components/ui/sticky-banner";

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
  description = "Get 2500 LKR in credit when you spend 10,000 LKR as a new Business Plus member.",
  buttons = {
    primary: {
      text: "Sign Up Today",
      url: "#",
    },
  },
}: Cta10Props) => {
  return (
    <StickyBanner className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-lg">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-2 md:flex-row md:gap-6">
        <p className="mx-0 max-w-[90%] text-sm font-semibold text-white drop-shadow-md md:text-base">
          {description}
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          {buttons.secondary && (
            <Button
              variant="outline"
              asChild
              size="sm"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30"
            >
              <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
            </Button>
          )}
          {buttons.primary && (
            <Button
              asChild
              size="sm"
              className="bg-white text-emerald-700 hover:bg-white/90 font-bold shadow-md"
            >
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          )}
        </div>
      </div>
    </StickyBanner>
  );
};

export { Cta };
