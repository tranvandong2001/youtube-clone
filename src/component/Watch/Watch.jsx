import {
    ThumbUpAltOutlined,
    ThumbDownAltOutlined,
    ReplyOutlined,
    PlaylistAddOutlined,
    MoreHorizOutlined,
    SortOutlined,
    MoreVertOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./watch.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

const Watch = () => {
    const [readText, setReadText] = useState(false);
    const [sub, setSub] = useState(false);
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const history = useHistory();

    const removeRef = useRef();

    const handleClickSub = () => {
        setSub(!sub);
    };
    const handleRedirect = () => {
        history.push("/channel");
    };
    const handleRead = () => {
        if (!readText) {
            removeRef.current.style.height = "100%";
        } else {
            removeRef.current.style.height = "60px";
        }
        setReadText(!readText);
    };
    const handleLike = (ldlike) => {
        if (ldlike === "like") {
            setLike(!like);
            setDisLike(false);
        }
        if (ldlike === "dislike") {
            setDisLike(!disLike);
            setLike(false);
        }
    };
    return (
        <div className="watch">
            <div className="watch__wrapper">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/wEzsp16xM3k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="watch__wrapper-video"
                ></iframe>
                <div className="watch__top">
                    <h3 className="watch__top-heading">
                        Hạnh phúc đó em không có (TikTok Remix 1 Hour) - Dj Thái
                        Hoàng - Hot TikTok
                    </h3>
                    <div className="watch__top-block">
                        <div className="watch__top-time">
                            <span className="watch__top-time--text">
                                91.429 lượt xem •{" "}
                            </span>
                            <span className="watch__top-time--text">
                                24 thg 12, 2021
                            </span>
                        </div>
                        <div className="watch__top-more">
                            <div className="watch__top-icon">
                                <ThumbUpAltOutlined
                                    className={
                                        !like
                                            ? "watch__icons"
                                            : "watch__icons dislike"
                                    }
                                    onClick={() => handleLike("like")}
                                />
                                <span className="watch__top-text">1,3 N</span>
                            </div>

                            <div className="watch__top-icon">
                                <ThumbDownAltOutlined
                                    className={
                                        !disLike
                                            ? "watch__icons"
                                            : "watch__icons dislike"
                                    }
                                    onClick={() => handleLike("dislike")}
                                />
                                <span className="watch__top-text">
                                    KHÔNG THÍCH
                                </span>
                            </div>

                            <div className="watch__top-icon">
                                <ReplyOutlined className="watch__icons" />
                                <span className="watch__top-text">CHIA SẺ</span>
                            </div>

                            <div className="watch__top-icon">
                                <PlaylistAddOutlined className="watch__icons" />
                                <span className="watch__top-text">LƯU</span>
                            </div>
                            <div className="watch__top-icon">
                                <MoreHorizOutlined className="watch__icons" />
                            </div>
                        </div>
                    </div>
                    <div className="watch__border"></div>
                </div>
                <div className="watch__center">
                    <div className="watch__center-wrapper">
                        <div className="watch__center-heading">
                            <Avatar
                                src="https://image-us.24h.com.vn/upload/3-2019/images/2019-08-14/1565779014-593eaa963aa8baed310b979aff1add6a.jpg"
                                style={{ cursor: "pointer" }}
                                onClick={handleRedirect}
                            />
                            <div className="watch__center-own">
                                <h3 className="watch__center-ownn">
                                    Chị Huyền Xinh Gái
                                </h3>
                            </div>
                        </div>
                        <button
                            className={
                                !sub
                                    ? "watch__center-btn"
                                    : "watch__center-btn sub"
                            }
                            onClick={handleClickSub}
                        >
                            {sub ? "ĐÃ ĐĂNG KÝ" : "ĐĂNG KÝ"}
                        </button>
                    </div>
                    <div className="watch__center-more" ref={removeRef}>
                        <span className="watch__center-text">
                            Hạnh Phúc Đó Em Không Có Remix || Bản hót nhất trên
                            tik tok
                        </span>
                        <br />
                        <span className="watch__center-text">
                            Nghe nhạc Tại kênh TikTok Remix 1Hour Mọi khiếu nại
                            về bản quyền âm nhạc hoặc hình ảnh mong chủ sở hữu
                            liên hệ Email: phaman71x@gmail.com Facebook:
                            https://www.facebook.com/andz9898/ Xin chân thành
                            cảm ơn!!! Chúc các bạn nghe nhạc vui vẻ!!! Giáng
                            sinh an lành Merry Christmas!!!
                        </span>
                    </div>
                    <p
                        className="watch__center-more--hidden"
                        onClick={handleRead}
                    >
                        {!readText ? "ĐỌC THÊM" : "ẨN BỚT"}
                    </p>
                </div>
                <div className="watch__border"></div>
                <div className="watch__bottom">
                    <div className="watch__bottom-comment">
                        <span className="watch__bottom-quantily">
                            4 bình luận
                        </span>

                        <SortOutlined className="watch__bottom-icons" />
                        <span className="watch__bottom-sort">SẮP XẾP THEO</span>
                    </div>
                    <div className="watch__bottom-cmt">
                        <Avatar src="https://image-us.24h.com.vn/upload/3-2019/images/2019-08-14/1565779014-593eaa963aa8baed310b979aff1add6a.jpg" />
                        <div className="watch__bottom-input">
                            <input
                                type="text"
                                placeholder="Bình luận công khai"
                                className="watch__input"
                            />
                            <div className="watch__border"></div>
                        </div>
                    </div>
                    <div className="watch__comment">
                        <Avatar src="https://image-us.24h.com.vn/upload/3-2019/images/2019-08-14/1565779014-593eaa963aa8baed310b979aff1add6a.jpg" />
                        <div className="watch__comment-block">
                            <div className="watch__comment-heading--block">
                                <h3 className="watch__comment-heading">
                                    Tiến Hoàng
                                </h3>
                                <span className="watch__comment-time">
                                    1 ngày trước
                                </span>
                            </div>

                            <p className="watch__comment-text">
                                Cuối năm nay mình sẽ lấy vợ. Nhất định phải hát
                                thật hay bài này tặng vợ 😍
                            </p>
                            <div className="watch__comment-icon">
                                <ThumbUpAltOutlined className="watch__comment-icons" />
                                <span className="watch__comment-quantity--like">
                                    1
                                </span>
                                <ThumbDownAltOutlined className="watch__comment-icons" />
                                <span className="watch__comment-feedback">
                                    PHẢN HỒI
                                </span>
                            </div>
                        </div>
                        <MoreVertOutlined className="watch__icon-dot" />
                    </div>
                    <div className="watch__reply">
                        <div className="watch__comment">
                            <Avatar src="https://live.staticflickr.com/65535/47729767791_6d03c09f45_b.jpg" />
                            <div className="watch__comment-block">
                                <div className="watch__comment-heading--block">
                                    <h3 className="watch__comment-heading">
                                        Đông ti mo
                                    </h3>
                                    <span className="watch__comment-time">
                                        1 ngày trước
                                    </span>
                                </div>

                                <p className="watch__comment-text">
                                    Hát như cc đòi hát ai nghe
                                </p>
                                <div className="watch__comment-icon">
                                    <ThumbUpAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-quantity--like">
                                        1
                                    </span>
                                    <ThumbDownAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-feedback">
                                        PHẢN HỒI
                                    </span>
                                </div>
                            </div>
                            <MoreVertOutlined className="watch__icon-dot" />
                        </div>
                        <div className="watch__comment">
                            <Avatar src="https://toplist.vn/images/800px/bi-che-la-yeu-duoi-420439.jpg" />
                            <div className="watch__comment-block">
                                <div className="watch__comment-heading--block">
                                    <h3 className="watch__comment-heading">
                                        Ảo ma canada
                                    </h3>
                                    <span className="watch__comment-time">
                                        1 ngày trước
                                    </span>
                                </div>

                                <p className="watch__comment-text">Alo</p>
                                <div className="watch__comment-icon">
                                    <ThumbUpAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-quantity--like">
                                        1
                                    </span>
                                    <ThumbDownAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-feedback">
                                        PHẢN HỒI
                                    </span>
                                </div>
                            </div>
                            <MoreVertOutlined className="watch__icon-dot" />
                        </div>
                        <div className="watch__comment">
                            <Avatar src="https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/hongnhat/2018_09_22/1/nb-2_WSZS.jpg" />
                            <div className="watch__comment-block">
                                <div className="watch__comment-heading--block">
                                    <h3 className="watch__comment-heading">
                                        No name
                                    </h3>
                                    <span className="watch__comment-time">
                                        1 ngày trước
                                    </span>
                                </div>

                                <p className="watch__comment-text">Alo</p>
                                <div className="watch__comment-icon">
                                    <ThumbUpAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-quantity--like">
                                        1
                                    </span>
                                    <ThumbDownAltOutlined className="watch__comment-icons" />
                                    <span className="watch__comment-feedback">
                                        PHẢN HỒI
                                    </span>
                                </div>
                            </div>
                            <MoreVertOutlined className="watch__icon-dot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;
