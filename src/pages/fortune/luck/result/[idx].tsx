import React, { useState, useEffect } from "react";
import { GetStaticPaths } from "next";
import Router, { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Header from "@/components/Header";
import BottomFixedButton from "@/components/BottomFixedButton";
import Accordion from "@/components/Accordion";
import { Title } from "@/pages/fortune/hand-line";
import luck from "../luck.json";
import { data } from "@/pages/fortune/luck";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [myLuckData, setMyLuckData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!router.query.date) return;

    const dateTimeIndex = data.time.findIndex(
      time => time.value === router.query.time
    );
    const luckData = `${router.query.date} / ${router.query.sun === "lunar" ? "음력" : "양력"
      } / ${data.time[dateTimeIndex].title} / ${router.query.gender === "male" ? "남성" : "여성"
      }`;
    setMyLuckData(luckData);
  }, [router.query]);

  return (
    <>
      {isLoading ? (
        <LoadingWarpper>
          <div className="wrap">
            <img src="/fortune-loading.png" width="190px" height="147px" />
            <p>
              대길이가 오늘의 행운을
              <br />
              가져오고 있어요!
            </p>
          </div>
        </LoadingWarpper>
      ) : (
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

            <Accordion
              title="내 사주 정보"
              Content={<span>{myLuckData}</span>}
              isCanOpen={false}
              isOpenDefault={true}
              onClick={Router.back}
            />

            <TimeSet>
              {new Date().getMonth() + 1}월 {new Date().getDate()}일 운세
            </TimeSet>

            <Mgt18>
              <Accordion
                title="오늘의 미니운세"
                Content={<span>{luck.mini_luck}</span>}
                isCanOpen={true}
                isOpenDefault={true}
              />
            </Mgt18>

            <Mgt18>
              <Accordion
                title="오늘의 총운"
                Content={<span>{luck.total_luck}</span>}
                isCanOpen={true}
                isOpenDefault={false}
              />
            </Mgt18>

            <Mgt18>
              <Accordion
                title="오늘의 성공/재물운"
                Content={<span>{luck.money_luck}</span>}
                isCanOpen={true}
                isOpenDefault={false}
              />
            </Mgt18>

            <Mgt18>
              <Accordion
                title="오늘의 행운예감 힌트"
                Content={
                  <LuckList>
                    <span>{luck.hint}</span>
                    <ul>
                      <li>행운의 색상: {luck.color}</li>
                      <li>행운의 색상: {luck.number}</li>
                      <li>행운의 색상: {luck.direction}</li>
                      <li>행운의 색상: {luck.name}</li>
                    </ul>
                  </LuckList>
                }
                isCanOpen={true}
                isOpenDefault={false}
              />
            </Mgt18>
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
  padding: 80px 20px 180px;
`;

const LoadingWarpper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    position: relative;
    top: -20px
  }
  img {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @keyframes spin {
      0% { transform: translate(0, 0px); }
      50% { transform: translate(0, 20px); }
      100% { transform: translate(0, 0px); }
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
  }
`;

const TimeSet = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -1px;
  color: #ff5000;
  margin: 25px 0 16px;
`;

const Mgt18 = styled.div`
  margin-top: 18px;
`;

const LuckList = styled.div`
  ul {
    margin: 20px 0 20px 10px;
    list-style: disc;
  }
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
