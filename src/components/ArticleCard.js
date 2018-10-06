import React from "react";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 4px 10px 0px rgba(0,0,0,0.19);

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }

  .content {
    padding: 20px;

    h1 {
      margin: 10px 0px;
    }

    p {
      color: #787878;
    }
  }
`;

const ArticleCard = ({ article }) => (
  <Card>
    <img src={article.imageUrl} alt={article.title} />
    <div className="content">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  </Card>
);

export default ArticleCard;
