import Image from "next/image";
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import About from '@/components/About';
import Awards from '@/components/Awards';
import Programs from '@/components/Programs';
import Promo from '@/components/Promo';
import Form from '@/components/Form';
import Map from '@/components/Map';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Awards />
      <Programs />
      <Promo />
      <Form />
      <Map />
    </>
  );
}