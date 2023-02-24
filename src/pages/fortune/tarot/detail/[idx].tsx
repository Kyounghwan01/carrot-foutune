import React from "react";
import Router from "next/router";
import { GetStaticPaths } from "next";
import styled from "styled-components";
import tar from "../tarot.json";
import Header from "@/components/Header";
import { Title } from "@/pages/fortune/hand-line";
import { Itarot } from "@/pages/fortune/tarot";
import BottomFixedButton from "@/components/BottomFixedButton";

const paths = Array(22)
  .fill("")
  .map((_, i) => {
    return { params: { idx: `${i + 1}` } };
  });

const Index = ({ tarot }: { tarot: Itarot }) => {
  return (
    <>
      <Header isBack={true} title={"오늘의 타로"} isShare={true} />
      <Content>
        <Title>
          <span>
            오늘은
            <br />
            <span style={{ color: "#FF5000" }}>{tarot.name}</span> 카드를
            뽑으셨네요!
          </span>
          <img src="/tarot-main.png" />
        </Title>
        <CardImg>
          <img src={`/tarot/${tarot.id}.png`} />
        </CardImg>

        <CardStoryTailling>
          <p>{tarot.name}카드 스토리텔링</p>
          <span>{tarot.story}</span>
        </CardStoryTailling>

        <CardStoryTailling>
          <p>정의</p>
          <span>{tarot.define}</span>
        </CardStoryTailling>

        <CardStoryTailling>
          <p>키워드</p>
          <span>{tarot.keyword}</span>
        </CardStoryTailling>

        <CardStoryTailling>
          <p>오늘의 타로</p>
          <span>{tarot.result}</span>
        </CardStoryTailling>
      </Content>

      <BottomFixedButton
        title={"확인"}
        disabled={false}
        onClick={() => Router.push(`/fortune`)}
      />
    </>
  );
};

const Content = styled.div`
  padding: 80px 20px 100px;
`;

const CardImg = styled.div`
  margin-top: 30px;
  text-align: center;
  img {
    width: 155px;
    height: 264px;
  }
`;

const CardStoryTailling = styled.div`
  padding-top: 30px;

  p {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }: { params: Itarot }) {
  return {
    props: { tarot: tar.filter(el => el.idx === Number(params.idx))[0] }
  };
}

export default Index;
