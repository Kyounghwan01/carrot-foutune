import React, { useState, useEffect, useMemo } from "react";
import Router from "next/router";
import styled from "styled-components";
import Header from "@/components/Header";
import { Title } from "@/pages/fortune/hand-line";
import BottomFixedButton from "@/components/BottomFixedButton";
import SelectBox from "@/components/SelectBox";
import Radio from "@/components/Radio";

interface IList {
  title: string;
  value: string;
  disabled?: boolean;
}

export const data = {
  time: [
    { title: "태어난 시간 대", value: "", disabled: true },
    { title: "모름", value: "0" },
    { title: "23:30-01:29 자시(子時)", value: "1" },
    { title: "01:30-03:29 축시(丑時)", value: "2" },
    { title: "03:30-05:29 인시(寅時)", value: "3" },
    { title: "05:30-07:29 묘시(卯時)", value: "4" },
    { title: "07:30-09:29 진시(辰時)", value: "5" },
    { title: "09:30-11:29 사시(巳時)", value: "6" },
    { title: "11:30-13:29 오시(午時)", value: "7" },
    { title: "13:30-15:29 미시(未時)", value: "8" },
    { title: "15:30-17:29 신시(申時)", value: "9" },
    { title: "17:30-19:29 유시(酉時)", value: "10" },
    { title: "19:30-21:29 술시(戌時)", value: "11" },
    { title: "21:30-23:29 해시(亥時)", value: "12" }
  ],
  sunLunar: [
    { title: "양력/음력", value: "", disabled: true },
    { title: "양력", value: "sun" },
    { title: "음력", value: "lunar" }
  ],
  month: [
    { title: "출생월", value: "", disabled: true },
    { title: "1월", value: "1" },
    { title: "2월", value: "2" },
    { title: "3월", value: "3" },
    { title: "4월", value: "4" },
    { title: "5월", value: "5" },
    { title: "6월", value: "6" },
    { title: "7월", value: "7" },
    { title: "8월", value: "8" },
    { title: "9월", value: "9" },
    { title: "10월", value: "10" },
    { title: "11월", value: "11" },
    { title: "12월", value: "12" }
  ]
};

const Index = () => {
  const [yearList, setYearList] = useState<IList[]>([]);
  const [dayList, setDayList] = useState<IList[]>([
    { title: "출생일", value: "", disabled: true }
  ]);
  const [genderType, setGenderType] = useState("");
  const [sunCheck, setSunCheck] = useState("");
  const [yearCheck, setYearCheck] = useState("");
  const [timeCheck, setTimeCheck] = useState("");
  const [monthCheck, setMonthCheck] = useState("");
  const [dayCheck, setDayCheck] = useState("");

  useEffect(() => {
    const yearList: IList[] = [{ title: "출생년", value: "", disabled: true }];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      yearList.push({ title: String(i), value: String(i) });
    }
    setYearList(yearList);
  }, []);

  useEffect(() => {
    if (!monthCheck) return;
    const days: IList[] = [{ title: "출생일", value: "", disabled: true }];
    setDayCheck("");

    let lastDays = 0;
    switch (monthCheck) {
      case "1":
      case "3":
      case "5":
      case "7":
      case "8":
      case "10":
      case "12":
        lastDays = 31;
        break;
      case "2":
        lastDays = 28;
        break;
      case "4":
      case "6":
      case "6":
      case "9":
      case "11":
        lastDays = 30;
        break;
      default:
        lastDays = 31;
        break;
    }

    for (let i = 1; i <= lastDays; i++) {
      days.push({ title: `${i}일`, value: String(i) });
    }

    setDayList(days);
  }, [monthCheck]);

  const btnValidation = useMemo(() => {
    return [
      yearCheck,
      timeCheck,
      monthCheck,
      dayCheck,
      genderType,
      sunCheck
    ].every(data => data);
  }, [yearCheck, timeCheck, monthCheck, dayCheck, genderType, sunCheck]);

  const getResult = () => {
    const sunRatio = sunCheck === "sun" ? 100 : 200;
    const randomMath =
      (Number(yearCheck) +
        Number(monthCheck) +
        Number(dayCheck) +
        Number(timeCheck) +
        Number(genderType === "male" ? 1000 : 100) +
        sunRatio +
        new Date().getDate()) %
      5;

    Router.push({
      pathname: `/fortune/luck/result/${String(randomMath + 1)}`,
      query: {
        date: `${yearCheck}년 ${monthCheck}월 ${dayCheck}일`,
        sun: sunCheck,
        time: timeCheck,
        gender: genderType
      }
    });
  };

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
            <SelectBox
              optionList={yearList}
              value={yearCheck}
              handleChangeSelect={e => setYearCheck(e.currentTarget.value)}
            />
            <SelectBox
              optionList={data.month}
              value={monthCheck}
              handleChangeSelect={e => setMonthCheck(e.currentTarget.value)}
            />
            <SelectBox
              optionList={dayList}
              value={dayCheck}
              handleChangeSelect={e => setDayCheck(e.currentTarget.value)}
            />
          </YearWrapper>
        </div>

        <div>
          <SelectLabel>양력/음력</SelectLabel>
          <SelectBox
            optionList={data.sunLunar}
            value={sunCheck}
            handleChangeSelect={e => setSunCheck(e.currentTarget.value)}
          />
        </div>

        <div>
          <SelectLabel>태어난 시간</SelectLabel>
          <SelectBox
            optionList={data.time}
            value={timeCheck}
            handleChangeSelect={e => setTimeCheck(e.currentTarget.value)}
          />
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

        <div className="footbox">
          <span>[필수] 개인정보 수집/이용 동의</span>
          <img src="/arrow-right.png" width={5} />
        </div>
      </Content>

      <BottomFixedButton
        title={"동의하고 운세 결과 보기"}
        disabled={!btnValidation}
        onClick={getResult}
      />
    </div>
  );
};

const Content = styled.div`
  padding: 80px 20px 160px;
  .footbox {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 40px);
    span {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -1px;
      color: #808080;
    }
    img {
      margin-right: 10px;
    }
  }
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
