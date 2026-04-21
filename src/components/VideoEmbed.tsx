"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

const VIDEO_ID = "mbv59tL702FCQN4IkuUImzSmk013gd1d9Cg8JeWAWAnOM";
const ANIMATED_GIF = `https://image.mux.com/${VIDEO_ID}/animated.gif?width=960`;

export default function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  return (
    <FadeUp className="max-w-[900px] mx-auto mb-15">
      <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(40,52,71,0.12)] aspect-video relative bg-navy">
        {playing ? (
          <iframe
            src={`https://player.mux.com/${VIDEO_ID}?autoplay=1`}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
            aria-label="Spill av video"
          >
            <Image
              src={ANIMATED_GIF}
              alt="Slidedrain sluksystem forhåndsvisning"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:bg-white transition-all">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-orange ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </FadeUp>
  );
}
