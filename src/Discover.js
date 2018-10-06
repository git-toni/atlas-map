import React from "react";
import styled from "styled-components";

import { withData } from "./context";
import SimpleSlider from "./components/SimpleSlider";
import ArticleList from "./components/ArticleList";

const Wrapper = styled.div`
  background-color: #f0f0f0;
`;

const DiscoverScene = ({ data }) => (
  <Wrapper>
    <SimpleSlider />
    <ArticleList articles={data.articles}/>
  </Wrapper>
);

export default withData(DiscoverScene);