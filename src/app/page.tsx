import Hero from '@/components/Hero/Hero';
import Classes from '@/components/Classes/Classes';
import Badges from '@/components/Badges/Badges';
import { BADGES } from '@/static/badges';

export default function Home() {
  return (
    <main>
      <Hero />
      <Badges badges={BADGES} />
      <Classes />
    </main>
  );
}
