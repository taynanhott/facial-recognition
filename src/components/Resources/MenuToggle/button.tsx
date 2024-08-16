"use client"

import { useDimensions } from "@/components/use-dimensions";
import { motion, sync, useCycle } from "framer-motion";
import { useRef, useState } from "react";
import { ListToggle, Navigation } from "./menutoggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 800,
      damping: 40
    }
  }
};

function Menu({ toggle }) {

  let isHidden = toggle ? `` : `hidden`;

  return (
    <>
      <motion.div className="absolute top-0 left-0 bottom-0 w-72 bg-white" variants={sidebar} />
      <div className={isHidden}>
        <Navigation />
      </div>
    </>
  );
}

export default function MenuToggle() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={isOpen ? "fixed top-0 left-0 h-screen bottom-0 w-80 z-30" : "absolute top-0 left-0 h-0 bottom-0 w-80 z-30"}
    >
      <Menu toggle={isOpen} />
      <ListToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
