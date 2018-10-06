import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import ArticleCard from "./ArticleCard";
import ArticleView from "./ArticleView";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px 15px;

  article {
    margin-bottom: 15px;
  }
`;

class ArticleList extends React.Component {
  state = {
    selectedArticle: false,
  };
  setSelected = article => () => this.setState({ selectedArticle: article });
  render() {
    const { articles } = this.props;
    // eslint-disable-next-line
    const articlesCards = R.reverse(
      Object.keys(articles).map(key => (
        <ArticleCard onClick={this.setSelected(articles[key])} key={key} article={articles[key]} />
      )),
    );
    const { selectedArticle } = this.state;

    return (
      <Wrapper>
        {articlesCards}
        {this.state.selectedArticle && (
          <ArticleView article={selectedArticle} closeView={this.setSelected(null)} />
        )}
      </Wrapper>
    );
  }
}
export default ArticleList;
