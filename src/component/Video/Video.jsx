import { Avatar } from "@material-ui/core";
import { DoneOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./video.css";

const Video = () => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/watch");
    };
    return (
        <div className="video">
            <div className="video__wrapper ">
                <img
                    src="https://i.ytimg.com/vi/vCIc1g_4JWM/maxresdefault.jpg"
                    alt=""
                    className="video__img"
                    onClick={handleRedirect}
                />
                <div className="video__block">
                    <Avatar
                        src="https://cuoixastress.com/wp-content/uploads/2021/06/anh-hot-girl-lanh-lung-42.gif"
                        onClick={handleRedirect}
                    />
                    <div className="video__container">
                        <h3 className="video__heading" onClick={handleRedirect}>
                            Phía sau một cô gái - Soobin Hoàng Sơn (Offfical)
                        </h3>
                        <div className="video__channel">
                            <span className="video__channel-name">
                                Soobin Hoàng Sơn
                            </span>
                            <DoneOutlined className="video__icons" />
                        </div>
                        <div className="video__channel">
                            <span className="video__channel-text">
                                1Tr lượt xem •
                            </span>
                            <span className="video__channel-text">
                                1 tháng trước
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
