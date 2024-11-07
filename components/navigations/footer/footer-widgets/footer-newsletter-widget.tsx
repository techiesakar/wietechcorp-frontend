"use client";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Send } from "lucide-react";
import WidgetTitle from "./widget-title";

const schema = z.object({
  email: z.string().email(),
});

export const FooterNewsLetterWidget = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };
  return (
    <div>
      <WidgetTitle title="Newsletter" />
      <p className="font-outfit font-light text-white mb-6">
        Subscribe to our newsletter to get the latest updates.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex gap-3 flex-wrap md:w-auto w-full group"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-12 border border-gray-700 px-3 py-1 rounded-lg flex items-center justify-between gap-x-3 space-y-0 flex-1">
                <FaRegEnvelopeOpen className="text-gray-700" />
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter email address"
                    className="h-10 flex-1 mt-0 border-0 p-0  bg-transparent w-full focus-visible:ring-offset-0  outline-none ring-0 text-white focus-visible:ring-0"
                  />
                </FormControl>
                <button className="bg-transparent">
                  <Send className="stroke-primary size-6 rotate-45 group-hover:rotate-0 wie__transition__300" />
                </button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
