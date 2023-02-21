import styled from "styled-components";

interface ISelectBox {
  optionList: {
    title: string;
    value: string;
    disabled?: boolean;
  }[];
  handleChangeSelect: (event: { currentTarget: { value: string } }) => void;
  value: string;
}

const Index = ({ optionList, handleChangeSelect, value }: ISelectBox) => {
  return (
    <SelectBoxWrapper>
      <div className="selectBox">
        <select className="select" onChange={handleChangeSelect} value={value}>
          {
            optionList.map(option => (
              <option key={option.value} value={option.value} disabled={option.disabled} >{option.title}</option>
            ))
          }
        </select>
        <span className="icoArrow">
          <img src="/arrow-bottom.png" alt="" />
        </span>
      </div>
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.div`
  .selectBox {
    position: relative;
    height: 54px;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
  }
  .selectBox .select {
    width: inherit;
    height: inherit;
    background: transparent;
    border: 0 none;
    outline: 0 none;
    position: relative;
    z-index: 3;
    padding: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 16px;
  }
  .selectBox .select option {
    color: #fff;
    padding: 3px 0;
    font-size: 16px;
  }
  .selectBox .icoArrow {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 35px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .selectBox .icoArrow img {
    width: 10px;
  }
`;

export default Index;
