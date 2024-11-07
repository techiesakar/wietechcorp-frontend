import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type Props = {
  label: string;
  path: string;
};

const AddButtonOnToolbar = ({ label, path }: Props) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(path)}
      variant="outline"
      size="sm"
      className="h-8 border-dashed"
    >
      <PlusCircledIcon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
};

export default AddButtonOnToolbar;
