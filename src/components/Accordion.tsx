import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IAccordion {
  title: string;
  Content: any;
  isOpenDefault?: boolean;
  isCanOpen?: boolean;
  onClick?: () => void;
}

const Accordion = ({
  title,
  Content,
  isCanOpen,
  isOpenDefault,
  onClick
}: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpenDefault || false);
  }, []);

  return (
    <AccordionWarpper
      onClick={
        isCanOpen
          ? () => setIsOpen(prev => !prev)
          : onClick
          ? onClick
          : () => null
      }
    >
      <div className="title-wrapper">
        <div className="title">{title}</div>
        {isCanOpen ? (
          <img src={`/arrow-${isOpen ? "up" : "down"}.png`} width={14} />
        ) : (
          <div className="retry-input">
            정보 다시 입력 <img src="/arrow-right.png" width={4} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="content-wrapper">
          <div className="divider" />
          <div className="content">{Content}</div>
        </div>
      )}
    </AccordionWarpper>
  );
};

const AccordionWarpper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 20px;
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #000000;
  }
  .retry-input {
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    letter-spacing: -1px;
    color: #666666;
    img {
      margin-left: 5px;
    }
  }
  .content-wrapper {
    border-bottom: 1px solid #e6e6e6;
    .divider {
      border: 1px solid #000000;
      margin-top: 20px;
    }
    .content {
      padding: 12px 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -1px;
      color: #000000;
    }
  }
`;

export default Accordion;
