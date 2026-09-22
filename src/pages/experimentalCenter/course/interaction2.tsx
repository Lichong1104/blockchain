import {
  AlertOutlined,
  BugTwoTone,
  Html5TwoTone,
  PropertySafetyTwoTone,
} from "@ant-design/icons";
import React, { useEffect, useId, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import Account from "./components/account";
import { Button, Card, Col, Modal, Row, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import bofu from "./image/mortgage.png";
import zhengfu from "./image/embassy.png";
import jianguan from "./image/hierarchical-structure.png";
import { Scrollbar } from "react-scrollbars-custom";
import mp4 from "./image2/WeChat_buzhou2.mp4";
//@ts-ignore
import TypingCard from "./components/TypingCard.tsx";
//@ts-ignore
import { SHA256 } from "crypto-js";
//千分位
function formatNumberWithCommas(number: any) {
  let numberStr = number.toString();
  let hasDecimal = false;

  if (numberStr.indexOf(".") !== -1) {
    hasDecimal = true;
  }

  let parts = numberStr.split(".");
  let integerPart = parts[0];
  let decimalPart = hasDecimal ? "." + parts[1] : "";

  let integerWithCommas = "";
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    count++;
    integerWithCommas = integerPart.charAt(i) + integerWithCommas;

    if (count % 3 === 0 && i !== 0) {
      integerWithCommas = "," + integerWithCommas;
    }
  }

  let formattedNumber = integerWithCommas + decimalPart;

  return formattedNumber;
}

function generateHash(str: any) {
  return new Promise((resolve, reject) => {
    try {
      const hash = SHA256(str);
      const truncatedHash = hash.toString().substring(0, 42);
      setTimeout(() => {
        resolve(truncatedHash); // 模拟异步操作
      }, 0);
    } catch (error) {
      reject(error);
    }
  });
}

function Interaction2() {
  const navigate = useNavigate();
  const [tokenList, setTokenList] = useState<any>([]);
  useEffect(() => {
    generateHash("50000000")
      .then((hash: any) => {
        setTokenList((tokenList: any) => [
          ...tokenList,
          { key: "新优token", hash },
        ]);
      }) // 输出：
      .catch((error) => console.error(error));
    generateHash("25000000")
      .then((hash: any) => {
        setTokenList((tokenList: any) => [
          ...tokenList,
          { key: "集悦token", hash },
        ]);
      }) // 输出：
      .catch((error) => console.error(error));
    generateHash("5000000")
      .then((hash: any) => {
        setTokenList((tokenList: any) => [
          ...tokenList,
          { key: "刘琦token", hash },
        ]);
      }) // 输出：
      .catch((error) => console.error(error));
  }, []);

  //标题文字浮现
  const uuid = useId();
  const slide = useSpring({
    from: { transform: "translateY(20%)", opacity: 0 }, // 起始值
    to: { transform: "translateY(0)", opacity: 1 }, // 结束值
    config: { duration: 800, delay: 110 },
  });

  //数字加载
  const [startAnimation, setStartAnimation] = useState(true);
  const { principal } = useSpring({
    from: { principal: 0 },
    to: { principal: startAnimation ? 0 : 80000000 },
    delay: 500,
    duration: 5000,
  });

  const { payable } = useSpring({
    from: { payable: 0 },
    to: { payable: startAnimation ? 50000000 : 0 },
    delay: 500,
    duration: 5000,
  });
  const { payable1 } = useSpring({
    from: { payable1: 0 },
    to: { payable1: startAnimation ? 25000000 : 0 },
    delay: 500,
    duration: 5000,
  });
  const { payable2 } = useSpring({
    from: { payable2: 0 },
    to: { payable2: startAnimation ? 5000000 : 0 },
    delay: 500,
    duration: 5000,
  });

  //modal
  const [isModalOpen, setIsModalOpen] = useState(true);
  const videoRef = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
    //@ts-ignore
    videoRef.current.pause();
  };

  const handleOk = () => {
    setIsModalOpen(false);
    //@ts-ignore
    videoRef.current.pause();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    //@ts-ignore
    videoRef.current.pause();
  };
  return (
    <div style={{ position: "relative" }}>
      <Modal
        style={{ top: "auto", left: "5vw", bottom: "-30vh" }}
        width={"70vw"}
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            height: "40vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "40%" }}>
            {" "}
            {/* <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.MX5fVtf8zzjiqnHVG7CFugHaHb?w=233&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              /> */}
            <video
              ref={videoRef}
              style={{ height: "100%", width: "100%" }}
              src={mp4}
              // autoPlay
              // muted
              loop
              controls
            />
          </div>

          <Scrollbar
            style={{
              flex: "1",
              // display: "flex",
              // justifyContent: "end",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "90%", marginRight: "0.5vw" }}>
                <br />
                <animated.h1
                  style={{ ...slide, fontSize: "26px", margin: "10px 0" }}
                >
                  2. 通知地方人民政府和监管机构合约信息
                </animated.h1>
                <p style={{ fontSize: "1vw", lineHeight: "1.8vw" }}>
                  {isModalOpen ? (
                    <TypingCard
                      source={
                        "场景角色：本流程中学员将分别扮演“国库拨付中心”角色。该场景下“国库拨付中心”将要拨付给对应的乡村振兴资金给对应机构的企业数字人民币账户、个人的数字人民币账户的token信息，分别通知给“地方人民政府”和“监管机构”。<br/><br/>场景流程：“国库拨付中心”将要拨付给对应的乡村振兴资金给对应机构的企业数字人民币账户和个人的数字人民币账户的密钥信息，分别通知给“地方人民政府”和“监管机构”。<br/><br/>实验操作步骤：学员需要分别记录下：企业数字人民币账户和个人的数字人民币账户的密钥信息。记录完成之后，请点击“下一步”进入下一个实验环节。"
                      }
                    />
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </Scrollbar>
        </div>
      </Modal>
      <animated.h1
        style={{
          ...slide,
          fontSize: "1.4vw",
          height: "1.8vw",
          // lineHeight: "2.8vw",
        }}
      >
        区块链的乡村振兴财政专项资金服务仿真项目
      </animated.h1>

      <div
        style={{
          display: "flex",
          // border: "1px solid gray",
          position: "relative",
          padding: "18px",
          borderRadius: "16px",
          backgroundColor: "rgb(210 210 210 / 50%)",
          marginTop: "1vh",
        }}
      >
        <Button
          onClick={() => {
            // showModal();
            navigate("/admin/experimentalCenter/course/interaction3");
          }}
          type="primary"
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            zIndex: "999",
          }}
        >
          下一步
        </Button>
        <AlertOutlined
          onClick={() => {
            showModal();
          }}
          style={{
            position: "absolute",
            bottom: "2.5vw",
            left: "2.5vw",
            zIndex: "9",
            fontSize: "1.8vw",
          }}
        >
          提示
        </AlertOutlined>
        <div
          style={{
            width: "65%",
            // border: "1px solid gray",
            height: "73vh",

            position: "relative",
            backgroundColor: "#F5F5F5",
            padding: "16px",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1px solid gray",
              position: "relative",
            }}
          >
            <animated.p
              style={{
                ...slide,
                fontSize: "1vw",
                marginTop: "1vh",
                height: "2vw",
                // lineHeight: "1.8vw",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              ② 通知地方人民政府和监管机构合约信息
            </animated.p>
            {/* <Html5TwoTone style={{ fontSize: "10vw" }} /> */}
            <div style={{ width: "10vw" }}>
              <img src={bofu} style={{ width: "90%" }} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>拨付中心</p>
            </div>
          </div>
          <div
            style={{
              height: "40%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {/* <BugTwoTone style={{ fontSize: "10vw" }} />
            <PropertySafetyTwoTone style={{ fontSize: "10vw" }} /> */}
            <div style={{ width: "10vw" }}>
              <img src={zhengfu} style={{ width: "90%" }} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>地方政府</p>
            </div>
            <div style={{ width: "10vw" }}>
              <img src={jianguan} style={{ width: "90%" }} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>监管机构</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              // border: "1px solid gray",
              height: "20%",
            }}
          >
            <div
              style={{
                height: "50%",
                // border: "1px solid gray",
                // padding: "4px",
              }}
            >
              {/*
               */}
              <Card bordered={false}>
                <Tooltip title="c5460c4a38f89b6f4cf36b4c85590f25ad6ee25f01">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "15vw",
                    }}
                  >
                    新优token：c5460c4a38f89b6f4cf36b4c85590f25ad6ee25f01
                  </p>
                </Tooltip>

                <Tooltip title="605be2e62e451d61d51cecf225a0c361c18c30a653">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "15vw",
                    }}
                  >
                    集悦token：605be2e62e451d61d51cecf225a0c361c18c30a653
                  </p>
                </Tooltip>
              </Card>
            </div>
            <div
              style={{
                height: "50%",
                // border: "1px solid gray",
                // padding: "4px",
                // width: "30%",
              }}
            >
              {/* */}

              <Card bordered={false}>
                <Tooltip title="26186289e131960d37676f348cc3ee5c4c2fa09703">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "15vw",
                    }}
                  >
                    刘琦token：26186289e131960d37676f348cc3ee5c4c2fa09703
                  </p>
                </Tooltip>

                <br />
              </Card>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "35%",
            // border: "1px solid gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "85%",
              height: "75%",
              border: "3px solid #b18181",
              // margin: "7vh auto",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Account height="100%" title="国库拨付中心" tokenList={tokenList}>
              <animated.div
                style={{
                  height: "98%",
                  width: "90%",
                  border: "3px solid #b18181",
                  fontSize: "1.1vw",
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgb(210 210 210 / 20%)",
                }}
              >
                <p style={{ height: "3vh", lineHeight: "3vh" }}>本金</p>
                <animated.span>
                  {principal.to((n) => n.toFixed(0))}
                </animated.span>
              </animated.div>
              <div
                style={{
                  height: "98%",
                  width: "90%",
                  border: "3px solid #b18181",
                  fontSize: "1vw",
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgb(210 210 210 / 20%)",
                }}
              >
                <p style={{ height: "3vh", lineHeight: "3vh" }}>应付</p>

                <p>
                  新优：
                  <animated.span
                    style={{ display: "inline-block", width: "3.8vw" }}
                  >
                    {payable.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
                <p>
                  集悦：
                  <animated.span
                    style={{ display: "inline-block", width: "3.8vw" }}
                  >
                    {payable1.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
                <p>
                  刘琦：
                  <animated.span
                    style={{ display: "inline-block", width: "3.8vw" }}
                  >
                    {payable2.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
              </div>
            </Account>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction2;
