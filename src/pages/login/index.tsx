import React, { useState } from "react";
import { mySetToken } from "../../utils/tools";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { Button, message, Space } from "antd";
import axios from "axios";
// @ts-ignore
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import backGround from "./2023-02-10_11-09-41.jpg";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "登录成功",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "用户名或密码输入错误",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "用户名或密码不能为空",
    });
  };

  //登录
  const loginApi = () => {
    NProgress.start();
    if (username && password) {
      // axios.defaults.baseURL = "/login";
      axios.defaults.baseURL = "http://115.28.136.113:8081";
      axios({
        url: "/site/login",
        method: "post",
        data: {
          username,
          password,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.data[0]) {
          success();
          mySetToken(res.data.data[0].edu_user.token);
          setTimeout(() => {
            navigate("/admin");
          }, 800);

          NProgress.done();
        } else {
          error();
          NProgress.done();
        }
      });
    } else {
      warning();
      NProgress.done();
    }
  };

  //专家通道登录
  const expertLogin = () => {
    NProgress.start();
    const expertUsername = "12344321@qq.com";
    const expertPassword = "123456";

    axios.defaults.baseURL = "http://115.28.136.113:8081";
    axios({
      url: "/site/login",
      method: "post",
      data: {
        username: expertUsername,
        password: expertPassword,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.data[0]) {
          success();
          mySetToken(res.data.data[0].edu_user.token);
          setTimeout(() => {
            navigate("/admin");
          }, 800);
          NProgress.done();
        } else {
          error();
          NProgress.done();
        }
      })
      .catch((err) => {
        console.error("专家登录失败:", err);
        error();
        NProgress.done();
      });
  };
  return (
    <div className={style.loginBox}>
      {contextHolder}
      <img src={backGround} style={{ width: "100%", height: "100%" }} alt="" />
      <div
        className="login_bigBox"
        style={{
          position: "absolute",
          left: "calc(100% - 90% )",
          top: "calc(100% - 50% - 150px)",
          zIndex: "999",
        }}
      >
        <div className={style.login}>
          <h2 style={{ fontSize: 38 }}>宁夏师范学院</h2>
          <h2>区块链金融虚拟仿真教学平台</h2>
          {/* <h2>用户登录</h2> */}
          <div className={style.login_box}>
            <input
              type="text"
              // name="name"
              // id="name"
              required
              onChange={(e) => {
                setUsername(e.currentTarget.value);
              }}
            />
            <label htmlFor="name">用户名</label>
          </div>
          <div className={style.login_box}>
            <input
              type="password"
              name="pwd"
              id="pwd"
              required
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  loginApi();
                }
              }}
            ></input>
            <label htmlFor="pwd">密码</label>
          </div>
          <a onClick={loginApi}>
            登录
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <a onClick={expertLogin} className={style.expertBtn}>
            专家通道
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <span
            style={{
              position: "absolute",
              left: "10px",
              bottom: "20px",
              fontSize: "12px",
              color: "#03e9f4",
            }}
          >
            版本：金融科技平台 V1.0
          </span>
          <span
            style={{
              position: "absolute",
              right: "10px",
              bottom: "20px",
              fontSize: "12px",
              color: "#03e9f4",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/registered");
            }}
          >
            没有帐号？快速注册
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
<style></style>;
