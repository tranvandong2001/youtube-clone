import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./videoSmall.css";

const VideoSmall = ({ video }) => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/watch");
    };
    return (
        <div
            className={video ? "videoAll" : "videoSmall"}
            onClick={handleRedirect}
            style={{ cursor: "pointer" }}
        >
            <img
                src="https://i.ytimg.com/vi/9pqJT6xO3Ps/maxresdefault.jpg"
                alt=""
                className={video ? "videoAll__img" : "videoSmall__img"}
            />
            <div className={video ? "videoAll__block" : "videoSmall__block"}>
                <h3 className="videoSmall__heading">
                    Em Sẽ Là Cô Dâu - Minh Vương M4U ft Huy Cung (Official MV)
                </h3>
                <span className="videoSmall__name">Minh Vuonng M4U</span>
                <div className="videoSmall__time-block">
                    <span className="videoSmall__time">37Tr lượt xem • </span>
                    <span className="videoSmall__time">3 năm trước </span>
                </div>
            </div>
        </div>
    );
};

export default VideoSmall;
