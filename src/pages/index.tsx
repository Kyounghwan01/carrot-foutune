import Router from "next/router";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "fixed", top: 0, zIndex: 999 }}>
        <img width={"100%"} src="/main-header.png" alt="header" />
      </div>

      <div
        style={{ position: "fixed", top: "60px", right: "10px", zIndex: 100 }}
        onClick={() => Router.push("/fortune")}
      >
        <img width={60} height={92} src="/main-floating.png" alt="" />
      </div>

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
