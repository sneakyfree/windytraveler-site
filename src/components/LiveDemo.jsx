import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const conversation = [
  { speaker: 'you', lang: 'English', text: 'Excuse me, could you recommend a good restaurant nearby?', flag: '🇺🇸' },
  { speaker: 'local', lang: 'Japanese', text: 'この近くでしたら、角を曲がった先に素晴らしいラーメン屋がありますよ。', flag: '🇯🇵' },
  { speaker: 'translate', lang: 'Translation', text: '"There\'s an excellent ramen shop just around the corner from here."', flag: '🔄' },
  { speaker: 'you', lang: 'English', text: 'That sounds great! Is it expensive?', flag: '🇺🇸' },
  { speaker: 'local', lang: 'Japanese', text: '全然高くないですよ！一杯800円くらいです。とても美味しいです。', flag: '🇯🇵' },
  { speaker: 'translate', lang: 'Translation', text: '"Not at all! About 800 yen per bowl. It\'s really delicious."', flag: '🔄' },
];

export default function LiveDemo() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < conversation.length) {
      const timer = setTimeout(() => setVisibleCount(c => c + 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-gray-400">A real conversation in Tokyo. No internet. No awkward pauses. Just connection.</p>
        </motion.div>
        <div className="bg-windy-gray/60 rounded-2xl border border-gray-800/60 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/40">
            <span className="text-xl">🇯🇵</span>
            <div>
              <div className="text-white font-semibold text-sm">Tokyo, Japan</div>
              <div className="text-gray-500 text-xs">Offline mode • WindyTranslate EN↔JP specialist</div>
            </div>
          </div>
          <div className="space-y-4 min-h-[300px]">
            {conversation.slice(0, visibleCount).map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.speaker === 'you' ? 'justify-end' : msg.speaker === 'translate' ? 'justify-center' : 'justify-start'}`}
              >
                {msg.speaker === 'translate' ? (
                  <div className="px-4 py-2 bg-windy-teal/10 border border-windy-teal/20 rounded-lg text-windy-teal text-sm italic max-w-md">
                    {msg.flag} {msg.text}
                  </div>
                ) : (
                  <div className={`max-w-sm px-4 py-3 rounded-2xl ${
                    msg.speaker === 'you' 
                      ? 'bg-windy-amber/15 border border-windy-amber/20 text-windy-amber' 
                      : 'bg-gray-800/60 border border-gray-700/40 text-gray-300'
                  }`}>
                    <div className="text-[10px] font-semibold uppercase tracking-wider mb-1 opacity-60">{msg.flag} {msg.lang}</div>
                    <div className="text-sm">{msg.text}</div>
                  </div>
                )}
              </motion.div>
            ))}
            {visibleCount < conversation.length && (
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {[0,1,2].map(i => (
                    <motion.div key={i} className="w-2 h-2 bg-gray-600 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {visibleCount >= conversation.length && (
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setVisibleCount(0)}
              className="mt-6 w-full py-3 border border-gray-700 text-gray-400 rounded-xl hover:border-windy-amber/40 hover:text-windy-amber transition-all text-sm"
            >
              ↺ Replay Conversation
            </motion.button>
          )}
        </div>
        <div className="text-center mt-6 text-xs text-gray-600">
          Translation powered by <a href="https://windytranslate.com" className="text-windy-teal hover:underline">WindyTranslate</a> — 3,800+ specialist models
        </div>
      </div>
    </section>
  );
}
