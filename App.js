import React from "react";
import { AppNavigator } from "./src/routes/AppNavigator";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(config);

function App() {
  return <AppNavigator />;
}

export default withAuthenticator(App);
