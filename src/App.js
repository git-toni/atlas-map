import * as React from "react";
import { Button } from "carbon-components-react";

import { Root } from "./scenes";
import { DataStateProvider } from "./context";

const App = () => (
  <DataStateProvider>
    <Root />
  </DataStateProvider>
);

export default App;
