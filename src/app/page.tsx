import Hero from '@/components/hero';
import homeImg from 'public/home.jpg'

export default function Home() {
  return (
    <Hero imageData={homeImg} imgAlt='Home Image' title="Welcome to Lahiru's Corporate Portal" ></Hero>
  );
}
