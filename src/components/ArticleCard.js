import React from "react";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
  cursor: pointer;
  background: white;
  border-radius: 4px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px 4px 0 0;
  }

  .content {

    h1 {
      padding: 10px 20px 0;
      margin-bottom: 6px;
      line-height: 1.5;
      font-size: 20px;
      font-weight: bold;
      color: #000;
    }

    p {
      color: #787878;
      line-height: 1.5;
      padding: 0 20px;
      margin-bottom: 26px;
      font-size: 16px;
    }
  }
`;

const ArticleCard = ({ article }) => (
  <Card>
    <div className="content">
      <img src={article.imageUrl} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  </Card>
);

export default ArticleCard;
