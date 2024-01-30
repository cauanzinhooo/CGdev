// import type { StaticImageData } from 'next/image';
// import Image from 'next/image';
// import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// type CardProps = {
//   title: string;
//   image: StaticImageData;
// };

// const CardProject = ({ title, image }: CardProps) => {
//   const [isHover, setIsHover] = useState(false);
//   const [ref, inView] = useInView({ triggerOnce: true });

//   const handleHover = () => {
//     setIsHover((prev) => !prev);
//   };

//   return (
//     <div className="relative max-w-xl rounded-3xl bg-green-200 pb-7 pt-5">
//       <h2 className="font-serif text-lg font-bold text-white-0">{title}</h2>
//       <div
//         className="relative overflow-hidden"
//         onMouseEnter={handleHover}
//         onMouseLeave={handleHover}
//       >
//         <div ref={ref}>
//           <Image alt="aaa" src={image} />
//         </div>
//         {isHover && inView && (
//           <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
//             <p className="font-bold text-white-0">Texto sobreposto</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardProject;
import CardProjectContent from './CardProjectContent';
import CardProjectHovered from './CardProjectHovered';
import CardProjectRoot from './CardProjectRoot';

export const CardProject = {
  Root: CardProjectRoot,
  Content: CardProjectContent,
  Hovered: CardProjectHovered,
};
