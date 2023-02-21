import React from "react";
import { GetStaticPaths } from "next";
import Router from "next/router";
import Header from "@/components/Header";
import BottomFixedButton from "@/components/BottomFixedButton";
import styled from "styled-components";
import { Title } from "@/pages/fortune/hand-line";
import luck from '../luck.json';

interface ILuck {
  idx: number;
  mini_luck: string;
  total_luck: string;
  money_luck: string;
  hint: string;
  color: string;
  number: string;
  direction: string;
  name: string;
}

const paths = Array(5)
  .fill("")
  .map((_, i) => {
    return { params: { idx: String(i + 1) } };
  });

const Index = ({luck}: {luck: ILuck}) => {
  return (
    <div>
      <Header isBack={true} title={"오늘의 운세"} />
      {JSON.stringify(luck)}
      {/* todo: loading페이지, 운세 result 페이지 css */}

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


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }: { params: ILuck }) {
  return {
    props: { luck: luck.filter(el => el.idx === Number(params.idx))[0] }
  };
}


export default Index;

// todo:  staticprops로 idx에 있는값 json에서 불러와서 가져오기
