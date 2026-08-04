import { motion } from 'framer-motion';

const products = [
  { name: 'WindyWord', icon: '🎤', tagline: 'Voice-to-Text AI', url: 'https://windyword.ai', description: 'Free voice-to-text with ten models that run on your machine. The entry point to the Windy universe.' },
  { name: 'WindyCloud', icon: '☁️', tagline: 'Your AI Vault', url: 'https://windycloud.com', description: 'Store voice models, soul files, translations, and travel data. Sync across every device.' },
  { name: 'WindyClone', icon: '🧬', tagline: 'Your Digital Twin', url: 'https://windyclone.ai', description: 'Build a voice clone from your recordings. Speak foreign languages in YOUR voice.' },
  { name: 'WindyChat', icon: '💬', tagline: 'Translated Conversations', url: 'https://windychat.ai', description: 'Real-time multilingual messaging and calls. Talk to anyone, in any language.' },
  { name: 'WindyTranslate', icon: '🔧', tagline: 'The Engine', url: 'https://windytranslate.com', description: '3,800+ specialist translation models. The invisible force powering every Windy product.' },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Part of the <span className="gradient-text">Windy Universe</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            WindyTraveler connects to a complete ecosystem of voice AI products. One account. One data layer. Infinite possibilities.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.map((p, i) => (
            <motion.a key={i} href={p.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-windy-gray/40 p-6 rounded-xl border border-gray-800/40 hover:border-windy-amber/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-windy-amber transition-colors">{p.name}</h3>
                  <p className="text-xs text-windy-amber/60 font-medium">{p.tagline}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Start anywhere. Connect everything. <span className="text-windy-amber">Your voice is the key.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
