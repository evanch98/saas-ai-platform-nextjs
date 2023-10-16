import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button size="icon" variant="ghost" className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
};

export default Navbar;
