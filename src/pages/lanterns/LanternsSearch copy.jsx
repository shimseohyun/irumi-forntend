import React, { useState } from "react";
import * as S from "./style";
import Lantern from "../../components/lantern/Lantern";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { Link, useLocation } from "react-router-dom";
import LanternsSearchForm from "../../components/lanterns/lanternsSearchForm/LanternsSearchFrom";
import LanternsWriteBtn from "../../components/lanterns/laternsWriteBtn/LanternsWriteBtn";

function LanternsSearch() {
  const [sortBy, setSortBy] = useState("recent");
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();

  const searchTerm = query.get("q");

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
      like_cnt: 23,
      lantern_color: 5,
      light_bool: false
    }
  ];

  return (
    <S.LanternsWrapper>
      <LanternsWriteBtn />
      <S.Header>
        <Link to="/lanterns">
          <BackBtn />
        </Link>

        <LanternsSearchForm />
      </S.Header>
      <S.Selector onClick={selectorClick}>
        <S.SelectorMenu $isActive={sortBy == "recent"}>최신순</S.SelectorMenu>
        <S.SelectorMenu>|</S.SelectorMenu>
        <S.SelectorMenu $isActive={sortBy == "pop"}>응원순</S.SelectorMenu>
      </S.Selector>

      <S.SubTitle>'{searchTerm}'에 대한 검색결과입니다.</S.SubTitle>

      <S.LanternsList>
        {data.map((item, index) => (
          <Link to="/irumiView" key={index}>
            <S.LanternBox className="fadein_slide">
              <Lantern item={item} size={180} />
            </S.LanternBox>
          </Link>
        ))}
      </S.LanternsList>
    </S.LanternsWrapper>
  );
}

export default LanternsSearch;