export enum BadgeCategories {
  QUICKWIN = 'Quick Win',
  GENRE = 'Genre',
  SPECIALTY = 'Specialty',
  DIVERSITY = 'Diversity',
  CONTRIBUTION = 'Contribution',
  SESSION = 'Session',
}

export interface Badge {
  name: string;
  awardedFor: string;
  category: string;
  imgSrc: string;
  value: number;
  timeAcquired: Date | null;
}
