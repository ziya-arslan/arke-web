import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

const Works = () => {
  return (
    <TileWrapper numberOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-4xl md:text-5xl font-semibold ">
                  Вы можете заказать все этапы прохождения товара, либо
                  воспользоваться отдельными услугами
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/asset/globe.mp4"
                    type="video/mp4; codecs=hvc1"
                  />
                  <source
                    src="/assets/globe.webm"
                    type="video/webm; codecs=vp9"
                  />
                </video>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-4xl md:text-5xl font-semibold ">
                  РАБОТАЕМ В СФЕРЕ ЭКСПОРТА И ИМПОРТА С 2008 ГОДА
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/truck.jpg"
                  width={1280}
                  height={720}
                  alt="truck"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-4xl md:text-5xl font-semibold ">
                  Проверка товара и производителя
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/trust.jpeg"
                  width={1280}
                  height={720}
                  alt="truck"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
