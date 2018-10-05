import React from "react";

import { firebaseApp } from "../../environments";
import { ArticleService } from "../../services";

const initialState = {
  articles: {},
};

const DataState = React.createContext(initialState);

export const withData = Component => props => (
  <DataState.Consumer>{state => <Component {...props} data={state} />}</DataState.Consumer>
);

export class DataStateProvider extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.articleService = new ArticleService();
  }

  componentDidMount() {
    this.articleService.getArticles(article => {
      this.setState(prevState => ({
        articles: {
          ...prevState.articles,
          ...article,
        },
      }));
    });
  }

  render() {
    return (
      <DataState.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </DataState.Provider>
    );
  }
}
