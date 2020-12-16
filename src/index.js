import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import Amplify from "aws-amplify";

Amplify.configure({
  aws_project_region: "us-east-1",
  aws_cloud_logic_custom: [
    {
      name: "User",
      endpoint: "https://jcp3439ii7.execute-api.us-east-1.amazonaws.com/dev",
      region: "us-east-1",
    },
    {
      name: "Entreprise",
      endpoint: "https://oov1fvnddk.execute-api.us-east-1.amazonaws.com/dev",
      region: "us-east-1",
    },
  ],
  aws_cognito_identity_pool_id:
    "us-east-1:1d81bbdc-789c-44b5-962e-52894c8691ad",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_7TrgqCpCp",
  aws_user_pools_web_client_id: "7dof3cmo3tohc1pff1amnc5bjp",
  oauth: {},
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
