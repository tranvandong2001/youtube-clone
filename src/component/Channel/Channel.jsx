import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import "./channel.css";
import VideoSmall from "../VideoThumb/VideoSmall";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Channel = () => {
    const [sub, setSub] = useState(false);
    const [readText, setReadText] = useState(false);
    const history = useHistory();
    const handleClickSub = () => {
        setSub(!sub);
    };
    const handleRedirect = () => {
        history.push("/watch");
    };
    const handleRead = () => {
        setReadText(!readText);
    };
    return (
        <div className="channel">
            <div className="channel__wrapper">
                <img
                    src="https://elead.com.vn/wp-content/uploads/2020/04/13624171783_9f287bafdb_o.jpg"
                    alt=""
                    className="channel__cover-img"
                />
                <div className="channel__info">
                    <div className="channel__info-top">
                        <div className="channel__info-top--wrapper">
                            <Avatar
                                src="https://anhdep123.com/wp-content/uploads/2021/05/hinh-anh-cac-nhan-vat-songguku.jpg"
                                className="channel__avatar"
                                style={{ cursor: "pointer" }}
                            />
                            <div className="channel__info-block">
                                <h3 className="channel__info-name">
                                    Trần Văn Đông
                                </h3>
                                <span className="channel__info-sub">
                                    1,02 Tr người đăng ký
                                </span>
                            </div>
                            <button
                                className={!sub ? "button" : "button sub"}
                                onClick={handleClickSub}
                            >
                                {sub ? "ĐÃ ĐĂNG KÝ" : "ĐĂNG KÝ"}
                            </button>
                        </div>
                        <div className="channel__info-top--title">
                            <span className="channel__info-title active">
                                TRANG CHỦ
                            </span>
                            <span className="channel__info-title">VIDEO</span>
                            <span className="channel__info-title">
                                DANH SÁCH PHÁT
                            </span>
                            <span className="channel__info-title">
                                CỘNG ĐỒNG
                            </span>
                            <span className="channel__info-title">KÊNH</span>
                            <span className="channel__info-title">
                                GIỚI THIỆU
                            </span>
                            <SearchOutlined className="channel__icon" />
                        </div>
                    </div>
                    <div className="channel__slider">
                        <div className="channel__slider-wrapper">
                            <iframe
                                width="424"
                                height="238"
                                src="https://www.youtube.com/embed/9pqJT6xO3Ps"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            <div className="channel__slider-block">
                                <h3
                                    className="channel__slider-heading"
                                    onClick={handleRedirect}
                                >
                                    Em sẽ là cô dâu - Minh Vương M4U
                                </h3>
                                <div className="channel__slider-time--wrapper">
                                    <div className="channel__slider-time--block">
                                        <span className="channel__slider-time">
                                            1Tr lượt xem •{" "}
                                        </span>
                                        <span className="channel__slider-time">
                                            {" "}
                                            10 ngày trước
                                        </span>
                                    </div>
                                    <p className="channel__slider-text">
                                        BẢN TÌNH CA NHẠT MÀU - MINH VƯƠNG M4U I
                                        MV OFFICIAL MUSIC PRODUCTION MUSIC
                                        DIRECTOR : B CONCEPT entertaiment
                                        COMPOSER : lương duy thắng SINGER : minh
                                        vương m4u RECORDING ENGINEER & MIX
                                        MASTER: MINH VƯƠNG M4U INTRUMENTAL
                                        COMBINATOR : NGUYỄN NAM MINH THUỴ
                                    </p>
                                    <p className="channel__slider-more">
                                        ĐỌC THÊM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="watch__border"></div>
                    <div className="channel__bottom">
                        <h3 className="channel__bottom-heading">PHÁT TẤT CẢ</h3>
                        <div className="channel__bottom-wrapper">
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                            <VideoSmall video="video" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Channel;
