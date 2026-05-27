// DÉPENDANCE
import React, { useState } from "react";

// ICÔNE
import { FiChevronDown } from "react-icons/fi";

// PROPS
interface AccordionProps {
  items: { q: string; a: string; categorie: string }[];
}

/** Logique fonctionne du menu déroulant de la section FAQ */
export default function Accordion({ items }: AccordionProps) {
  // L'état qui mémorise l'index de la question actuellement ouverte. null si tout est fermé.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    // Si une question est déjà ouverte, fermeture de celle-ci (null)
    // sinon ouverture de la nouvelle question (index)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="surface-card rounded-2xl px-2 sm:px-4">
      {items.map((it, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="border-b border-border/60 last:border-0 faq-item">
            <button
              onClick={() => toggleItem(i)}
              className="flex w-full cursor-pointer items-center justify-between text-left hover:text-primary px-3 py-4 group"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1.5 pr-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  // {it.categorie}
                </span>
                <span className="text-base font-medium transition-colors">{it.q}</span>
              </div>
              <span className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <FiChevronDown className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-muted-foreground leading-relaxed px-3 pb-4">
                  {it.a} 
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}