import Image from 'next/image';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import Social from '@/components/Atoms/Social';
import MercadoPagoImage from '@/public/assets/images/icons/mercado pago.svg';
import PixImage from '@/public/assets/images/icons/pix.webp';

const SocialLine = () => {
  return (
    <section className="bg-green-950 py-12">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col font-serif text-xl text-white-0">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Contato</h2>
          </div>
          <div className="flex flex-row  items-center gap-2">
            <span>
              <FaEnvelope size={22} />
            </span>
            <span>cggomesdev@gmail.com</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span>
              <FaWhatsapp size={22} />
            </span>
            <span>(21) 97932-6886</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-center font-serif   text-white-0">
          <span className="text-2xl font-semibold">
            Siga-me nas Redes Sociais
          </span>
          <Social outlined="sized" size="md" />
        </div>
        <div className="text-center">
          <h2 className="mb-3 font-serif text-2xl font-semibold text-white-0">
            Metodos de Pagamento
          </h2>
          <div className="flex">
            <Image width={120} alt="MercadoPagoImage" src={MercadoPagoImage} />
            <Image width={150} alt="MercadoPagoImage" src={PixImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLine;
