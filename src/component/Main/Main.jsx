import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Video from "../Video/Video";
import "./main.css";

const Main = () => {
    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="main__top">
                    <ArrowBackIosOutlined
                        className="main__top-icon left"
                        style={{ display: "none" }}
                    />
                    <p className="main__top-text active">Tất cả</p>
                    <p className="main__top-text">Danh sách kết hợp</p>
                    <p className="main__top-text">Âm nhạc</p>
                    <p className="main__top-text">Toán học</p>
                    <p className="main__top-text">Hài kịch tình huống</p>
                    <p className="main__top-text">Hoạt hình</p>
                    <p className="main__top-text">Chương trình nấu ăn</p>
                    <p className="main__top-text">Trực tiếp</p>
                    <p className="main__top-text">Bóng đá</p>
                    <p className="main__top-text">Đọc rap</p>
                    <p className="main__top-text">Trò chơi</p>
                    <p className="main__top-text">Bóng đá</p>
                    <p className="main__top-text">Nấu ăn</p>

                    <ArrowForwardIosOutlined className="main__top-icon right" />
                </div>
                <div className="main__bottom">
                    <div className="main__bottom-wrapper">
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
