import Router from "next/router";
import styled from "styled-components";

const Index = ({ isBack, title }: { isBack?: boolean; title: string }) => {
  return (
    <HeaderBlock>
      {isBack ? (
        <div className="arrow-left" onClick={Router.back}>
          <img src="/arrow-left.png" alt="" />
        </div>
      ) : (
        <div style={{ width: "10px" }}></div>
      )}
      <div className="title">{title}</div>
      <div style={{ width: "10px" }}></div>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: white;
  .arrow-left {
    display: inline-block;
    margin: 15px;
    img {
      width: 25px;
    }
  }
  .title {
    font-weight: bold;
    text-align: center;
  }
`;

export default Index;
