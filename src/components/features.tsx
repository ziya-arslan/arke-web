import { ScrollContext } from "@/utils/scroll-observer";
import React, { useContext, useRef } from "react";
import s from "../styles/features.module.css";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Features: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPage = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPage - 0.5, Math.max(0.5, percentY * numOfPage));
  }

  return (
    <div ref={refContainer} className="bg-black text-white ">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-5xl font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.featureText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Эксперты в поставке товаров из Китая.
          </div>
          <div
            className={`${s.featureText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Индивидуальный подход и гибкая ценовая политика - основа нашей
            работы. Мы понимаем, что каждый бизнес имеет свои особенности и
            требования.
          </div>
          <div
            className={`${s.featureText} inline-block `}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Гарантируем качество, сроки и конфиденциальность.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
