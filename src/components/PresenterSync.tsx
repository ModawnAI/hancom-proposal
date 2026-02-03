"use client";

import { useEffect, useState } from "react";

export default function PresenterSync() {
  const [isControlled, setIsControlled] = useState(false);

  useEffect(() => {
    const channel = new BroadcastChannel("ditto-presenter");

    channel.onmessage = (event) => {
      if (event.data.type === "presenter-ready") {
        // Presenter is ready, confirm connection
        channel.postMessage({ type: "viewer-connected" });
        setIsControlled(true);
      } else if (event.data.type === "navigate") {
        // Navigate to section
        const element = document.getElementById(event.data.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Check if presenter is already open
    channel.postMessage({ type: "viewer-ready" });

    return () => channel.close();
  }, []);

  if (!isControlled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      Presenter Controlled
    </div>
  );
}
