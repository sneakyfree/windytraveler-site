import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sarah K.', role: 'Digital Nomad', location: '🇹🇭 Bangkok', text: 'I\'ve been traveling Southeast Asia for 8 months. WindyTraveler replaced Google Translate, TripAdvisor, and three other apps. The offline translation is a game-changer when you\'re in a Thai market with no signal.', avatar: '👩‍💻' },
  { name: 'Marcus W.', role: 'Business Traveler', location: '🇩🇪 Munich', text: 'I close deals in 6 countries. The clone voice feature blew my mind — my Japanese clients heard me speak in their language, in MY voice. The meeting went from awkward to incredible.', avatar: '👨‍💼' },
  { name: 'The Hernandez Family', role: 'Family Vacation', location: '🇮🇹 Rome', text: 'Our kids used the AI tour guide at the Colosseum and now they won\'t stop talking about Roman history. The restaurant finder saved us from tourist traps. Best travel investment ever.', avatar: '👨‍👩‍👧‍👦' },
  { name: 'Emma L.', role: 'Study Abroad Student', location: '🇰🇷 Seoul', text: 'Studying in Korea without speaking Korean was terrifying. WindyTraveler got me through my first month — from ordering food to navigating the subway to making Korean friends. Now I\'m actually learning the language from the phrasebook.', avatar: '👩‍🎓' },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Travelers <span className="gradient-text">Love This</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-windy-gray/40 p-8 rounded-2xl border border-gray-800/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} • {t.location}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => <span key={j} className="text-windy-amber">★</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
