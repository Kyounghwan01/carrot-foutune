import { useState, useRef } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import BottomFixedButton from "@/components/BottomFixedButton";
import Radio from "@/components/Radio";
import { Router } from "next/router";

const Index = () => {
  const [type, setType] = useState("hand");
  const [imgUrl, setImageUrl] = useState('');
  const galleryRef = useRef<HTMLInputElement>(null);

  const resizeImage = (image: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const max_size = 1600;
    let width = image.width;
    let height = image.height;

    if (width > height) {
      if (width > max_size) {
        height *= max_size / width;
        width = max_size;
      }
    } else {
      if (height > max_size) {
        width *= max_size / height;
        height = max_size;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d')?.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', 0.9);
  };


  const goGallery = () => {
    if (!galleryRef.current) return;
    galleryRef.current.value = '';
    galleryRef.current.click();
  };

  const handleFile = (e: { target: { files: any } }) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const image = new Image();
      if (typeof reader.result === 'string') {
        image.src = reader.result;
      }
      image.onload = () => {
        const dataUrl = resizeImage(image);
        setImageUrl(dataUrl);
      };
    }
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <Header isBack={true} title={!imgUrl ? "손금/관상" : type === 'hand' ? '손금' : '관상'} />
      <Content>
        <Title>
          <span>
            {
              !imgUrl ? (
                <>
                  내 사진에 대해
                  <br />
                  손금/관상을 봐드릴게요.
                </>
              ) : (
                <>
                  {type === 'hand' ? <>당신의 손금을 분석했어요!</> : <><span style={{ color: '#FF5000' }}>봄날의 햇살</span>을 닮은<br />
                    당신의 관상을 분석했어요!</>}
                </>
              )
            }
          </span>
          <img src="/hand-main.png" />
        </Title>
        {imgUrl && (
          <p className="result-sub-desc">분석결과는 대길이의 입장으로, 캐롯손해보험의 입장과는 다를 수 있습니다. 결과를 재미로만 봐주시기 바라며, 오늘도 웃음 가득한 하루 되시기 바랍니다.</p>
        )}

        {
          !imgUrl && (
            <>
              <div className="fortune-type">
                <Radio
                  title="손금"
                  isChecked={type === "hand"}
                  onClick={() => setType("hand")}
                />
                <Radio
                  title="관상"
                  isChecked={type === "face"}
                  onClick={() => setType("face")}
                />
              </div>
              <div className="desc">
                <input type="file" name="file" id="file" accept="image/*" ref={galleryRef} multiple={false} onChange={handleFile} />
                <img src={`/${type === 'face' ? 'face-mock' : 'hand-mock'}.png`} />
                <p>{type === 'face' ? '관상을 보기 위해, 얼굴 정면 사진이 필요해요!' : '손금을 보기 위해,  한 손 바닥 사진이 필요해요!'}</p>
              </div>
            </>
          )
        }
        {
          imgUrl && (
            <>
              <div className="pre-view">
                <img className="pre-view-image" src={imgUrl} />
                <img className="guide" src="/hand-line-text.png" />
              </div>
            </>
          )
        }
      </Content>


      <BottomFixedButton
        title={!imgUrl ? "촬영하기" : '확인'}
        disabled={!type}
        onClick={!imgUrl ? goGallery : () => location.href = '/fortune'}
      />
    </div>
  );
};

export default Index;

const Content = styled.div`
  padding: 80px 20px 40px;
  text-align: center;
  .desc {
    padding: 82px 0px;
    img {
      width: 177px;
      height: 195px;
    }
    p {
      margin-top: 50px;
    }
    input {
      display: none;
    }
  }
  .fortune-type {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .result-sub-desc {
    margin-top: 5px;
    text-align: left;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -1px;
    color: #A2A3A4;
  }
  .pre-view {
    padding-top: 20px;
    .pre-view-image {
      width: 100px;
      height: 130px;
      border: 1px solid #FF5000;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .guide {
      width: 246px;
      height: 216px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
    height: 80px;
  }
  span {
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    letter-spacing: -0.05em;
    color: #000000;
    text-align: left;
  }
`;
