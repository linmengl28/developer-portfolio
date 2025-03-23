"use client";

import { useEffect, useRef } from "react";

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure client-side execution

    const CONTAINER = containerRef.current;
    if (!CONTAINER) return;

    const CARDS = Array.from(CONTAINER.querySelectorAll(`.glow-card-${identifier}`));
    cardsRef.current = CARDS;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      if (!cardsRef.current.length) return;
      
      cardsRef.current.forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event.clientX > CARD_BOUNDS.left - CONFIG.proximity &&
          event.clientX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.clientY > CARD_BOUNDS.top - CONFIG.proximity &&
          event.clientY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event.clientY - CARD_CENTER[1], event.clientX - CARD_CENTER[0]) * 180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", ANGLE + 90);
      });
    };

    CONTAINER.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty("--direction", CONFIG.vertical ? "column" : "row");
    };

    RESTYLE();
    UPDATE(new MouseEvent("pointermove", { clientX: 0, clientY: 0 })); // Initialize effect

    return () => {
      CONTAINER.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  if (typeof window === "undefined") return null; // Ensure client-side rendering

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
