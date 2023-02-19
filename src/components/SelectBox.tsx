import styled from "styled-components";
const Index = () => {
  return (
    <SelectBoxWrapper>
      <div className="selectBox">
        <select name="fruits" className="select">
          <option disabled selected>
            fruits 🍊
          </option>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="grape">grape</option>
          <option value="melon">melon</option>
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
