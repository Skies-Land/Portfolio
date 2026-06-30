// DÉPENDANCES
import React, { useState } from 'react';

// ICÔNES
import { FiAward, FiBookOpen, FiFileText, FiPlus } from 'react-icons/fi';

// COMPOSANTS
import { Modal } from './Modal';

// PROPS
interface FormationCardProps {
  item: any;
  isEven: boolean;
}

/** Composant servant à afficher les éléments de la timeline de la section "Parcours" */ 
export const FormationCard: React.FC<FormationCardProps> = ({ item, isEven }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* Point central */}
        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1a1a1e] border-2 border-primary translate-x-[7px] md:-translate-x-1/2 mt-[26px] md:mt-0 z-10"></div>

        {/* Espace vide pour équilibrer sur Desktop */}
        <div className="hidden md:block w-5/12"></div>

        {/* Contenu de la carte */}
        <div className="w-full md:w-5/12 pl-12 md:pl-0">
          <div className="surface-card rounded-2xl p-6 md:p-8 border border-white/5 bg-[#1a1a1e]/80 hover:border-primary/20 transition-colors text-left group flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              {item.type === 'diplome' ? <FiBookOpen className="text-primary" /> : <FiAward className="text-primary" />}
              <span className="font-mono text-xs text-primary">{item.date} {item.duration ? `• ${item.duration}` : ''}</span>
            </div>

            <h4 className="text-xl font-semibold text-[#e4e4e7] leading-tight">{item.title}</h4>
            <p className="text-[#a1a1aa] mt-1 text-sm font-medium">{item.school || item.platform} {item.level ? `- ${item.level}` : ''}</p>

            {/* Description courte */}
            <p className="text-[#a1a1aa] mt-4 mb-6 leading-relaxed text-sm">
              {item.shortDescription}
            </p>

            {/* Boutons d'action */}
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#e4e4e7] hover:text-primary transition-colors hover:bg-white/5 px-4 py-2 rounded-lg border border-[#2c2c2e]"
              >
                <FiPlus />
                En savoir plus
              </button>

              {item.file && (
                <a href={item.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg">
                  <FiFileText />
                  {item.type === 'diplome' ? 'Voir le diplôme' : 'Voir le certificat'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={item} />
    </>
  );
};
