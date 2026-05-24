// DÉPENDANCES
import React, { useState } from "react";
import { toast } from "sonner";

// ICÔNE
import { FiSend } from "react-icons/fi";

/** Composant de formulaire de contact */
export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    // Simulation d'un envoi de formulaire
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé", {
        description: "Je vous réponds sous 48h ouvrées.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="lg:col-span-3 surface-card rounded-2xl p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nom" name="name" placeholder="votre-nom" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="votre-adresse-mail"
          required
        />
      </div>
      <Field label="Sujet" name="subject" placeholder="votre-sujet" required />

      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre besoin, contexte, contraintes..."
          className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        <FiSend size={15} />
        {sending ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
      />
    </div>
  );
}
