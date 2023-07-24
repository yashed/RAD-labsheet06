import React from "react";

function CardList() {
  let data = [
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
  ];

  return (
    <div>
      {data.map((card) => {
        return (
          <div>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CardList;
