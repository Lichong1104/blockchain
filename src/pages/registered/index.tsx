import React, { useState } from "react";
import { mySetToken } from "../../utils/tools";
import { useNavigate } from "react-router-dom";
import style from "../login/login.module.css";
import { Button, message, Space } from "antd";
import axios from "axios";
// @ts-ignore
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import backGround from "../login/2023-02-10_11-09-41.jpg";

function Registered() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "注册成功,即将返回登录页面",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "用户名或密码格式错误",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "用户名或密码不能为空",
    });
  };

  //注册
  const registered = () => {
    if (username && password) {
      // axios.defaults.baseURL = "http://115.28.136.113:8081/site/register";
      if (password === passwordAgain) {
        axios({
          url: "http://115.28.136.113:8081/site/register",
          method: "post",
          data: {
            username,
            password,
          },
        }).then((res) => {
          if (res.data.data[0]) {
            success();
            setTimeout(() => {
              navigate("/");
            }, 500);
          } else {
            error();
          }
        });
      } else {
        messageApi.open({
          type: "warning",
          content: "密码不一致",
        });
      }
    } else {
      warning();
    }
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
          <h2>用户注册</h2>

          <div className={style.login_box}>
            <input
              type="text"
              //   name="name"
              //   id="name"
              required
              onChange={(e) => {
                setUsername(e.currentTarget.value);
              }}
            />
            <label htmlFor="name">邮箱</label>
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
              onKeyUp={(e) => {}}
            ></input>
            <label htmlFor="pwd">密码</label>
          </div>
          <div className={style.login_box}>
            <input
              type="password"
              name="pwdAgain"
              id="pwd"
              required
              onChange={(e) => {
                setPasswordAgain(e.currentTarget.value);
              }}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  registered();
                }
              }}
            ></input>
            <label htmlFor="pwdAgain">确认密码</label>
          </div>
          <a onClick={registered}>
            注册
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
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
              NProgress.start();
              navigate("/");
              NProgress.done();
            }}
          >
            已有帐号？快速登陆
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registered;
<style></style>;
