import { Avatar, Popover } from "@material-ui/core";
import {
    AccountBoxOutlined,
    AccountCircleOutlined,
    AcUnitOutlined,
    AppsOutlined,
    ArrowForwardIosOutlined,
    AttachMoneyOutlined,
    Brightness2Outlined,
    CloseOutlined,
    ExitToAppOutlined,
    FeedbackOutlined,
    HelpOutlineOutlined,
    KeyboardOutlined,
    LanguageOutlined,
    Menu,
    Mic,
    MoreVertOutlined,
    NotificationsNoneOutlined,
    PersonPinCircleOutlined,
    SearchOutlined,
    TranslateOutlined,
    VideoCallOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./header.css";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/");
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <Menu className="header__icons" />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
                        alt=""
                        className="header__img"
                        onClick={handleRedirect}
                    />
                </div>
                <div className="header__center">
                    <div className="header__center-wrapper">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            className="header__input"
                        />
                        <CloseOutlined style={{ display: "none" }} />
                        <SearchOutlined className="header__search" />
                    </div>
                    <Mic
                        className="header__icons-mic"
                        titleAccess="Tìm kiếm bằng giọng nói"
                    />
                </div>
                <div className="header__right">
                    <VideoCallOutlined
                        className="header__icons video"
                        titleAccess="Tạo"
                    />

                    {/* <Brightness4Outlined className="header__icons" /> */}
                    <AppsOutlined
                        className="header__icons app"
                        titleAccess="Các ứng dụng Youtube"
                    />
                    <NotificationsNoneOutlined
                        className="header__icons"
                        titleAccess="Thông báo"
                    />
                    <Avatar
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                        className="header__icons avatar"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65CXLkEWFDlHIHnU1hDnHHVn0GdfzBR7Ejg&usqp=CAU"
                    />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <div className="avatar__focus">
                            <div className="avatar__wrapper">
                                <div className="avatar__top">
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65CXLkEWFDlHIHnU1hDnHHVn0GdfzBR7Ejg&usqp=CAU" />
                                    <div className="avatar__manage">
                                        <h3 className="avatar__manage-heading">
                                            Trần Văn Đông
                                        </h3>
                                        <a href="/">
                                            Quản lý Tài khoản Google của bạn
                                        </a>
                                    </div>
                                </div>
                                <div className="avatar__center">
                                    <div className="avatar__setting">
                                        <AccountBoxOutlined />
                                        <span className="avatar__center-text">
                                            Kênh của bạn
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <AttachMoneyOutlined />
                                        <span className="avatar__center-text">
                                            Giao dịch mua và gói thành viên
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <AcUnitOutlined />
                                        <span className="avatar__center-text">
                                            Youtube Studio
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <AccountCircleOutlined />
                                        <span className="avatar__center-text">
                                            Chuyển đổi tài khoản
                                        </span>
                                        <ArrowForwardIosOutlined className="avatar__arrow" />
                                    </div>

                                    <div className="avatar__setting">
                                        <ExitToAppOutlined />
                                        <span className="avatar__center-text">
                                            Đăng xuất
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <Brightness2Outlined />
                                        <span className="avatar__center-text">
                                            Giao diện: Sáng
                                        </span>
                                        <ArrowForwardIosOutlined className="avatar__arrow" />
                                    </div>

                                    <div className="avatar__setting">
                                        <TranslateOutlined />
                                        <span className="avatar__center-text">
                                            Ngôn ngữ: Tiếng Việt
                                        </span>
                                        <ArrowForwardIosOutlined
                                            className="avatar__arrow"
                                            className="avatar__arrow"
                                        />
                                    </div>

                                    <div className="avatar__setting">
                                        <LanguageOutlined />
                                        <span className="avatar__center-text">
                                            Địa điểm: Việt Nam
                                        </span>
                                        <ArrowForwardIosOutlined className="avatar__arrow" />
                                    </div>

                                    <div className="avatar__setting">
                                        <MoreVertOutlined />
                                        <span className="avatar__center-text">
                                            Cài đặt
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <PersonPinCircleOutlined />
                                        <span className="avatar__center-text">
                                            Dữ liệu của bạn trong Youtube
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <HelpOutlineOutlined />
                                        <span className="avatar__center-text">
                                            Trợ giúp
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <FeedbackOutlined />
                                        <span className="avatar__center-text">
                                            Gửi phản hồi
                                        </span>
                                    </div>

                                    <div className="avatar__setting">
                                        <KeyboardOutlined />
                                        <span className="avatar__center-text">
                                            Phím tắt
                                        </span>
                                    </div>
                                </div>
                                <div className="avatar__bottom">
                                    <span className="avatar__center-text">
                                        Chế độ hạn chế: Đã tắt
                                    </span>
                                    <ArrowForwardIosOutlined className="avatar__arrow" />
                                </div>
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Header;
