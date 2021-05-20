import { useState, useEffect } from "react";

export const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState(false);
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const unLockScroll = () => {
    document.body.style.overflow = "auto";
  };
  return { isLocked, lockScroll, unLockScroll };
};
