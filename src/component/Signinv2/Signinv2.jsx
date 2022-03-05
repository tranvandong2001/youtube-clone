import { TextField } from "@material-ui/core";
import { ErrorOutlineTwoTone } from "@material-ui/icons";
import { useState } from "react";
import "./signinv2.css";

const Signinv2 = () => {
    const [checkbox, setCheckbox] = useState(false);
    const [error, setError] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            lastName.length < 1 &&
            firstName.length < 1 &&
            email.length < 1 &&
            password.length < 1
        ) {
            setError(true);
        } else {
            setError(false);
        }

        // history.push("/signinv1");
    };

    return (
        <div className="signinv2">
            <div className="signinv2__wrapper">
                <div className="signinv2__left">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                        className="signin__logo"
                    />
                    <h3 className="signinv2__heading">Tạo tài khoản Google</h3>
                    <form className="signinv2__form" onSubmit={handleSubmit}>
                        <div className="signinv2__form-input">
                            <TextField
                                error={error}
                                id="outlined-basic"
                                label="Họ"
                                variant="outlined"
                                size="small"
                                onChange={handleLastName}
                            />
                            <TextField
                                error={error}
                                id="outlined-basic"
                                label="Tên"
                                variant="outlined"
                                size="small"
                                className="signinv2__input"
                                onChange={handleFirstName}
                            />
                        </div>

                        {error && (
                            <div className="error">
                                <ErrorOutlineTwoTone className="errorIcons" />
                                <p className="signinv2__error">
                                    Nhập tên và họ
                                </p>
                            </div>
                        )}

                        <br />
                        <TextField
                            error={error}
                            id="outlined-basic"
                            label="Tên người dùng"
                            variant="outlined"
                            size="small"
                            type="email"
                            fullWidth
                            helperText="Bạn có thể sử dụng chữ cãi,số và dấu chấm"
                            onChange={handleEmail}
                        />

                        {error && (
                            <div className="error">
                                <ErrorOutlineTwoTone className="errorIcons" />
                                <p className="signinv2__error">
                                    Chọn một địa chỉ Gmail
                                </p>
                            </div>
                        )}

                        <button className="signin__btn-link">
                            Sử dụng địa chỉ email hiện tại của tôi
                        </button>
                        <div className="signinv2__form-input">
                            <TextField
                                error={error}
                                id="outlined-basic"
                                label="Mật khẩu"
                                variant="outlined"
                                size="small"
                                type={checkbox ? "text" : "password"}
                                onChange={handlePassword}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Xác nhận"
                                variant="outlined"
                                size="small"
                                type={checkbox ? "text" : "password"}
                                className="signinv2__input"
                                onChange={handleConfirmPassword}
                            />
                        </div>
                        <span className="helpertext">
                            Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số
                            và biểu tượng
                        </span>
                        {error && (
                            <div className="error">
                                <ErrorOutlineTwoTone className="errorIcons" />
                                <p className="signinv2__error">Nhập mật khẩu</p>
                            </div>
                        )}
                        <div className="signinv2__form-check--block">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                onChange={handleCheckbox}
                                className="signinv2__checkbox"
                            />
                            <span className="signinv2__form-display--password">
                                Hiện mật khẩu
                            </span>
                        </div>

                        <div className="signin__button">
                            <button className="signin__btn-link">
                                Đăng nhập
                            </button>
                            <button className="signin__btn">Tiếp theo</button>
                        </div>
                    </form>
                </div>
                <div className="signinv2__right">
                    <div className="signinv2__right-wrapper">
                        <img
                            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                            alt=""
                            className="signinv2__img"
                        />
                        <p className="signinv2__right-text">
                            Một tài khoản. Hoạt động trên mọi sản phẩm và dịch
                            vụ của Google.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signinv2;
