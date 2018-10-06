import React from "react";

import { firebaseApp } from "../../environments";
import {
  ArticleService,
  EventService,
  DataService,
  AlertService,
  AlertConstrunctionService,
} from "../../services";

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
  alert: false,
  alertConstruction: false,
  articles: {},
  events: {},
  data: {},
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
  eventService = new EventService();
  dataService = new DataService();
  alertService = new AlertService();
  alertConstrunctionService = new AlertConstrunctionService();

  componentDidMount() {
    this.initArticles();
    this.initEvents();
    this.initData();
    this.initAlert();
    this.initAlertConstruction();
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
  };

  initData = () => {
    this.dataService.getData(data => {
      this.setState(prevState => ({ data: { ...prevState.data, ...data } }));
    });
  };

  initEvents = () => {
    this.eventService.getEvents(event => {
      this.setState(prevState => ({ events: { ...prevState.events, ...event } }));
    });
  };

  initAlert = () => {
    this.alertService.getData(alert => {
      this.setState(prevState => ({ alert: { ...prevState.alert, ...alert } }));
    });
  };
  initAlertConstruction = () => {
    this.alertConstrunctionService.getData(alertConstruction => {
      this.setState(prevState => ({
        alertConstruction: { ...prevState.alertConstruction, ...alertConstruction },
      }));
    });
  };

  toggleServicesActives = service => {
    this.setState(prevState => ({
      servicesActives: {
        ...prevState.servicesActives,
        [service]: !prevState.servicesActives[service],
      },
    }));
  };

  render() {
    return (
      <DataState.Provider
        value={{ ...this.state, toggleServicesActives: this.toggleServicesActives }}
      >
        {this.props.children}
      </DataState.Provider>
    );
  }
}
