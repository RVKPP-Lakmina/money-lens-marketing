"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface Comment {
  id: string;
  avatar: string;
  name: string;
  handle: string;
  text: string;
  //   timestamp: string;
  //   likes: number;
  replies: number;
}

export default function CommentCard({ comment }: { comment: Comment }) {
  //   const [liked, setLiked] = useState(false);
  //   const [likeCount, setLikeCount] = useState(comment.likes);

  //   const handleLike = () => {
  //     setLiked(!liked);
  //     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  //   };

  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600">
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10 flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan-500/20 group-hover:ring-cyan-500/40 transition-all duration-300">
            <img
              src={comment.avatar || "/placeholder.svg"}
              alt={comment.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {comment.name}
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {comment.handle}
                </span>
              </div>
              {/* <p className="text-xs text-slate-400 dark:text-slate-500">
                {comment.timestamp}
              </p> */}
            </div>
          </div>

          {/* Comment Text */}
          <p className="mt-3 text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
            {comment.text}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-3 text-xs">
            {/* <button
              onClick={handleLike}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300 ${
                liked
                  ? "text-red-500 bg-red-50 dark:bg-red-950/30"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50"
              }`}
            >
              <Heart
                className={`w-4 h-4 transition-transform duration-300 ${
                  liked ? "fill-current scale-110" : ""
                }`}
              />
              <span className="font-medium">{likeCount}</span>
            </button> */}

            <button className="flex items-center gap-1 px-2 py-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{comment.replies}</span>
            </button>

            <button className="flex items-center gap-1 px-2 py-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-md transition-all duration-300">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
