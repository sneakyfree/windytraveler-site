export default function Footer() {
  const windyBrands = [
    { name: 'WindyWord', url: 'https://windyword.ai', desc: 'Voice-to-Text AI' },
    { name: 'WindyCloud', url: 'https://windycloud.com', desc: 'AI Cloud Storage' },
    { name: 'WindyClone', url: 'https://windyclone.ai', desc: 'Digital Twin' },
    { name: 'WindyChat', url: 'https://windychat.ai', desc: 'Multilingual Chat' },
    { name: 'WindyTraveler', url: 'https://windytraveler.com', desc: 'Travel Companion' },
    { name: 'WindyTranslate', url: 'https://windytranslate.com', desc: 'Translation Engine' },
  ];

  return (
    <footer className="bg-windy-gray/40 border-t border-gray-800/40 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold text-white">Windy<span className="text-windy-amber">Traveler</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your AI travel companion. Translation, tour guides, local deals, and trip planning — powered by 3,800+ specialist models.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-windy-amber transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-windy-amber transition-colors">Pricing</a></li>
              <li><a href="#bundles" className="hover:text-windy-amber transition-colors">Language Bundles</a></li>
              <li><a href="#faq" className="hover:text-windy-amber transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-4">The Windy Universe</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {windyBrands.map(b => (
                <li key={b.name}><a href={b.url} className="hover:text-windy-amber transition-colors">{b.name} — {b.desc}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-windy-amber transition-colors">About</a></li>
              <li><a href="#" className="hover:text-windy-amber transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-windy-amber transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@windytraveler.com" className="hover:text-windy-amber transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 WindyTraveler. All rights reserved.</p>
          <p className="text-xs text-gray-600">
            Translation powered by <a href="https://windytranslate.com" className="text-windy-teal hover:underline">WindyTranslate</a> • 
            Voice clone by <a href="https://windyclone.ai" className="text-windy-teal hover:underline">WindyClone</a> • 
            Storage by <a href="https://windycloud.com" className="text-windy-teal hover:underline">WindyCloud</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
