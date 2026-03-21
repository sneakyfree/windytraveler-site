import { motion } from 'framer-motion';

const features = [
  {
    icon: '🌍',
    title: 'Offline Translation',
    description: 'Download language packs before your trip. Translate in real-time with zero internet — on a plane, in a subway, middle of nowhere. 99+ languages.',
    color: 'from-amber-500/20 to-transparent'
  },
  {
    icon: '🗺️',
    title: 'AI Tour Guides',
    description: 'Ask about any landmark, restaurant, or hidden gem. Get history, context, and insider tips from an AI that knows every city on Earth.',
    color: 'from-teal-500/20 to-transparent'
  },
  {
    icon: '💰',
    title: 'Local Deals & Coupons',
    description: 'Partnerships with local businesses worldwide. Restaurant discounts, attraction tickets, hotel deals — your AI finds savings you\'d never find alone.',
    color: 'from-green-500/20 to-transparent'
  },
  {
    icon: '📋',
    title: 'Trip Planning',
    description: 'Build itineraries with AI. Optimal routes, time estimates, booking links, weather forecasts. Your entire trip, organized in seconds.',
    color: 'from-blue-500/20 to-transparent'
  },
  {
    icon: '🎤',
    title: 'Clone Voice Translation',
    description: 'Speak Japanese in YOUR voice. Powered by WindyClone, your digital twin speaks foreign languages with your exact tone, pitch, and personality.',
    color: 'from-purple-500/20 to-transparent'
  },
  {
    icon: '🏨',
    title: 'Booking Integration',
    description: 'Hotels, flights, trains, restaurants — book directly through WindyTraveler with AI-negotiated prices and instant confirmation in any language.',
    color: 'from-rose-500/20 to-transparent'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Not Just Translation.<br /><span className="gradient-text">Your Complete Travel AI.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Translation is the hook. The travel experience is the product. Everything you need, in every language, in every country.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative bg-windy-gray/60 p-8 rounded-2xl border border-gray-800/60 hover:border-windy-amber/30 transition-all group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
