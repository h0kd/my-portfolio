// src/app/contact/page.tsx
"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) setStatus("success");
      else throw new Error(data.error);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Contact Me
      </h1>
      {status === "success" ? (
        <p className="text-green-600">Thanks! Your message has been sent.</p>
      ) : (
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

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>
          {status === "error" && (
            <p className="text-red-600">Oops! Something went wrong.</p>
          )}
        </form>
      )}
    </section>
  );
}
