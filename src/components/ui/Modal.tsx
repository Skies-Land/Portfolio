// DÉPENDANCES
import React, { useEffect } from 'react';

// ICÔNES
import { FiX, FiBookOpen, FiAward, FiFileText } from 'react-icons/fi';

// PROPS
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

/** Composant gérant l'affichage des modales de la section "Parcours" */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {

  // Bloque le scroll de la page quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#0d0d0f]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Contenu de la modale */}
      <div className="relative w-full max-w-2xl bg-[#1a1a1e] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Bouton de fermeture */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a1a1aa] hover:text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start sm:items-center gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-xl shrink-0 mt-1 sm:mt-0">
            {data.type === 'diplome' ? <FiBookOpen className="text-primary w-6 h-6" /> : <FiAward className="text-primary w-6 h-6" />}
          </div>
          <div>
            <span className="font-mono text-xs text-primary">{data.date} {data.duration ? `• ${data.duration}` : ''}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#e4e4e7] leading-tight mt-1">{data.title}</h3>
          </div>
        </div>
        
        {/* Sous-titre */}
        <p className="text-[#a1a1aa] mb-6 border-b border-[#2c2c2e] pb-6">
          {data.school || data.platform} {data.level ? `- ${data.level}` : ''}
        </p>

        {/* Description et objectif */}
        <div className="mb-8 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#e4e4e7] font-semibold mb-2">Description</h4>
            <p className="text-[#a1a1aa] leading-relaxed text-sm">
              {data.description}
            </p>
          </div>
          {data.objectif && (
            <div>
              <h4 className="text-[#e4e4e7] font-semibold mb-2">Objectif</h4>
              <p className="text-[#a1a1aa] leading-relaxed text-sm">
                {data.objectif}
              </p>
            </div>
          )}
        </div>

        {/* Compétences */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-8">
            <h4 className="text-[#e4e4e7] font-semibold mb-3">Compétences acquises</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string, index: number) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bouton d'action (PDF) */}
        {data.file && (
          <div className="flex justify-end pt-4 border-t border-[#2c2c2e]">
            <a 
              href={data.file} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 font-medium text-[#e4e4e7] hover:text-white bg-primary hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-lg"
            >
              <FiFileText />
              {data.type === 'diplome' ? 'Consulter le diplôme' : 'Consulter le certificat'}
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
