import React, { useState } from "react";
import * as S from "./style";
import Lantern from "../../components/lantern/Lantern";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { Link } from "react-router-dom";

function Lanterns() {
  const [sortBy, setSortBy] = useState("recent");

  const selectorClick = () => {
    sortBy == "recent" ? setSortBy("pop") : setSortBy("recent");
  };

  // get 해올거
  const data = [
    {
      id: 3,
      nickname: "일이삼사오육칠팔",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 5,
      twinkle: false
    },
    {
      id: 2,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 1,
      nickname: "멀티_서현",
      content: "개발 빨리 끝났으면 좋겠습니다",
      likes: 23,
      lanternColor: 2,
      twinkle: true
    }
  ];

  return (
    <S.LanternsWrapper>
      <S.Header>
        <Link to="/">
          <BackBtn />
        </Link>

        <S.Search>
          <S.Input placeholder="닉네임을 입력해주세요" />
          <img src="/icon_search.svg" style={{ width: "16px" }} />
        </S.Search>
      </S.Header>

      <S.Selector onClick={selectorClick}>
        <S.SelectorMenu $isActive={sortBy == "recent"}>최신순</S.SelectorMenu>
        <S.SelectorMenu>|</S.SelectorMenu>
        <S.SelectorMenu $isActive={sortBy == "pop"}>응원순</S.SelectorMenu>
      </S.Selector>

      <S.LanternsList>
        {data.map(item => (
          <S.LanternBox key={item.id}>
            <Link to="/irumiView">
              <Lantern item={item} size={170} />
            </Link>
          </S.LanternBox>
        ))}
      </S.LanternsList>
    </S.LanternsWrapper>
  );
}

export default Lanterns;