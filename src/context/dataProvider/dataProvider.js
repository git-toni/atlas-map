import React from "react";

import { firebaseApp } from "../../environments";
import { ArticleService } from "../../services";

const initialState = {
  servicesActives: {
    metro: false,
    fgc: false,
    rodalies: false,
    bus: false,
    bicing: false,
    tram: false,
    maps: false,
    events: false,
  },
  articles: {},
  events: {},
};

const initialStateFunctions = {
  toggleServicesActives: () => {},
};

const initialContext = {
  ...initialState,
  ...initialStateFunctions,
};

const DataState = React.createContext(initialContext);

export const withData = Component => props => (
  <DataState.Consumer>{state => <Component {...props} data={state} />}</DataState.Consumer>
);

export class DataStateProvider extends React.Component {
  state = initialState;
  articleService = new ArticleService();

  componentDidMount() {
    this.initArticles();
  }

  initArticles = () => {
    this.articleService.getArticles(article => {
      this.setState(prevState => ({
        articles: {
          ...prevState.articles,
          ...article,
        },
      }));
    });
  }

  toggleServicesActives = (service) => {
    this.setState(prevState => ({
      servicesActives: {
        ...prevState.servicesActives,
        [service]: !prevState.servicesActives[service],
      },
    }));
  }

  render() {
    return (
      <DataState.Provider
        value={{
          ...this.state,
          toggleServicesActives: this.toggleServicesActives,
        }}
      >
        {this.props.children}
      </DataState.Provider>
    );
  }
}
