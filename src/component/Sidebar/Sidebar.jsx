import { Avatar } from "@material-ui/core";
import {
    EmojiEmotionsOutlined,
    ExploreOutlined,
    FeedbackOutlined,
    FlagOutlined,
    HelpOutline,
    HistoryOutlined,
    Home,
    MoreVertOutlined,
    SettingsInputAntennaOutlined,
    ShopOutlined,
    SportsEsportsOutlined,
    SubscriptionsOutlined,
    ThumbUpAltOutlined,
    UpdateOutlined,
    VideoLibraryOutlined,
} from "@material-ui/icons";
import "./sidebar.css";
import { useHistory } from "react-router-dom";
const Sidebar = () => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/");
    };
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__top">
                    <div
                        className="sidebar__top-block active"
                        onClick={handleRedirect}
                    >
                        <Home className="sidebar__icons" />
                        <span className="sidebar__text">Trang chủ</span>
                    </div>

                    <div className="sidebar__top-block">
                        <ExploreOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Khám phá</span>
                    </div>

                    <div className="sidebar__top-block">
                        <SubscriptionsOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Kênh đăng ký</span>
                    </div>
                    <div className="sidebar__border"></div>
                    <div className="sidebar__top-block">
                        <VideoLibraryOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Thư viện</span>
                    </div>

                    <div className="sidebar__top-block">
                        <HistoryOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Video đã xem</span>
                    </div>

                    <div className="sidebar__top-block">
                        <ShopOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Video của bạn</span>
                    </div>

                    <div className="sidebar__top-block">
                        <UpdateOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Xem sau</span>
                    </div>

                    <div className="sidebar__top-block">
                        <ThumbUpAltOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Video đã thích</span>
                    </div>
                    <div className="sidebar__border"></div>

                    <span className="sidebar__heading">KÊNH ĐĂNG KÝ</span>
                    <div className="sidebar__top-block">
                        <Avatar className="sidebar__icons" />
                        <span className="sidebar__text">Lama Dev</span>
                    </div>
                    <div className="sidebar__border"></div>
                    <span className="sidebar__heading">
                        DỊCH VỤ KHÁC CỦA YOUTUBE
                    </span>
                    <div className="sidebar__top-block">
                        <SportsEsportsOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Trò chơi</span>
                    </div>
                    <div className="sidebar__top-block">
                        <SettingsInputAntennaOutlined className="sidebar__icons" />
                        <span className="sidebar__text">
                            Sự kiện phát trực tiếp
                        </span>
                    </div>

                    <div className="sidebar__top-block">
                        <EmojiEmotionsOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Thể thao</span>
                    </div>
                    <div className="sidebar__border"></div>

                    <div className="sidebar__top-block">
                        <MoreVertOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Cài đặt</span>
                    </div>

                    <div className="sidebar__top-block">
                        <FlagOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Lịch sử báo cáo</span>
                    </div>

                    <div className="sidebar__top-block">
                        <HelpOutline className="sidebar__icons" />
                        <span className="sidebar__text">Trợ giúp</span>
                    </div>

                    <div className="sidebar__top-block">
                        <FeedbackOutlined className="sidebar__icons" />
                        <span className="sidebar__text">Gửi phản hồi</span>
                    </div>
                </div>
                <div className="sidebar__border"></div>
                <div className="sidebar__bottom">
                    <a href="/" className="sidebar__link">
                        Giới thiệu
                    </a>
                    <a href="/" className="sidebar__link">
                        Báo chí
                    </a>
                    <a href="/" className="sidebar__link">
                        Bản quyền
                    </a>
                    <a href="/" className="sidebar__link">
                        Liên hệ với chúng tôi
                    </a>
                    <a href="/" className="sidebar__link">
                        Người sáng tạo
                    </a>
                    <a href="/" className="sidebar__link">
                        Quảng cáo
                    </a>
                    <a href="/" className="sidebar__link">
                        Nhà phát triển
                    </a>
                    <a href="/" className="sidebar__link">
                        Điều khoản
                    </a>
                    <a href="/" className="sidebar__link">
                        Quyền riêng tư
                    </a>
                    <a href="/" className="sidebar__link">
                        Chính sách và an toàn
                    </a>
                    <a href="/" className="sidebar__link">
                        Cách Youtube hoạt động
                    </a>
                    <a href="/" className="sidebar__link">
                        Thử các tính năng mới
                    </a>
                </div>
                <div className="sidebar__copy">
                    <p>&copy; 2022 Google LLC</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
