import Router from "next/router";
import styled from 'styled-components';

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "fixed", top: 0, zIndex: 999 }}>
        <img width={"100%"} src="/main-header.png" alt="header" />
      </div>

      <LogoImages onClick={() => Router.push("/fortune")}>
        <img className="blink" width={70} height={100} src="/main-floating.png" alt="" />
      </LogoImages>

      <div
        style={{
          paddingTop: "65px",
          position: "relative",
          left: "-1.8px"
        }}
      >
        <img width={"100%"} src="/main-1.png" alt="" />
      </div>

      <div style={{ position: "relative", left: "-1.8px" }}>
        <img width={"100%"} src="/main-2.png" alt="" />
      </div>
      <div style={{ position: "fixed", bottom: "-5px" }}>
        <img width={"100%"} src="/main-footer.png" alt="footer" />
      </div>
    </div>
  );
}

const LogoImages = styled.div`
  position: fixed;
  top: 80px;
  right: 10px;
  z-index: 100;
  @keyframes blink-effect {
  50% {
      opacity: 0;
    }
  }

  .blink {
    animation: blink-effect 1.3s step-end infinite;
  }
`