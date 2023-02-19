import React, { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import Header from "@/components/Header";
import { Title } from "../hand-line";
import Card from "./Card";
import tar from "./tarot.json";
import BottomFixedButton from "@/components/BottomFixedButton";

export interface Itarot {
  idx: number;
  id: string;
  name: string;
  result: string;
  story: string;
  define: string;
  keyword: string;
}

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    idx: number;
  } | null>(null);

  const [tarotCardList, setTarotCardList] = useState<Itarot[]>([]);

  const shuffleCard = () => {
    const shuffedCard = tar.sort(() => Math.random() - 0.5);
    setTarotCardList(shuffedCard);
  };

  useEffect(() => {
    shuffleCard();
  }, []);
  return (
    <div>
      <Header isBack={true} title={"오늘의 타로"} />
      <Content>
        <Title>
          <span>
            신중하게 생각한 다음 <br />
            1장의 카드를 선택하세요!
          </span>
          <img src="/tarot-main.png" alt="" />
        </Title>

        <TarotCardWapper>
          {tarotCardList.length > 1 && (
            <>
              {tarotCardList.map(card => (
                <Card
                  key={card.id}
                  card={card}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                />
              ))}
            </>
          )}
        </TarotCardWapper>
      </Content>
      <div style={{ display: "none" }}>
        {tarotCardList.map(card => (
          <img key={card.id} src={`/tarot/${card.id}.png`} alt="" />
        ))}
      </div>
      <BottomFixedButton
        title={"오늘의 타로 결과 보기"}
        disabled={!selectedCard}
        onClick={
          !selectedCard
            ? shuffleCard
            : () => Router.push(`/fortune/tarot/detail/${selectedCard.idx}`)
        }
      />
    </div>
  );
};

const Content = styled.div`
  padding: 80px 20px 80px;
`;

const TarotCardWapper = styled.div`
  padding: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  display: grid;
  align-items: center;
  gap: 10px;
`;

export default Index;
