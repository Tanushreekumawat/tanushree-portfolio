import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arjun Sharma | MERN Stack Developer",
    short_name: "Arjun Portfolio",
    description: "Senior MERN Stack Developer specializing in scalable web applications and AI-powered solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#030014",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
