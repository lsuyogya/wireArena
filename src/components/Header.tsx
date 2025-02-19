import { useRef } from "react";
import DesktopHeader from "../components/DesktopHeader";
import { headerLinks as links } from "../routes";
import MobileHeader from "@/components/MobileHeader";
import { Link } from "@tanstack/react-router";
import { useHorizontalDistanceObserver } from "@/hooks/useHorizontalDistance";

const Header = () => {
  const leftEdgeRef = useRef(null);
  const rightEdgeRef = useRef(null);
  const isMobileView = useHorizontalDistanceObserver(
    leftEdgeRef,
    rightEdgeRef,
    200
  );
  return (
    <>
      <div className="headerHelper header mainGrid">
        <div className="breakout nav">
          headerLinks as{" "}
          {links.map((link, index) => {
            return (
              <Link
                {...link}
                key={link.to}
                ref={
                  index === 0 ? leftEdgeRef : index === 1 ? rightEdgeRef : null
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      {isMobileView ? (
        <MobileHeader links={links} />
      ) : (
        <DesktopHeader links={links} />
      )}
      <hr />
    </>
  );
};

export default Header;
