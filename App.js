import React from "react";
import { AppNavigator } from "./src/routes/AppNavigator";

import { Provider } from 'react-redux'; //Redux stuff
import store from './src/Redux/store';

function App(){
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
          
  );
}


export default App;
