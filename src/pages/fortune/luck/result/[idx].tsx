import React, { useState, useEffect } from "react";
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

const Index = ({ luck }: { luck: ILuck }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingWarpper>
          <div className="wrap">
            <img src="/fortune-loading.png" width="190px" height="147px" />
            <p>
              대길이가 오늘의 행운을<br />
              가져오고 있어요!
            </p>
          </div>
        </LoadingWarpper>
      ) : (
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
      )}
    </>
  );
};

const Content = styled.div`
  padding: 80px 20px 80px;
`;


const LoadingWarpper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    position: relative;
  }
  img {
    position: relative;
    left: 100px;
    transform: translateX(-200px);
    transition: all 1s ease-in;
  }
  p {
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
  }
`

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