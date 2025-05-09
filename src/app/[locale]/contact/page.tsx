"use client";

import { useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  // Detectamos el locale de la URL
  const { locale } = useParams() as { locale: string };
  // Cargamos nuestras cadenas traducidas
  const t = useTranslations("contact");

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
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        toast.success(t("successToast"));
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error(t("errorToast"));
    }
  };

  // Estado “éxito”: mostramos mensaje y ocultamos el formulario
  if (status === "success") {
    return (
      <section className="container mx-auto px-4 py-16 max-w-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("successTitle")}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          {t("successMessage", { name: form.name || t("guest") })}
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {t("title")}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t("labelName")}
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t("labelEmail")}
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t("labelMessage")}
          </label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        {/* Botón de envío y feedback */}
        <div>
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("sending")}
              </>
            ) : (
              t("sendButton")
            )}
          </Button>
          {status === "error" && (
            <p className="mt-2 text-sm text-red-600">{t("errorMessage")}</p>
          )}
        </div>
      </form>
    </section>
  );
}
