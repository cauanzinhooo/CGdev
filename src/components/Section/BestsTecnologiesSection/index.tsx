import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

import { Announcement } from '@/components/Molecules/Announcement';
import ImageTecnologies from '@/public/assets/images/bestTecnologiesImage.svg';
import DockerIcon from '@/public/assets/images/icons/custom-docker-green.svg';
import NodeIcon from '@/public/assets/images/icons/custom-next-green.svg';
import PrismaIcon from '@/public/assets/images/icons/light-prisma.svg';
import PostgressIcon from '@/public/assets/images/icons/postgresql.svg';

const Tecs = [
  {
    id: 1,
    image: PrismaIcon,
    desc: 'Prisma',
  },
  {
    id: 2,
    image: NodeIcon,
    desc: 'NextJS',
  },
  {
    id: 3,
    image: PostgressIcon,
    desc: 'Postgress',
  },
  {
    id: 4,
    image: DockerIcon,
    desc: 'Docker',
  },
];

export const BestTecnologies = () => {
  return (
    <Announcement.Root>
      <Announcement.ContentText>
        <h2 className="text-center font-serif text-[35px] font-bold text-green-150 sm:text-[40px]">
          Sempre Utilizando as melhores tecnologias do mercado!
          <p className="my-5 flex justify-center">
            <FaArrowDown color="text-green-950" />
          </p>
          <div className="flex flex-col justify-center min-[400px]:flex-row">
            {Tecs.map((tec) => (
              <div
                key={tec.id}
                className="mx-5 flex max-w-[80px] flex-col  items-center justify-center "
              >
                <Image className="" alt="cu" src={tec.image} />
                <span className="text-xl font-semibold">{tec.desc}</span>
              </div>
            ))}
          </div>
        </h2>
      </Announcement.ContentText>
      <Announcement.Content image={ImageTecnologies} />
    </Announcement.Root>
  );
};
