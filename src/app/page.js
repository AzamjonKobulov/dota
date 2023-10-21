import Image from 'next/image';
import Hero from './components/sections/Hero';
import Info from './components/sections/Info';

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
    </div>
  );
}
