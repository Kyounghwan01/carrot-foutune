import styled from "styled-components";

const Index = ({
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

export default Index;
