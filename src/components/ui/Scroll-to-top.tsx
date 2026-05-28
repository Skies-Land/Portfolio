// DÉPENDANCES
import { useState, useEffect } from "react";

// ICÔNE
import { FiArrowUp } from "react-icons/fi";

/** Composant servant à afficher un bouton pour remonter en haut de la page */
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Gestion de l'affichage du bouton en fonction du scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 350) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Fonction pour remonter en haut avec une animation douce
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Retour en haut de la page"
            className={`fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${
                isVisible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
        >
            <FiArrowUp size={20} />
        </button>
    );
}