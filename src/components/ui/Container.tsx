// DÉPENDANCE
import clsx from "clsx";

// INTERFACES
interface Props {
    children: React.ReactNode;
    className?: string;
}

// Composant servant à centrer le contenu de la page
export default function Container({ children, className }: Props) {
    return (
        <div className={clsx("mx-auto max-w-6xl px-4", className)}>
            {children}
        </div>
    )
}
