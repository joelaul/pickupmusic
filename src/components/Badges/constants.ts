import { Badge, BadgeCategories } from '@/components/Badges/types';

export const BADGES: Badge[] = [
  {
    name: 'Picked It Up',
    awardedFor: 'Becoming a #pickupmusic member',
    category: BadgeCategories.QUICKWIN,
    imgSrc: '/badges/badge1.png',
    value: 0,
    timeAcquired: new Date(),
  },
  {
    name: 'String Wrangler',
    awardedFor: 'Completing the Country learning pathway',
    category: BadgeCategories.GENRE,
    imgSrc: '/badges/badge2.png',
    value: 1000,
    timeAcquired: new Date(),
  },
  {
    name: 'Funk Master',
    awardedFor: 'Completing the Funk learning pathway',
    category: BadgeCategories.GENRE,
    imgSrc: '/badges/badge3.png',
    value: 1000,
    timeAcquired: new Date(),
  },
  {
    name: 'Talkbox',
    awardedFor: 'Making 10 forum posts',
    category: BadgeCategories.CONTRIBUTION,
    imgSrc: '/badges/badge4.png',
    value: 250,
    timeAcquired: new Date(),
  },
  {
    name: 'Quintuple Threat',
    awardedFor: 'Completing at least one of each course type',
    category: BadgeCategories.DIVERSITY,
    imgSrc: '/badges/badge5.png',
    value: 500,
    timeAcquired: new Date(),
  },
  {
    name: 'Vamp Life',
    awardedFor: 'Logging in after midnight',
    category: BadgeCategories.SESSION,
    imgSrc: '/badges/badge6.png',
    value: 125,
    timeAcquired: new Date(),
  },
  {
    name: 'Squad Goals',
    awardedFor: 'Completing 10 SongSquads',
    category: BadgeCategories.SPECIALTY,
    imgSrc: '/badges/badge7.png',
    value: 500,
    timeAcquired: null,
  },
  {
    name: 'Minimalist',
    awardedFor: 'Completing 10 5-minute-lessons',
    category: BadgeCategories.SPECIALTY,
    imgSrc: '/badges/badge8.png',
    value: 500,
    timeAcquired: null,
  },
];

export const BADGES_ACQUIRED = (BADGES: Badge[]): Badge[] => {
  return [...BADGES.filter((x) => x.timeAcquired)];
};

export const BADGES_UNACQUIRED = (BADGES: Badge[]): Badge[] => {
  return [...BADGES.filter((x) => !x.timeAcquired)];
};
