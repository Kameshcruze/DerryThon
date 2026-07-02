import { GuestWish, RSVPData } from '../types';

const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'wish-1',
    name: 'Sarah & Michael',
    relation: 'friend',
    message: 'Wishing you both a lifetime of love, laughter, and endless adventures! We are so excited to celebrate with you!',
    timestamp: '2026-06-28T14:30:00.000Z'
  },
  {
    id: 'wish-2',
    name: 'Aunt Eleanor',
    relation: 'family',
    message: 'To my beautiful niece Derry and Thon, may your home be filled with warmth and your hearts filled with joy. Love you both!',
    timestamp: '2026-06-29T09:15:00.000Z'
  },
  {
    id: 'wish-3',
    name: 'David (Groomsman)',
    relation: 'groom',
    message: 'Thon, you found the absolute perfect partner! Derry, welcome to the family. Ready for the epic three-day celebration!',
    timestamp: '2026-06-30T18:45:00.000Z'
  },
  {
    id: 'wish-4',
    name: 'Priyah & Rajesh',
    relation: 'bride',
    message: 'The most beautiful couple inside and out. Looking forward to witnessing your traditional vows in Kanyakumari!',
    timestamp: '2026-07-01T11:20:00.000Z'
  }
];

export function getStoredWishes(): GuestWish[] {
  const wishes = localStorage.getItem('wedding_wishes');
  if (!wishes) {
    localStorage.setItem('wedding_wishes', JSON.stringify(INITIAL_WISHES));
    return INITIAL_WISHES;
  }
  return JSON.parse(wishes);
}

export function saveWish(wish: Omit<GuestWish, 'id' | 'timestamp'>): GuestWish {
  const wishes = getStoredWishes();
  const newWish: GuestWish = {
    ...wish,
    id: `wish-${Date.now()}`,
    timestamp: new Date().toISOString()
  };
  const updated = [newWish, ...wishes];
  localStorage.setItem('wedding_wishes', JSON.stringify(updated));
  return newWish;
}

export function getStoredRSVPs(): RSVPData[] {
  const rsvps = localStorage.getItem('wedding_rsvps');
  return rsvps ? JSON.parse(rsvps) : [];
}

export function saveRSVP(data: Omit<RSVPData, 'id' | 'timestamp'>): RSVPData {
  const rsvps = getStoredRSVPs();
  const newRSVP: RSVPData = {
    ...data,
    id: `rsvp-${Date.now()}`,
    timestamp: new Date().toISOString()
  };
  const updated = [...rsvps, newRSVP];
  localStorage.setItem('wedding_rsvps', JSON.stringify(updated));
  return newRSVP;
}
