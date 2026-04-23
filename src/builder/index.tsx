import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { App } from './components/App';

// Cookieless, aggregate-only pageview analytics (Vercel Web Analytics).
// No PII, no persistent identifiers, no cross-site tracking. Used to see
// how many people land on the app and which themes are popular, nothing
// about any individual user or their resume data.
inject();
// Core Web Vitals (LCP / CLS / INP / FCP / TTFB). Sampled, cookieless,
// no PII, same privacy shape as the pageview analytics above.
injectSpeedInsights();

const root = document.getElementById('app');
if (root) {
  createRoot(root).render(<App />);
}
