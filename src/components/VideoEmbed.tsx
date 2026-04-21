"use client";

import FadeUp from "./FadeUp";

export default function VideoEmbed() {
  return (
    <FadeUp className="max-w-[900px] mx-auto mb-15">
      <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(40,52,71,0.12)]">
        <iframe
          src="https://player.mux.com/mbv59tL702FCQN4IkuUImzSmk013gd1d9Cg8JeWAWAnOM?thumbnail-time=46"
          style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </FadeUp>
  );
}
