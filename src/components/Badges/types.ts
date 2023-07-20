{/* TODO: "timeAcquired" property should have which type? if Date, how to implement?*/}

export interface Badge {
  [key: string]: any;
  
  index: number;
  name: string;
  description: string;
  category: string;
  href: string;
  src: string;
  value: number;
  acquired: boolean;
  timeAcquired: Date | null;
};
