import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import ArticleCard from "./ArticleCard";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px 15px;

  article {
    margin-bottom: 15px;
  }
`;

/* eslint-disable */
const ArticleList = ({ articles }) => {
  const articlesCards = Object.keys(articles).map(key => (
    <ArticleCard key={key} article={articles[key]} />
  ));

  return <Wrapper>{R.reverse(articlesCards)}</Wrapper>;
};
export default ArticleList;
