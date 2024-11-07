"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  search: z.string(),
});
const HeaderSearchPopover = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      search: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Search className="cursor-pointer size-5" />
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-2">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="h-10 border  px-2 rounded-lg flex items-center justify-between gap-x-3 space-y-0 flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Search..."
                      className="h-8 min-w-[100px] flex-1 mt-0 border-0 p-0 md:w-[300px] bg-transparent w-full focus-visible:ring-offset-0  outline-none ring-0 focus-visible:ring-0"
                    />
                  </FormControl>
                  <button className="bg-transparent">
                    <Search className="stroke-primary  group-hover:rotate-0 wie__transition__300 size-4" />
                  </button>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderSearchPopover;
