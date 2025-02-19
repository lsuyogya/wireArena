import { Link } from "@tanstack/react-router";
import { HeaderLinkOptions } from "../routes";
import { useState, useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "motion/react";

const MobileHeader = ({ links }: { links: HeaderLinkOptions[] }) => {
  // Separate the logo link from the rest
  const logoLink = links.find((link) => link.label.toLowerCase() === "logo");
  const otherLinks = links.filter(
    (link) => link.label.toLowerCase() !== "logo"
  );
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const height = document.querySelector("header")?.offsetHeight || 0;
      setHeaderHeight(height);
      document.body.style.setProperty("--headerHeight", `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < prevScrollY || currentScrollY === 0);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: visible ? 0 : -headerHeight - 32,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }, [visible, controls, headerHeight]);

  return (
    <motion.header
      className="mainGrid header mobileHeader"
      animate={controls}
      initial={{ y: 0 }}
    >
      <div className="content">
        {logoLink && (
          <Link
            {...logoLink}
            key={logoLink.to}
            activeProps={{ className: `active` }}
            className="logoLink"
          >
            {logoLink.children ?? logoLink.label}
          </Link>
        )}
        <div
          className="hamburger"
          data-open={hamburgerOpen}
          onClick={() => {
            setHamburgerOpen((prev) => !prev);
          }}
        />
        <div className="sidebar" data-open={hamburgerOpen}>
          <nav className="breakout nav">
            {otherLinks.map((link) => (
              <Link
                {...link}
                key={link.to}
                activeProps={{ className: `active` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
