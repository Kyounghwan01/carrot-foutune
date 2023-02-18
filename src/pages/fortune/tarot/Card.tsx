import styled from "styled-components";
import React from "react";

const Index = ({
  card,
  setSelectedCard,
  selectedCard,
  height
}: {
  card: any;
  setSelectedCard: any;
  selectedCard: any;
  height?: string;
}) => {
  const onClick = () => {
    if (selectedCard) return;
    setSelectedCard(card);
  };

  return (
    <TarotCard
      isOpen={selectedCard ? selectedCard?.idx === card.idx : false}
      onClick={onClick}
      height={height}
    >
      <div className="front">
        <img src={"/tarot/back.png"} alt="" />
      </div>
      <div className="back">
        <img src={`/tarot/${selectedCard?.id || "back"}.png`} alt="" />
      </div>
    </TarotCard>
  );
};

export default Index;

const TarotCard = styled.div<{ isOpen: boolean; height?: string | null }>`
  width: inherit;
  height: ${props => (props.height ? `${props.height}` : "100px")};
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform: ${props => (props.isOpen ? "rotateY(180deg)" : "rotateY(0deg)")};

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .front img,
  .back img {
    width: 100%;
    height: 100%;
  }

  .back {
    transform: rotateY(180deg);
  }
`;
