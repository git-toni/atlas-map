import React from "react";
import styled from "styled-components";

import ArticleCard from "./ArticleCard";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px 15px;

  article {
    margin-bottom: 20px;
  }
`;

const ArticleList = ({ articles }) => {
  const articlesCards = Object.keys(articles).map(key => (
    <ArticleCard key={key} article={articles[key]} />
  ));

  return <Wrapper>{articlesCards}</Wrapper>;
};
export default ArticleList;
