import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  label: string;
  path?: string;
} & ButtonProps;

const CustomButton = ({ label, path, ...props }: Props) => {
  return (
    <Button
      asChild={path ? true : false}
      className="group wie__transition__200"
      {...props}
    >
      {path ? (
        <Link href={path} className="group">
          {label}
          <ArrowRight className="-rotate-45 group-hover:rotate-0 wie__transition__200" />
        </Link>
      ) : (
        <>
          {label}
          <ArrowRight className="-rotate-45 group-hover:rotate-0 wie__transition__200" />
        </>
      )}
    </Button>
  );
};

export default CustomButton;
