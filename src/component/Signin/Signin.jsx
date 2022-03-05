import { TextField } from "@material-ui/core";
import { ErrorOutlineTwoTone } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./signin.css";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const handleInput = (e) => {
        setEmail(e.target.value);
        if (e.target.value < 1) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 1) {
            setError(true);
        } else {
            setError(false);
        }
        history.push("/signinv1");
    };

    return (
        <div className="signin">
            <div className="signin__wrapper">
                <div className="signin__block">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                        className="signin__logo"
                    />
                    <h3 className="signin__heading">Đăng nhập</h3>
                    <span className="signin__text">Tiếp tục với Gmail</span>

                    <form className="signin__form">
                        <TextField
                            error={error}
                            id="outlined-basic"
                            label="Email hoặc số điện thoại"
                            variant="outlined"
                            type="email"
                            fullWidth
                            className="signin__input"
                            onChange={handleInput}
                        />
                        {error && (
                            <div className="error">
                                <ErrorOutlineTwoTone className="errorIcons" />
                                <p className="signinv2__error">
                                    Nhập email của bạn
                                </p>
                            </div>
                        )}

                        <a href="/" className="signin__link">
                            Bạn quên địa chỉ email?
                        </a>
                        <p className="signin__more">
                            Đây không phải máy tính của bạn? Hãy sử dụng chế độ
                            Khách để đăng nhập một cách riêng tư.
                            <a href="/" className="signin__link">
                                Tìm hiểu thêm
                            </a>
                        </p>
                        <div className="signin__button">
                            <button className="signin__btn-link">
                                Tạo tài khoản
                            </button>
                            <button
                                className="signin__btn"
                                onClick={handleSubmit}
                            >
                                Tiếp theo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
