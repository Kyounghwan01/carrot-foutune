import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import { Title } from "@/pages/fortune/hand-line";
import BottomFixedButton from "@/components/BottomFixedButton";
import SelectBox from "@/components/SelectBox";
import Radio from "@/components/Radio";

const data = {
  time: [
    " 모름",
    " 23:30-01:29 자시(子時)",
    " 01:30-03:29 축시(丑時)",
    " 03:30-05:29 인시(寅時)",
    " 05:30-07:29 묘시(卯時)",
    " 07:30-09:29 진시(辰時)",
    " 09:30-11:29 사시(巳時)",
    " 11:30-13:29 오시(午時)",
    " 13:30-15:29 미시(未時)",
    " 15:30-17:29 신시(申時)",
    " 17:30-19:29 유시(酉時)",
    " 19:30-21:29 술시(戌時)",
    " 21:30-23:29 해시(亥時)"
  ]
};

const Index = () => {
  const [yearList, setYearList] = useState<number[]>([]);
  const [genderType, setGenderType] = useState("");
  useEffect(() => {
    const yearList = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      yearList.push(i);
    }
    setYearList(yearList);
  }, []);
  return (
    <div>
      <Header isBack={true} title={"오늘의 운세"} />
      <Content>
        <Title>
          <span>
            생일 정보를 입력해 주시면
            <br />
            오늘의 운세를 가져다 드려요!
          </span>
          <img src="/fortune-title.png" alt="" />
        </Title>

        <div>
          <SelectLabel>생년월일</SelectLabel>
          <YearWrapper>
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </YearWrapper>
        </div>

        <div>
          <SelectLabel>양력/음력</SelectLabel>
          <SelectBox />
        </div>

        <div>
          <SelectLabel>태어난 시간</SelectLabel>
          <SelectBox />
        </div>

        <div>
          <SelectLabel>성별</SelectLabel>
          <GenderWarpper>
            <Radio
              title="여성"
              isChecked={genderType === "female"}
              onClick={() => setGenderType("female")}
            />
            <Radio
              title="남성"
              isChecked={genderType === "male"}
              onClick={() => setGenderType("male")}
            />
          </GenderWarpper>
        </div>
      </Content>

      {/* <BottomFixedButton
        title={"동의하고 운세 결과 보기"}
        disabled={!selectedCard}
        onClick={() => Router.push(`/fortune/luck/result/1~5까지 아무거나`)}
      /> */}
    </div>
  );
};

const Content = styled.div`
  padding: 80px 20px 80px;
`;

const YearWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 9px;
`;

const GenderWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const SelectLabel = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1px;
  color: #808080;
  margin: 20px 0 5px;
`;

export default Index;
