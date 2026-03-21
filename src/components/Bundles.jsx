import { motion } from 'framer-motion';

const PRICE_PER_PAIR = 6.99;

const bundles = [
  {
    name: "Traveler's Pack",
    icon: '🧳',
    pairs: 25,
    price: 49,
    color: 'from-green-500/20 to-green-900/10',
    border: 'border-green-500/30',
    tagline: 'The Weekend Explorer',
    story: 'You\'re landing in Barcelona tomorrow. You need Spanish, French for that day trip to Nice, and Portuguese for Lisbon next week. Pick your 25 pairs, download them in under a minute, and walk off the plane ready.',
    cta: 'Choose Your 25 Languages',
    popular: false,
  },
  {
    name: "Polyglot's Library",
    icon: '🗣️',
    pairs: 200,
    price: 149,
    color: 'from-blue-500/20 to-blue-900/10',
    border: 'border-blue-500/30',
    tagline: 'The Serious Traveler',
    story: 'You don\'t just visit countries — you collect them. Business in Tokyo, sabbatical in Buenos Aires, wedding in Marrakech. With 200 pairs, you\'ll never land somewhere and think "I should have downloaded that one." You won\'t. They\'re already there.',
    cta: 'Build Your Library',
    popular: true,
  },
  {
    name: "Marco Polo's Magic Box",
    icon: '🧭',
    pairs: 2500,
    price: 999,
    color: 'from-amber-500/20 to-amber-900/10',
    border: 'border-amber-500/30',
    tagline: 'The Legend',
    story: 'Every language. Every dialect. Every specialist model our engineers have ever built — medical, legal, technical, conversational. Marco Polo explored the entire known world. Now you have every language in it. One purchase. Yours forever. The kind of thing you buy once and your grandchildren still use.',
    cta: 'Own Everything',
    popular: false,
    legendary: true,
  },
];

function SavingsBar({ pairs, bundlePrice }) {
  const retailPrice = pairs * PRICE_PER_PAIR;
  const saved = retailPrice - bundlePrice;
  const pctSaved = Math.round((saved / retailPrice) * 100);
  
  return (
    <div className="mt-4 mb-6 bg-black/30 rounded-xl p-4 border border-gray-700/40">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>À la carte: {pairs} × ${PRICE_PER_PAIR}</span>
        <span className="line-through text-red-400/70">${retailPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-xs mb-2">
        <span className="text-windy-amber font-semibold">Bundle price</span>
        <span className="text-windy-amber font-bold">${bundlePrice}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: `${pctSaved}%` }} 
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
        />
      </div>
      <div className="text-center">
        <span className="text-green-400 font-black text-lg">You save ${saved.toFixed(2)}</span>
        <span className="text-green-400/60 text-sm ml-2">({pctSaved}% off)</span>
      </div>
    </div>
  );
}

export default function Bundles() {
  return (
    <section id="bundles" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-windy-amber/2 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Own Your <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            One-time purchase. Download once. Use forever. No subscription required — 
            these are yours for life, powered by 
            <a href="https://windytranslate.com" className="text-windy-teal hover:underline ml-1">WindyTranslate</a>'s specialist models.
          </p>
        </motion.div>

        {/* À la carte anchor */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/60 border border-gray-700/40">
            <span className="text-sm text-gray-400">Individual language pairs:</span>
            <span className="text-lg font-bold text-white">${PRICE_PER_PAIR}</span>
            <span className="text-sm text-gray-500">per pair</span>
            <span className="text-xs text-gray-600 border-l border-gray-700 pl-3">or save up to 97% with a bundle ↓</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`relative bg-gradient-to-br ${b.color} bg-windy-gray/60 p-8 rounded-2xl border-2 ${b.border} transition-all hover:scale-[1.02]`}
            >
              {b.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              {b.legendary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark text-xs font-bold rounded-full">
                  🧭 LEGENDARY
                </div>
              )}
              <div className="text-center mb-4">
                <span className="text-5xl block mb-3">{b.icon}</span>
                <h3 className="text-2xl font-bold text-white">{b.name}</h3>
                <p className="text-xs text-windy-amber/80 font-medium mt-1 italic">{b.tagline}</p>
                <div className="mt-3">
                  <span className="text-lg text-gray-400">{typeof b.pairs === 'number' ? b.pairs.toLocaleString() : b.pairs} language pairs</span>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-black gradient-text">${b.price}</span>
                  <span className="text-gray-500 text-sm ml-2">one-time</span>
                </div>
              </div>

              <SavingsBar pairs={typeof b.pairs === 'number' ? b.pairs : 2500} bundlePrice={b.price} />

              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{b.story}"</p>
              
              <button className={`w-full py-3.5 font-bold rounded-xl text-sm transition-all ${
                b.legendary
                  ? 'bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark cta-glow hover:scale-[1.02]'
                  : 'border-2 border-current text-windy-amber hover:bg-windy-amber/10'
              }`}>
                {b.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Social proof / scarcity */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">✅ Free updates as new models release</span>
            <span className="flex items-center gap-1.5">✅ Works across all Windy apps</span>
            <span className="flex items-center gap-1.5">✅ Download once, no internet needed</span>
          </div>
          <p className="text-xs text-gray-600">
            🔒 One-time purchase. No recurring fees. No subscriptions. No tricks. Pay once — it's yours forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
