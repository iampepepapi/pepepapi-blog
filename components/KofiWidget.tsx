"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for conditional class names

const knownPresets = [
  "",
  "default",
  "thin",
  "skinny",
  "circle",
  "no_background",
] as const;
type KnownPreset = (typeof knownPresets)[number];
type AnimationType = boolean | "on_hover";

interface KofiButtonProps {
  username: string;
  label?: string;
  title?: string;
  preset?: KnownPreset;
  backgroundColor?: string;
  animation?: AnimationType;
}

export default function KofiButton({
  username = "pepepapi",
  label = "Support Me",
  title = "",
  preset,
  backgroundColor = "", // Default Ko-fi blue color
  animation = true,
}: KofiButtonProps) {
  const profileUrl = `https://ko-fi.com/${username}`;

  // Validate the preset
  if (preset && !knownPresets.includes(preset)) {
    console.warn(`Unknown preset "${preset}", reverting to default`);
    preset = "";
  }
  if (preset === "default") {
    preset = "";
  }

  // Define a container class with dynamic background and dark mode support
  const containerClass = cn(
    "",
    backgroundColor, // Dynamic background color class from props
    "flex", // Dark mode class
  );

  return (
    <div
      className={
        "fixed bottom-0 m-2 w-fit rounded-lg bg-black p-2 hover:animate-pulse dark:bg-background"
      }
    >
      <a
        className={`kofi-button flex items-center gap-2 text-white ${preset}`}
        href={profileUrl}
        target="_blank"
        rel="noreferrer noopener external"
        title={title}
      >
        <figure className="kofi-image-container">
          <svg
            className={`kofi-image animation_${animation}`}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
              fill="#ffffff"
            />
          </svg>
        </figure>
        {label && <span className="kofi-text">{label}</span>}
      </a>
    </div>
  );
}
