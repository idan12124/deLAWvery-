import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import HomeScreen from "./HomeScreen";
import store from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <HomeScreen />
    </ReduxProvider>
  );
}

export default App;
