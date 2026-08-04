import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Day Pass',
    icon: '🎫',
    price: { monthly: '$2.99', annual: '$2.99', lifetime: '$2.99' },
    period: { monthly: '/ 24 hours', annual: '/ 24 hours', lifetime: '/ 24 hours' },
    tagline: 'Perfect for a day trip or quick visit',
    features: ['5 offline languages', 'Basic city guide', '24-hour access', 'Text translation', 'Phrasebook'],
    cta: 'Get Day Pass',
    highlight: false,
  },
  {
    name: 'Trip Pack',
    icon: '🧳',
    price: { monthly: '$9.99', annual: '$9.99', lifetime: '$9.99' },
    period: { monthly: '/ 2 weeks', annual: '/ 2 weeks', lifetime: '/ 2 weeks' },
    tagline: 'Your vacation companion',
    features: ['10 offline languages', 'AI tour guide', 'Local deals & coupons', 'Restaurant finder', 'Voice translation', 'Trip itinerary builder'],
    cta: 'Get Trip Pack',
    highlight: false,
  },
  {
    name: 'Annual',
    icon: '🌎',
    price: { monthly: '$5.99', annual: '$49', lifetime: '$49' },
    period: { monthly: '/mo', annual: '/year', lifetime: '/year' },
    tagline: 'For the frequent traveler',
    features: ['Unlimited offline packs', 'All 99+ languages', 'Full AI concierge', 'Priority everything', 'Clone voice translation', 'Booking integration', 'One regional pack included'],
    cta: 'Start Annual Plan',
    highlight: true,
    badge: 'BEST VALUE',
  },
  {
    name: 'Premium',
    icon: '👑',
    price: { monthly: '$14.99', annual: '$149', lifetime: '$299' },
    period: { monthly: '/mo', annual: '/year', lifetime: 'lifetime' },
    tagline: 'The ultimate travel experience',
    features: ['Everything in Annual', 'Real-time video translation', 'Clone voice in all languages', 'VIP deals & concierge', 'Priority support', 'Family sharing (5 members)'],
    cta: 'Go Premium',
    highlight: false,
    badge: 'ULTIMATE',
  },
];

const tabs = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'annual', label: 'Annual', savings: 'Save 30%' },
  { key: 'lifetime', label: 'Lifetime', savings: 'Own Forever' },
];

export default function Pricing() {
  const [billing, setBilling] = useState('lifetime');

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-windy-amber/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Adventure at <span className="gradient-text">Every Price</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">From a day trip to a lifetime of travel. Pick what fits.</p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-windy-gray/80 rounded-xl p-1 border border-gray-800/60">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setBilling(t.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  billing === t.key ? 'bg-windy-amber text-windy-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.label}
                {t.savings && billing === t.key && (
                  <span className="ml-2 text-[10px] font-bold">{t.savings}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative bg-windy-gray/60 p-7 rounded-2xl border-2 transition-all ${
                plan.highlight ? 'border-windy-amber/50 card-glow scale-[1.02]' : 'border-gray-800/60 hover:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark text-xs font-black rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="text-center mb-6">
                <span className="text-3xl block mb-2">{plan.icon}</span>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{plan.tagline}</p>
                <div className="mt-4">
                  <span className="text-4xl font-black gradient-text">{plan.price[billing]}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.period[billing]}</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-windy-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-bold rounded-xl text-sm transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark hover:scale-[1.02] cta-glow'
                  : 'border-2 border-windy-amber/30 text-windy-amber hover:bg-windy-amber/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          All plans include a 7-day free trial. Cancel anytime. No questions asked.
        </div>
      </div>
    </section>
  );
}
