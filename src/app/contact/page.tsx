"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        toast.success("Message sent! Thanks for getting in touch.");
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section className="container mx-auto px-4 py-16 max-w-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🎉 Sent Successfully!
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Thank you, {form.name || "Guest"}. I&#39;ll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                       focus:border-indigo-500 focus:ring-indigo-500
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                       focus:border-indigo-500 focus:ring-indigo-500
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                       focus:border-indigo-500 focus:ring-indigo-500
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        <div>
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          {status === "error" && (
            <p className="mt-2 text-sm text-red-600">Oops! Unable to send.</p>
          )}
        </div>
      </form>
    </section>
  );
}
