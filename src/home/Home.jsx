import Header from "../component/Header/Header";
import Main from "../component/Main/Main";
import Sidebar from "../component/Sidebar/Sidebar";
import Watch from "../component/Watch/Watch";
import VideoThumb from "../component/VideoThumb/VideoThumb";
import Channel from "../component/Channel/Channel";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="container">
                <Sidebar />
                <Main />
            </div>
            {/* <div className="container">
                <Route path="/watch">
                    <Watch />
                    <VideoThumb />
                </Route>
            </div> */}
            {/* <div className="container">
                <Sidebar />
                <Channel />
            </div> */}
        </div>
    );
};

export default Home;
