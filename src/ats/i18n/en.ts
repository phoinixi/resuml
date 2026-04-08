export interface LanguageData {
  actionVerbs: string[];
  pronouns: string[];
  stopWords: string[];
}

const en: LanguageData = {
  actionVerbs: [
    // Leadership & Management
    'achieved', 'administered', 'advanced', 'allocated', 'approved', 'assigned',
    'authorized', 'chaired', 'consolidated', 'coordinated', 'delegated', 'directed',
    'established', 'executed', 'headed', 'hired', 'hosted', 'led', 'managed',
    'mentored', 'motivated', 'orchestrated', 'organized', 'oversaw', 'planned',
    'presided', 'prioritized', 'produced', 'recruited', 'spearheaded', 'supervised',
    // Technical & Engineering
    'architected', 'automated', 'built', 'coded', 'configured', 'debugged',
    'deployed', 'designed', 'developed', 'devised', 'engineered', 'implemented',
    'installed', 'integrated', 'launched', 'maintained', 'migrated', 'modernized',
    'optimized', 'overhauled', 'programmed', 'prototyped', 'refactored',
    'reengineered', 'resolved', 'restructured', 'revamped', 'scaled',
    'standardized', 'streamlined', 'tested', 'troubleshot', 'upgraded',
    // Achievement & Impact
    'accelerated', 'accomplished', 'boosted', 'completed', 'contributed',
    'converted', 'decreased', 'delivered', 'doubled', 'earned', 'eliminated',
    'exceeded', 'expanded', 'expedited', 'generated', 'grew', 'improved',
    'increased', 'maximized', 'minimized', 'outperformed', 'pioneered',
    'recovered', 'reduced', 'saved', 'simplified', 'solved', 'surpassed',
    'transformed', 'tripled',
    // Communication & Collaboration
    'advised', 'advocated', 'briefed', 'collaborated', 'communicated',
    'consulted', 'convinced', 'counseled', 'defined', 'demonstrated',
    'documented', 'educated', 'facilitated', 'guided', 'influenced',
    'informed', 'instructed', 'liaised', 'negotiated', 'partnered',
    'persuaded', 'presented', 'promoted', 'proposed', 'published',
    'recommended', 'represented', 'trained',
    // Analysis & Research
    'analyzed', 'assessed', 'audited', 'benchmarked', 'calculated',
    'compared', 'compiled', 'conducted', 'discovered', 'evaluated',
    'examined', 'explored', 'forecasted', 'identified', 'inspected',
    'interpreted', 'investigated', 'mapped', 'measured', 'modeled',
    'monitored', 'quantified', 'researched', 'reviewed', 'surveyed',
    'synthesized', 'tracked', 'validated', 'verified',
    // Creation & Innovation
    'conceptualized', 'crafted', 'created', 'customized', 'formulated',
    'founded', 'initiated', 'innovated', 'introduced', 'invented',
    'originated', 'shaped',
  ],
  pronouns: ['i', 'me', 'my', 'mine', 'myself', 'we', 'our', 'ours'],
  stopWords: [
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'is', 'was', 'are', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'shall', 'can', 'this', 'that',
    'these', 'those', 'it', 'its', 'as', 'if', 'not', 'no', 'so', 'up',
    'out', 'about', 'into', 'over', 'after', 'before', 'between', 'under',
    'above', 'below', 'all', 'each', 'every', 'both', 'few', 'more',
    'most', 'other', 'some', 'such', 'than', 'too', 'very',
  ],
};

export default en;
