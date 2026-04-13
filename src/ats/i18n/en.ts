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
    // Articles & determiners
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'is', 'was', 'are', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'shall', 'can', 'this', 'that',
    'these', 'those', 'it', 'its', 'as', 'if', 'not', 'no', 'so', 'up',
    'out', 'about', 'into', 'over', 'after', 'before', 'between', 'under',
    'above', 'below', 'all', 'each', 'every', 'both', 'few', 'more',
    'most', 'other', 'some', 'such', 'than', 'too', 'very',
    // Pronouns & possessives (also checked by pronoun check, but filter from JD keywords)
    'you', 'your', 'yours', 'yourself', 'we', 'our', 'ours', 'ourselves',
    'they', 'them', 'their', 'theirs', 'he', 'she', 'his', 'her', 'hers',
    'who', 'whom', 'whose', 'which', 'what', 'where', 'when', 'how', 'why',
    // Common JD filler words (not meaningful for skill matching)
    'able', 'also', 'across', 'already', 'always', 'among', 'any', 'apply',
    'become', 'believe', 'best', 'bring', 'change', 'come', 'committed',
    'company', 'comfortable', 'critical', 'current', 'day', 'desired',
    'either', 'end', 'ensure', 'environment', 'equal', 'even', 'excellent',
    'exciting', 'exceptional', 'expected', 'experience', 'fast', 'field',
    'find', 'first',
    'focused', 'follow', 'get', 'give', 'go', 'going', 'good', 'great',
    'group', 'grow', 'growing', 'growth', 'help', 'here', 'high', 'highly',
    'ideal', 'impact', 'important', 'include', 'includes', 'including',
    'industry', 'interested', 'job', 'join', 'just', 'keep', 'key', 'know',
    'large', 'latest', 'lead', 'level', 'like', 'location', 'long', 'look',
    'looking', 'love', 'make', 'many', 'much', 'must', 'need', 'new',
    'next', 'offer', 'one', 'only', 'open', 'opportunity', 'order',
    'others', 'own', 'pace', 'part', 'partner', 'passionate', 'people',
    'per', 'play', 'plus', 'position', 'preferred', 'provide', 'put',
    'qualifications', 'quickly', 'range', 'related', 'required',
    'requirements', 'requirement', 'responsible', 'responsibilities',
    'responsibility', 'result', 'right', 'role', 'run',
    'same', 'see', 'seek', 'seeking', 'set', 'several', 'since',
    'skills', 'someone', 'start', 'state', 'still', 'strong', 'success',
    'successful', 'support', 'sure', 'take', 'team', 'then', 'there',
    'thing', 'think', 'through', 'time', 'together', 'top', 'truly',
    'try', 'two', 'type', 'use', 'used', 'using', 'value', 'want',
    'way', 'well', 'while', 'within', 'without', 'work', 'working',
    'world', 'would', 'year', 'years',
    // Section headers & structural words (not technical skills)
    'description', 'overview', 'summary', 'duties', 'bachelor', 'bachelors',
    'master', 'masters', 'degree', 'phd', 'minimum', 'preferred',
    'implement', 'process', 'robust', 'consistent', 'operations',
    // URL/email/domain fragments
    'http', 'https', 'www', 'com', 'org', 'net', 'mailto',
    // Resume/YAML schema field names (in case raw YAML is pasted)
    'name', 'keywords', 'highlights', 'startdate', 'enddate', 'website',
    'profiles', 'basics', 'position', 'institution', 'studytype',
    'fluency', 'issuer', 'network', 'username', 'countrycode', 'region',
    // Generic nouns that aren't skills
    'product', 'company', 'service', 'services', 'platform', 'solutions',
    'ability', 'opportunity', 'candidate', 'applicant', 'position',
    'salary', 'compensation', 'benefits', 'perks', 'bonus',
    'development', 'management', 'knowledge', 'modern', 'advanced',
    'practices', 'nice', 'technologies', 'technology', 'frameworks',
    'framework', 'tools', 'data', 'based', 'contribute', 'contributions',
    'migration', 'leading', 'source', 'visit', 'join',
  ],
};

export default en;
