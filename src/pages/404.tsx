import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';

import Button from '@/components/Atoms/Button';
import ImageError from '@/public/assets/images/404Image.svg';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return (
    <section className="h-screen bg-green-90">
      <h1 className="mx-auto pt-10 text-center text-4xl text-white-0">
        Desculpe, Infelizmente não conseguimos encontrar essa pagina
      </h1>
      <Image className="m-auto pt-5" src={ImageError} alt="errorImage" />
      <Link href="/">
        <Button icon={<FaChevronCircleLeft />}>Voltar</Button>
      </Link>
    </section>
  );
};

export default Custom404;
