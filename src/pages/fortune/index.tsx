import Router from "next/router";
import styled from "styled-components";
import Header from "../../components/Header";
const Index = () => {
  return (
    <div>
      <Header isBack={true} title={"운세/타로"} />

      <Content>
        <div className="content-header">
          <img src="/fortune-main.png" />
          <p>
            대길이와 함께
            <br />
            매일 매일 행운을 확인해요.
            <br />
            웃으면 복이 와요~
          </p>
        </div>
        <div className="content-desc">🍀 대길(大吉)이 찾아올 거예요!</div>

        <div className="content-list">
          <img
            src="/today-fortune.png"
            onClick={() => Router.push("/fortune/luck")}
          />
          <img src="/tarot.png" onClick={() => Router.push("/fortune/tarot")} />
          <img
            src="/hand-line.png"
            onClick={() => Router.push("/fortune/hand-line")}
          />
          <img src="/year-fortune.png" />
        </div>

        <div className="content-footer">
          이 서비스는 캐롯손해보험과 제휴를 맺은 (주)고든에서 제공해 드리고
          있습니다. 콘텐츠에 대한 저작권 및 법적 책임은 (주)고든에 있으며
          캐롯손해보험의 입장과 다를 수 있습니다.
        </div>
      </Content>
    </div>
  );
};

const Content = styled.div`
  padding: 80px 20px 40px;
  .content-header {
    width: 100%;
    height: 133px;
    background: rgba(219, 255, 176, 0.29);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 95px;
      height: 97px;
    }
  }
  .content-desc {
    padding: 35px 0 23px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
  }
  .content-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    img {
      width: 100%;
    }
  }
  .content-footer {
    padding: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -1px;
    color: #78787d;
  }
`;

export default Index;
