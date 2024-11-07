"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Name is required",
  }),
  //   subject: z.string().min(2),
  message: z.string().min(2, {
    message: "Message is required",
  }),
  saveData: z.boolean().default(false),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      name: "",

      message: "",
      saveData: false,
    },
  });

  useEffect(() => {
    // This will only run on the client side
    const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
    if (userInfo) {
      form.reset({
        email: userInfo.email || "",
        name: userInfo.name || "",
        saveData: userInfo.saveData || false,
      });
    }
  }, [form]);

  const onSubmit = (values: z.infer<typeof schema>) => {
    if (values.saveData) {
      window.localStorage.setItem(
        "user-info",
        JSON.stringify({
          email: values.email,
          name: values.name,
          saveData: true,
        })
      );
    } else {
      if (localStorage.getItem("user-info")) {
        localStorage.removeItem("user-info");
      }
    }
    console.log(values);
    alert("data saved");
  };
  return (
    <div className="p-6 bg-lightGray rounded-xl">
      <h2 className="text-3xl font-semibold mb-6">Send your message</h2>
      <Form {...form}>
        <form
          className="grid grid-cols-2 gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    className=" flex-1 bg-white   w-full focus-visible:ring-offset-0  outline-none ring-0 focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email Address"
                    className=" flex-1 bg-white   w-full focus-visible:ring-offset-0  outline-none ring-0  focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          <div className="col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      {...field}
                      placeholder="Write your message here..."
                      className=" flex-1 bg-white  w-full focus-visible:ring-offset-0  outline-none ring-0  focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2">
            <FormField
              control={form.control}
              name="saveData"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button size={"lg"} className="w-fit">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
