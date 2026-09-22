import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { myGetToken } from "../../utils/tools";
import { Link, useNavigate } from "react-router-dom";

function LearnCenter() {
  const token = myGetToken();
  const navigate = useNavigate();

  return (
    <div className="learnBox" style={{ display: "flex", flexWrap: "wrap" }}>
      <h2 style={{ width: "100%", fontSize: "26px", textIndent: "1.5vw" }}>
        区块链金融虚拟仿真实验项目
      </h2>
      <div
        style={{
          width: "50%",
          height: "50%",
          // textAlign: "center",
          marginTop: "5vh",
        }}
      >
        <img
          style={{ width: "80%", height: "100%" }}
          src="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg?size=626&ext=jpg&ga=GA1.2.1357808383.1677208893&semt=sph"
          alt=""
        />
      </div>
      <div style={{ width: "50%", height: "50%", marginTop: "5vh" }}>
        <h1 style={{ fontSize: "26px" }}>区块链介绍</h1>
        <p
          style={{
            marginTop: "1.5vh",
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.645)",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            1.区块链历史发展和原理、区块链中的密码学、比特币简介、区块链公链和私链等等。
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            2.区块链带来的变革，涵盖且不限于：
          </span>
          <span
            style={{ display: "block", paddingLeft: "3rem", marginTop: "5px" }}
          >
            ①区块链共识机制。以去中心化的方式就网络的状态达成统一协议，有助于验证和验证信息被添加到分类账簿，确保只有真实的事务记录在区块链上；
          </span>
          <span
            style={{ display: "block", paddingLeft: "3rem", marginTop: "5px" }}
          >
            ②拜占庭容错协议。能够保证即使系统中存在恶意节点，分布式系统也具有一致性和活性；
          </span>
        </p>
        <a
          href={"http://edu2.fquantplus.com/course/190?token=" + token}
          target="_blank"
        >
          <Button
            type="primary"
            size="large"
            style={{ display: "inlineBlock", marginTop: "5vh" }}
          >
            开启区块链项目
          </Button>
        </a>
        <Link to={"/admin/experimentalCenter/edit"} target="_blank">
          <Button
            type="primary"
            size="large"
            style={{
              display: "inlineBlock",
              marginTop: "5vh",
              width: "8vw",
              marginLeft: "3vw",
            }}
            onClick={() => {}}
          >
            实验报告编写
          </Button>
        </Link>
      </div>

      <div style={{ width: "50%", height: "50%", paddingLeft: "2vw" }}>
        <h1 style={{ fontSize: "26px", marginTop: "3vh" }}>区块链原理实验</h1>
        <p
          style={{
            marginTop: "1.5vh",
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.645)",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            1.信息与哈希加密。通过本次实验了解信息是如何被加密成哈希密码的。
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            2.块与共识数据nonce。了解Block块与信息以及共识数据nonce之间的关系。
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            3.区块链与信息交换。了解区块链中块、信息、前验证和哈希码生成的机制，以及分布式信息交换的模式。
          </span>
        </p>
        <a
          href={"http://edu2.fquantplus.com/course/190?token=" + token}
          target="_blank"
        >
          <Button
            type="primary"
            size="large"
            style={{ display: "inlineBlock", marginTop: "5vh" }}
          >
            开启区块链项目
          </Button>
        </a>
        <Link to={"/admin/experimentalCenter/edit"} target="_blank">
          <Button
            type="primary"
            size="large"
            style={{
              display: "inlineBlock",
              marginTop: "5vh",

              marginLeft: "3vw",
            }}
            onClick={() => {}}
          >
            实验报告编写
          </Button>
        </Link>
      </div>
      <div style={{ width: "50%", height: "50%" }}>
        <img
          style={{ width: "80%", height: "100%" }}
          src="https://img.freepik.com/free-vector/students-learning-foreign-language-with-vocabulary_74855-11070.jpg?size=626&ext=jpg&ga=GA1.2.1357808383.1677208893&semt=sph"
          alt=""
        />
      </div>
      <div style={{ width: "50%", height: "50%" }}>
        <img
          style={{ width: "80%", height: "100%" }}
          src="https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?size=626&ext=jpg&ga=GA1.1.1357808383.1677208893"
          alt=""
        />
      </div>
      <div style={{ width: "50%", height: "50%" }}>
        <h1 style={{ fontSize: "26px", marginTop: "3vh" }}>区块链开发实验</h1>
        <p
          style={{
            marginTop: "1.5vh",
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.645)",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            1.Solidity学习路径——从入门到中级掌握智能合约细节（solidity语法和开发环境编写过程），学习solidity合约定义、数学运算、结构体、数组以及函数的定义
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            2.Solidity学习路径——获得深入的合约知识（部署智能合约、使用Truffle测试智能合约、Solidity和语言机）
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            3.Solidity学习路径——chainlink
            去中心化语言和以太坊生态圈（去中心化语言机和分步式计算）
          </span>
        </p>
        <a
          href={"http://edu2.fquantplus.com/course/190?token=" + token}
          target="_blank"
        >
          <Button
            type="primary"
            size="large"
            style={{ display: "inlineBlock", marginTop: "5vh" }}
          >
            开启区块链项目
          </Button>
        </a>
        <Link to={"/admin/experimentalCenter/edit"} target="_blank">
          <Button
            type="primary"
            size="large"
            style={{
              display: "inlineBlock",
              marginTop: "5vh",

              marginLeft: "3vw",
            }}
            onClick={() => {}}
          >
            实验报告编写
          </Button>
        </Link>
      </div>

      <div style={{ width: "50%", height: "50%", paddingLeft: "2vw" }}>
        <h1 style={{ fontSize: "26px", marginTop: "3vh" }}>
          去中心化金融应用实验
        </h1>
        <p
          style={{
            marginTop: "1.5vh",
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.645)",
          }}
        >
          需要能够带领学生在真链上的开放网络中上完成智能合约的创建、部署与调用，提供真正的区块链实战环境，从而达到掌握区块链智能合约的编制方式，并对区块链的运行原理拥有更深层认知的学习效果
        </p>
        <a
          href={"http://edu2.fquantplus.com/course/190?token=" + token}
          target="_blank"
        >
          <Button
            type="primary"
            size="large"
            style={{ display: "inlineBlock", marginTop: "5vh" }}
          >
            开启区块链项目
          </Button>
        </a>
        <Link to={"/admin/experimentalCenter/edit"} target="_blank">
          <Button
            type="primary"
            size="large"
            style={{
              display: "inlineBlock",
              marginTop: "5vh",

              marginLeft: "3vw",
            }}
            onClick={() => {}}
          >
            实验报告编写
          </Button>
        </Link>
      </div>
      <div style={{ width: "50%", height: "50%" }}>
        <img
          style={{ width: "80%", height: "100%" }}
          src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&ga=GA1.1.1357808383.1677208893"
          alt=""
        />
      </div>
    </div>
  );
}

export default LearnCenter;
