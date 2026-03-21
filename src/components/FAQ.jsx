import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  { q: 'Does WindyTraveler work without internet?', a: 'Yes! Download your language packs before your trip and everything works offline — translation, phrasebooks, basic city guides. Internet enhances the experience (live deals, booking, AI tour guide), but the core translation works anywhere: planes, subways, mountains, submarines.' },
  { q: 'How is this different from Google Translate?', a: 'Google uses one generic model for all languages. WindyTraveler uses specialist pair-translation models (English↔Japanese, Spanish↔French, etc.) that are trained specifically for each language combination. The result is dramatically more accurate, especially for medical, legal, and technical contexts. Plus: offline, AI tour guides, deals, booking — we\'re a travel platform, not just a translator.' },
  { q: 'What\'s the difference between subscriptions and bundles?', a: 'Subscriptions (Day Pass, Trip Pack, Annual, Premium) give you the full travel service — AI guides, deals, booking, temporary language access. Bundles (Traveler\'s Pack, Polyglot\'s Library, Marco Polo\'s Magic Box) give you permanent ownership of translation models. Buy a bundle once, own it forever. They work great together but either works standalone.' },
  { q: 'Can I really speak in my own voice in another language?', a: 'Yes — with a WindyClone voice profile. Record a few hours of speech using WindyWord, and WindyClone builds your digital voice twin. Then WindyTraveler can output translations in YOUR voice. It\'s surreal and incredibly effective for business meetings.' },
  { q: 'How does WindyTraveler connect to other Windy products?', a: 'One account connects everything. WindyWord captures your voice → WindyCloud stores your data → WindyClone creates your digital twin → WindyTraveler takes it all on the road. WindyTranslate powers the translation engine under the hood. Use one product or all six — they\'re better together but each stands alone.' },
  { q: 'Is my travel data private?', a: 'Absolutely. Offline translation never touches any server. Even cloud features use end-to-end encryption via WindyCloud. We don\'t sell your data, train on your conversations, or share your location. Your travel history is yours alone.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Questions? <span className="gradient-text">Answered.</span></h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="bg-windy-gray/40 rounded-xl border border-gray-800/40 overflow-hidden"
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-white text-sm">{faq.q}</span>
                <span className={`text-windy-amber transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
