import React from "react";
import { myGetToken } from "../../utils/tools";
import index from "./test.module.css";
import img from "../login/2023-02-10_11-09-41.jpg";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const url = "http://edu2.fquantplus.com/course/77?token=" + myGetToken();
  return (
    <div>
      <div className={index.body} style={{ height: "80vh", zIndex: "-2" }}>
        <img
          alt=" "
          src={img}
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute" }}
        />
        <div className={index.container}>
          <h1 className={index.h1}>区块链的乡村振兴财政专项资金服务仿真项目</h1>
          <a
            style={{ marginTop: "20px" }}
            target="_blank"
            // href={url}
            onClick={() => {
              navigate("/admin/experimentalCenter/course/introduce");
            }}
            className={index.button}
          >
            点击开始实验
          </a>
        </div>
      </div>
    </div>
  );
}

export default Test;
