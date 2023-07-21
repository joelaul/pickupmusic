{/* TODO:  */}

import { Badge } from '@/components/Badges/types';

enum BadgeCategories {
    QUICKWIN = 'Quick Win',
    GENRE = 'Genre',
    SPECIALTY = 'Specialty',
    DIVERSITY = 'Diversity',
    CONTRIBUTION = 'Contribution',
    SESSION = 'Session'
}

export const BADGES: Badge[] = [
    { 
        index: 1,
        name: 'Picked It Up', 
        description: 'Awarded for becoming a #pickupmusic member',
        category: BadgeCategories.QUICKWIN,
        href: '/classes',
        src: 'badges/badge1.png',
        value: 0,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 2,
        name: 'String Wrangler', 
        description: 'Awarded for completing the Country learning pathway',
        category: BadgeCategories.GENRE,
        href: '/classes',
        src: 'badges/badge2.png',
        value: 1000,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 3,
        name: 'Funk Master', 
        description: 'Awarded for completing the Funk learning pathway',
        category: BadgeCategories.GENRE,
        href: '/classes',
        src: 'badges/badge3.png',
        value: 1000,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 4,
        name: 'Talkbox', 
        description: 'Awarded for making 10 forum posts',
        category: BadgeCategories.CONTRIBUTION,
        href: '/classes',
        src: 'badges/badge4.png',
        value: 250,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 5,
        name: 'Quintuple Threat', 
        description: 'Awarded for completing at least one of each course type',
        category: BadgeCategories.DIVERSITY,
        href: '/classes',
        src: 'badges/badge5.png',
        value: 500,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 6,
        name: 'Vamp Life', 
        description: 'Awarded for logging in after midnight',
        category: BadgeCategories.SESSION,
        href: '/classes',
        src: 'badges/badge6.png',
        value: 125,
        acquired: true,
        timeAcquired: new Date
    },
    { 
        index: 7,
        name: 'Squad Goals', 
        description: 'Awarded for completing 10 SongSquads',
        category: BadgeCategories.SPECIALTY,
        href: '/classes',
        src: 'badges/badge7.png',
        value: 500,
        acquired: false,
        timeAcquired: null
    },
    { 
        index: 8,
        name: 'Minimalist', 
        description: 'Awarded for completing 10 5-minute lessons',
        category: BadgeCategories.SPECIALTY,
        href: '/classes',
        src: 'badges/badge8.png',
        value: 500,
        acquired: false,
        timeAcquired: null
    }
];

export const BADGES_ACQUIRED: Badge[] = [...BADGES.filter((x) => x.acquired)];

export const BADGES_NOTACQUIRED: Badge[] = [...BADGES.filter((x) => !x.acquired)];