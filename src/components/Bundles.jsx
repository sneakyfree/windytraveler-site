import { motion } from 'framer-motion';
import packs from '../data/packs.json';

/*
 * The seven regional packs. These came over from the Windy Word site, where
 * they had been living by accident — they are Windy Traveler products and this
 * is where they belong.
 *
 * Names, regions, pair counts, prices and icons all come from src/data/packs.json,
 * which is the same file the apps read (windy-pro/shared/pair-bundles.json).
 * Do not retype a price or a pair count here — change the JSON.
 *
 * Previously this file offered a different, smaller set of three bundles at
 * prices that had drifted out of sync with the product. That set is retired;
 * the seven regional packs below replace it.
 */

const PRICE_PER_PAIR = 6.99;

// Editorial copy per pack. Keyed by id so a new pack in the JSON shows up with
// its own description rather than silently inheriting someone else's story.
const STORIES = {
  pack_grand_tour:
    "You're landing in Barcelona tomorrow, then Nice, then Lisbon next week. One download and you walk off every plane already able to talk to people.",
  pack_safari:
    'Fifty-four countries and well over a thousand languages. Cairo to Cape Town, with the Arabic, Swahili, Amharic and Zulu you will actually use on the ground.',
  pack_silk_road:
    'Dubai to Delhi across the oldest trade route on Earth. Arabic, Hindi, Urdu, Farsi — and the pairs between them, not just to and from English.',
  pack_dragon:
    'One and a half billion people. Chinese, Japanese and Korean, including the pairs between them that most translation apps quietly refuse to do.',
  pack_archipelago:
    'Bali to Fiji, across thousands of islands. Thai, Vietnamese, Indonesian, Tagalog, Malay — and the ferry rides in between where there is no signal at all.',
  pack_explorer:
    'The Amazon to the Arctic. Spanish and Brazilian Portuguese, Canadian French, Quechua, and sign language pairs most people never think to look for.',
  pack_marco_polo:
    'Every language. Every dialect. Every specialist model our engineers have built. Marco Polo explored the entire known world — this is every language in it, bought once, yours forever.',
};

const TAGLINES = {
  pack_grand_tour: 'The Continental',
  pack_safari: 'The Long Way Round',
  pack_silk_road: 'The Ancient Route',
  pack_dragon: 'The Eastern Giant',
  pack_archipelago: 'The Island Hopper',
  pack_explorer: 'The New World',
  pack_marco_polo: 'The Legend',
};

const bundles = packs.map((p) => ({
  ...p,
  tagline: TAGLINES[p.id] || p.region,
  story: STORIES[p.id] || p.description,
  legendary: p.id === 'pack_marco_polo',
  popular: p.id === 'pack_grand_tour',
}));

function SavingsBar({ pairs, bundlePrice }) {
  const retailPrice = pairs * PRICE_PER_PAIR;
  const saved = retailPrice - bundlePrice;
  const pctSaved = Math.round((saved / retailPrice) * 100);

  return (
    <div className="mt-4 mb-6 bg-black/30 rounded-xl p-4 border border-gray-700/40">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>À la carte: {pairs.toLocaleString()} × ${PRICE_PER_PAIR}</span>
        <span className="line-through text-red-400/70">${retailPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
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
        <span className="text-green-400 font-black text-lg">
          You save ${saved.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </span>
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
            One-time purchase. Download once. Use forever. No subscription — these are yours for
            life, served from
            <a href="https://windytranslate.com" className="text-windy-teal hover:underline ml-1">
              WindyTranslate
            </a>
            's specialist models.
          </p>
        </motion.div>

        {/* À la carte anchor */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/60 border border-gray-700/40">
            <span className="text-sm text-gray-400">Individual language pairs:</span>
            <span className="text-lg font-bold text-white">${PRICE_PER_PAIR}</span>
            <span className="text-sm text-gray-500">per pair</span>
            <span className="text-xs text-gray-600 border-l border-gray-700 pl-3">or take a region below ↓</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative bg-windy-gray/60 p-8 rounded-2xl border-2 transition-all hover:scale-[1.02] ${
                b.legendary ? 'border-windy-amber/50 lg:col-span-3' : 'border-gray-700/40 hover:border-windy-amber/30'
              }`}
              style={!b.legendary ? { borderColor: `${b.color}55` } : undefined}
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
                <p className="text-xs text-gray-500 mt-1">{b.description}</p>
                <div className="mt-3">
                  <span className="text-lg text-gray-400">
                    {b.pairCount.toLocaleString()} language pairs
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-black gradient-text">${b.price}</span>
                  <span className="text-gray-500 text-sm ml-2">one-time</span>
                </div>
              </div>

              <SavingsBar pairs={b.pairCount} bundlePrice={b.price} />

              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{b.story}"</p>

              {/* No checkout is wired yet, so there is no buy button pretending there is. */}
              <div className="w-full py-3.5 text-center font-bold rounded-xl text-sm border-2 border-gray-700/60 text-gray-500">
                Coming soon
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">✅ Free updates as new models release</span>
            <span className="flex items-center gap-1.5">✅ Works across all Windy apps</span>
            <span className="flex items-center gap-1.5">✅ Download once, no internet needed</span>
          </div>
          <p className="text-xs text-gray-600">
            🔒 One-time purchase. No recurring fees. No subscriptions. Pay once — it's yours forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
