import React from "react";
import Router from "next/router";
import Header from "@/components/Header";
import BottomFixedButton from "@/components/BottomFixedButton";
import styled from "styled-components";
import { Title } from "@/pages/fortune/hand-line";

const Index = () => {
  return (
    <div>
      <Header isBack={true} title={"오늘의 운세"} />

      <Content>
        <Title>
          <span>
            오늘의 운세를 확인하고
            <br />
            행운의 기운을 활용하세요!
          </span>
          <img src="/fortune-title.png" alt="" />
        </Title>
      </Content>

      <BottomFixedButton
        title={"확인"}
        disabled={false}
        onClick={() => Router.push("/fortune")}
      />
    </div>
  );
};

const Content = styled.div`
  padding: 80px 20px 80px;
`;

export default Index;

// todo:  staticprops로 idx에 있는값 json에서 불러와서 가져오기
