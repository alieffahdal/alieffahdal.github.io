import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SplitLayoutProps {
  image: string;
  imageAlt: string;
  imageCaption?: string;
  children: ReactNode;
}

export default function SplitLayout({ image, imageAlt, imageCaption, children }: SplitLayoutProps) {
  return (
    <div className="split">
      <div className="split-media">
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt={imageAlt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
        {imageCaption && <span className="split-media-caption">{imageCaption}</span>}
      </div>
      <div className="split-content">{children}</div>
    </div>
  );
}
