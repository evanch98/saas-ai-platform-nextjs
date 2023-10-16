"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Button size="icon" variant="ghost" className="md:hidden">
      <Menu />
    </Button>
  );
};

export default MobileSidebar;
