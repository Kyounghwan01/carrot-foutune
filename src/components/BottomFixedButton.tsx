import styled from "styled-components";

const Index = ({
  title,
  disabled,
  onClick
}: {
  title: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <BottomFixedButtonBlock disabled={disabled}>
      <button onClick={disabled ? undefined : onClick}>{title}</button>
    </BottomFixedButtonBlock>
  );
};

export default Index;

const BottomFixedButtonBlock = styled.div<{ disabled: boolean }>`
  width: 100%;
  height: 82px;
  padding: 16px 20px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: white;
  button {
    background: ${props => (props.disabled ? "#CCCCCC" : "#ff5000")};
    border-radius: 60px;
    width: 100%;
    padding: 13px 0;
    color: white;
    height: 50px;
    font-weight: 500;
    font-size: 16px;
  }
`;
