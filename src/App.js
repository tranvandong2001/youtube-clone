import "./App.css";
import "./responsive.css";
import Home from "./home/Home";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";
import VideoThumb from "./component/VideoThumb/VideoThumb";
import Watch from "./component/Watch/Watch";
import Channel from "./component/Channel/Channel";
import Header from "./component/Header/Header";
import Signin from "./component/Signin/Signin";
import Signinv2 from "./component/Signinv2/Signinv2";
import Signin1 from "./component/Signin/Signin1";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/watch">
                    <Header />
                    <div className="container">
                        {" "}
                        <Watch />
                        <VideoThumb />
                    </div>
                </Route>
                <Route path="/channel">
                    <Header />
                    <div className="container">
                        <Sidebar />
                        <Channel />
                    </div>
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/signinv1">
                    <Signin1 />
                </Route>
                <Route path="/signinv2">
                    <Signinv2 />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
