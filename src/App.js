import React from "React";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import AntRouter from "./AntRouter";
export default class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAtJEN1PifPpULmsmg2dnsf36a4dKs408M",
      authDomain: "employeemanager-10907.firebaseapp.com",
      databaseURL: "https://employeemanager-10907.firebaseio.com",
      projectId: "employeemanager-10907",
      storageBucket: "",
      messagingSenderId: "283926501281",
      appId: "1:283926501281:web:242d68236d8ad60d"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <AntRouter />
        {/* <AntHeader text={"Login"} /> */}
        {/* <AntBody> */}
        {/* <LoginForm /> */}
        {/* </AntBody> */}
      </Provider>
    );
  }
}
