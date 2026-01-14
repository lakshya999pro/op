
import { ContentItem } from './types';

export const FEATURED_CONTENT: ContentItem[] = [
  {
    id: 'f1',
    title: 'YOU',
    image: 'https://ntvb.tmsimg.com/assets/p14418847_b_h8_aj.jpg?w=960&h=540',
    badge: 'CELEBRATING 5 YEARS',
    type: 'show',
    description: 'Entrepreneurs pitch their business ideas to a panel of investors.'
  },
  {
    id: 'f2',
    title: 'Breaking Bad',
    image: 'https://threechinguz.wordpress.com/wp-content/uploads/2013/11/breaking-bad.jpg',
    badge: 'NEW ARRIVAL',
    type: 'movie'
  }
];

export const NEW_ON_LIV: ContentItem[] = [
  {
    id: 'n1',
    title: 'MasterChef India',
    image: 'https://images.unsplash.com/photo-1556910110-ad5b934f0c67?auto=format&fit=crop&q=80&w=400&h=600',
    badge: 'NEW SEASON',
    type: 'show'
  },
  {
    id: 'n2',
    title: 'Freedom at Midnight',
    image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=400&h=600',
    badge: 'SEASON 2',
    type: 'show'
  },
  {
    id: 'n3',
    title: 'Maharani',
    image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=400&h=600',
    badge: 'EXCLUSIVE',
    type: 'show'
  },
  {
    id: 'n4',
    title: 'Scam 1992',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=600',
    badge: 'MUST WATCH',
    type: 'show'
  }
];
// CONTENT.tsx
export const POPULAR_WEB_SERIES = [
  {
    id: 'ws1',
    title: 'Money Heist',
    image: 'https://...',
    badge: 'TRENDING',
    type: 'webseries'
  },
  {
    id: 'ws2',
    title: 'Mirzapur',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=600',
    badge: 'POPULAR',
    type: 'webseries'
  }
];

export const TRENDING_SPORTS: ContentItem[] = [
  {
    id: 's1',
    title: 'Super Smash KFC',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600&h=400',
    isLive: true,
    type: 'sports'
  },
  {
    id: 's2',
    title: 'Emirates FA Cup',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600&h=400',
    badge: 'LIVE SOON',
    type: 'sports'
  },
  {
    id: 's3',
    title: 'Australian Open',
    image: 'https://images.unsplash.com/photo-1595435064212-36263787596c?auto=format&fit=crop&q=80&w=600&h=400',
    badge: 'MATCH HIGHLIGHTS',
    type: 'sports'
  }
];
