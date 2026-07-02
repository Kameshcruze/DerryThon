export interface GuestWish {
  id: string;
  name: string;
  relation: 'bride' | 'groom' | 'friend' | 'family';
  message: string;
  timestamp: string;
}

export interface RSVPData {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  guestsCount: number;
  attending: 'yes' | 'no';
  foodPreference: 'veg' | 'non-veg' | 'both';
  message?: string;
  timestamp: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  image?: string;
  icon: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  details: string;
  icon: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface DaySchedule {
  date: string;
  dayName: string;
  items: ScheduleItem[];
}
