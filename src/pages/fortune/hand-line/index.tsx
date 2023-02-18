import { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import BottomFixedButton from "@/components/BottomFixedButton";

const Radio = ({
  title,
  isChecked,
  onClick
}: {
  title: string;
  isChecked: boolean;
  onClick: () => void;
}) => {
  return (
    <RadioBlock onClick={onClick}>
      <img src={`/radio-${isChecked ? "on" : "off"}.png`} />
      <span>{title}</span>
    </RadioBlock>
  );
};

const Index = () => {
  const [type, setType] = useState("");
  return (
    <div>
      <Header isBack={true} title={"손금/관상"} />
      <Content>
        <Title>
          <span>
            내 사진에 대해
            <br />
            손금/관상을 봐드릴게요.
          </span>
          <img src="/hand-main.png" />
        </Title>

        <div className="fortune-type">
          <Radio
            title="손금"
            isChecked={type === "hand"}
            onClick={() => setType("hand")}
          />
          <Radio
            title="관상"
            isChecked={type === "face"}
            onClick={() => setType("face")}
          />
        </div>

        <div className="desc">
          <img src="/hand-line-text.png" />
        </div>
      </Content>

      <BottomFixedButton
        title="촬영하기"
        disabled={!type}
        onClick={() => null}
      />
    </div>
  );
};

export default Index;

const Content = styled.div`
  padding: 80px 20px 40px;
  .desc {
    padding: 82px 30px;
    img {
      width: 100%;
    }
  }
  .fortune-type {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
    height: 80px;
  }
  span {
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    letter-spacing: -0.05em;
    color: #000000;
  }
`;

const RadioBlock = styled.div`
  padding: 16px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -1px;
    color: #000000;
  }
`;
