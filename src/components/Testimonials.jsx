import { motion } from 'framer-motion';

/*
 * These are USE CASES, not endorsements.
 *
 * This block previously carried four invented customers, each with a first
 * name, a job title, a city and a five-star rating. None of them existed.
 * (Their names are deliberately not repeated here — a gate that greps for
 * fabricated attributions should not trip on the comment explaining them.)
 * The site sat behind a pre-launch gate
 * when they were written and went fully public on 2026-08-04, at which point
 * invented testimonials from named individuals stopped being a draft problem
 * and became an FTC one.
 *
 * They also sold features that do not exist yet: AI tour guides, a restaurant
 * finder, clone-voice translation. Nothing below claims a feature that is not
 * real, and nothing below is attributed to a person.
 *
 * If a real traveller ever says something quotable, put their name here with
 * their permission. Until then, this section describes the product.
 */
const useCases = [
  {
    scenario: 'A market with no signal',
    body: 'Download the pack before you fly. Translation runs on the phone in your hand, so a dead zone, a basement restaurant or a mountain bus costs you nothing.',
    icon: '📶',
  },
  {
    scenario: 'The languages other apps skip',
    body: 'Our catalogue covers 209 languages, including many no major translation service offers at all. If you are going somewhere unusual, that is exactly where the gap shows up.',
    icon: '🗺️',
  },
  {
    scenario: 'Both directions, not just yours',
    body: 'Ask a question and understand the answer. Packs carry the pairs for the region you are actually visiting, not only the ones into English.',
    icon: '↔️',
  },
  {
    scenario: 'Yours once you own it',
    body: 'A pack is a one-time purchase and the models sit on your device. No subscription, no per-character billing, and nothing stops working when the trip ends.',
    icon: '🔒',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for <span className="gradient-text">the Road</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-windy-gray/40 p-8 rounded-2xl border border-gray-800/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{t.icon}</span>
                <div className="font-bold text-white">{t.scenario}</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
