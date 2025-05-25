// Define Resume type based on the JSON Resume schema standard
export interface Resume {
  $schema?: string;
  basics?: {
    name?: string;
    label?: string;
    image?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
      [k: string]: unknown;
    };
    profiles?: {
      network?: string;
      username?: string;
      url?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  work?: {
    name?: string;
    location?: string;
    description?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
    [k: string]: unknown;
  }[];
  volunteer?: {
    organization?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
    [k: string]: unknown;
  }[];
  education?: {
    institution?: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
    [k: string]: unknown;
  }[];
  awards?: {
    title?: string;
    date?: string;
    awarder?: string;
    summary?: string;
    [k: string]: unknown;
  }[];
  certificates?: {
    name?: string;
    date?: string;
    issuer?: string;
    url?: string;
    [k: string]: unknown;
  }[];
  publications?: {
    name?: string;
    publisher?: string;
    releaseDate?: string;
    url?: string;
    summary?: string;
    [k: string]: unknown;
  }[];
  skills?: {
    name?: string;
    level?: string;
    keywords?: string[];
    [k: string]: unknown;
  }[];
  languages?: {
    language?: string;
    fluency?: string;
    [k: string]: unknown;
  }[];
  interests?: {
    name?: string;
    keywords?: string[];
    [k: string]: unknown;
  }[];
  references?: {
    name?: string;
    reference?: string;
    [k: string]: unknown;
  }[];
  projects?: {
    name?: string;
    description?: string;
    highlights?: string[];
    keywords?: string[];
    startDate?: string;
    endDate?: string;
    url?: string;
    roles?: string[];
    entity?: string;
    type?: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
