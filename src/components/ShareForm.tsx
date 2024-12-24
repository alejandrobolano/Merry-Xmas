import React, { useState } from 'react';
import { Copy, Check, TreePine, Gift } from 'lucide-react';
import { createShareableUrl } from '../utils/urlParams';

export const ShareForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = createShareableUrl(recipient, sender);
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bottom-24 flex-grow flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col gap-4">
        <div className="flex justify-center items-center gap-3 mb-2">
          <TreePine className="w-6 h-6 text-green-600 animate-bounce-slight" />
          <p><strong>¡Comparte tu cariño con los demás!</strong></p>
          <Gift className="w-6 h-6 text-red-500 animate-bounce-slight" style={{ animationDelay: '0.2s' }} />
        </div>
        <input
          type="text"
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
          placeholder="Nombre del destinatario"
        />
        <input
          type="text"
          onChange={(e) => setSender(e.target.value)}
          className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
          placeholder="Tu nombre"
        />
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-transparent bg-gradient-to-r from-red-600 via-green-600 to-red-600 hover:from-red-500 hover:via-green-500 hover:to-red-500 transition-all duration-300 bg-[length:200%_auto] hover:bg-right relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-green-600 to-red-600 opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative flex items-center justify-center gap-2 text-white">
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Compartir tarjeta navideña</span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};