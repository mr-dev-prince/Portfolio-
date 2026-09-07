"use client";

import React from "react";
import { IButton } from "../interfaces/components";

const Button = ({ text, icon, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className="flex group items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-[#0f0f0f] hover:bg-white/10 transition-colors text-white text-sm font-medium"
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
