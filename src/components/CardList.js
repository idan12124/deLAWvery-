import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import updateList from "../redux/actions/CardList";

function DisplayList({ cardList }) {
  const copmCardList = cardList.map((card) => <Card {...card} />);
  return copmCardList;
}

export default function CardList() {
  const cardList = useSelector((state) => state.cardList);
  console.log(cardList);

  return (
    <div>
      <DisplayList cardList={cardList} />
    </div>
  );
}
