/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import CommentCard from "./comment-card";

const reviews = [
  {
    id: "1",
    name: "Jack",
    handle: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar5.png",
    replies: 12,
  },
  {
    id: "2",
    name: "Jill",
    handle: "@jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar4.png",
    replies: 8,
  },
  {
    id: "3",
    name: "John",
    handle: "@john",
    text: "I'm at a loss for words. This is amazing. I love it.",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar3.png",
    replies: 5,
  },

  {
    id: "4",
    name: "Jane",
    handle: "@jane",
    text: "This is the best thing I've ever seen. I'm so glad I found this.",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar2.png",
    replies: 15,
  },
  {
    id: "5",
    name: "Jim",
    handle: "@jim",
    text: "I'm blown away. This is amazing. I love it.",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar1.png",
    replies: 20,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-xl",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <CommentCard key={review.name} comment={review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <CommentCard key={review.name} comment={review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
