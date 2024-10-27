"use client";

import React from "react";
import { Button } from "./ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

const CopyMailButton = () => {
  return (
    <Button
      className=" ml-auto text-lg"
      variant="ghost"
      onClick={() => {
        navigator.clipboard.writeText("gokulkannanr9@gmail.com");
        toast("Mail ID copied to clipboard");
      }}
    >
      <span>gokulkannanr9@gmail.com</span>
      <CopyIcon />
    </Button>
  );
};

export default CopyMailButton;
