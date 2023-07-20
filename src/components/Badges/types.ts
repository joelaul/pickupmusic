{/* TODO: "timeAcquired" property should have which type? if Date, how to implement?*/}

export type Badge = {
  index: number;
  name: string;
  description: string;
  category: string;
  href: string;
  src: string;
  value: number;
  acquired: boolean;
};
