import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeaderCTA = () => {
  return (
    <div className="flex gap-x-5 items-center">
      <Button className="group wie__transition__200 text-xs">
        Get a Quote
        <ArrowRight className="-rotate-45 group-hover:rotate-0 wie__transition__200" />
      </Button>
    </div>
  );
};

export default HeaderCTA;
