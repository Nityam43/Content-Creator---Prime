import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { team } from "../../constants/flavorCans";
import "./Team.css";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const rightPanel = rightPanelRef.current;

      gsap.set(rightPanel, { y: 0 });

      const animation = gsap.to(rightPanel, {
        y: () => -(rightPanel.scrollHeight - window.innerHeight),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${rightPanel.scrollHeight}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="team_main" ref={containerRef}>
      <div className="team_left">
        <div className="team_left-inner">
          <img src="/images/team/hero.webp" alt="Prime Team Hero" />
          <h3>Teams + Athletes</h3>
          <h1>Meet The Prime Team</h1>
        </div>
      </div>
      <div className="team_right" ref={rightPanelRef}>
        {team.map((img) => (
          <div key={img.id} className="team_member_card">
            <a
              href={img.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram profile of ${img.name}`}
            >
              <img
                src={img.src}
                alt={img.name}
                className="team_member_img"
              />
            </a>
            <h2 className="team_member_name">{img.name}</h2>
            <p className="team_member_profession">{img.profession}</p>
            <a
              href={img.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="team_member_instagram"
            >
              Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

