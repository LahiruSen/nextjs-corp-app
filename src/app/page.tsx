import Image from 'next/image';
import homeImg from 'public/home.jpg'

export default function Home() {
  return (
    <div className='absolute -z-10 inset-0'>
      Home Page
      <Image src={homeImg} alt="Home Image" fill style={{objectFit: 'cover'}}
      />
    </div>
  );
}
