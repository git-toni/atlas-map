import React from "react";

import { withData } from "./../../context";
import { ArticleList } from "./components";

const DiscoverScene = ({ data }) => (
  <div>
    <h1>Hello Discover</h1>
    <ArticleList articles={data.articles}/>
  </div>
);

export default withData(DiscoverScene);