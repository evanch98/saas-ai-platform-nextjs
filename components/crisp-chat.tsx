"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ff9c9541-f032-4ef7-9ae2-d94291011dd7");
  }, []);

  return null;
};
