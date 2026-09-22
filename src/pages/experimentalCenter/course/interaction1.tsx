import {
  AlertOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  EllipsisOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Divider, Modal, Space, Tour, TourProps, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import ModalShow from "./components/modalShow";
import Account from "./components/account";
import { useNavigate } from "react-router-dom";
import yinhang from "./image/bank (2).png";
import renzheng from "./image/check-in.png";
import shuju from "./image/data-processing.png";
import bofu from "./image/mortgage.png";
import dengji from "./image/stamp.png";
import jiantou from "./image2/right-arrow.png";
import { Scrollbar } from "react-scrollbars-custom";
import mp4 from "./image2/WeChat_buzhou1.mp4";
//@ts-ignore
import TypingCard from "./components/TypingCard.tsx";
//@ts-ignore
import { SHA256 } from "crypto-js";
// window.addEventListener("popstate", function (e) {
//   e.preventDefault();
//   // 或者
//   window.location.href =
//     "http://localhost:5173/#/admin/experimentalCenter/test";
// });

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
//随即哈希
// function generateHash(str: any) {
//   const crypto = window.crypto;
//   if (!crypto) {
//     throw new Error("Web Cryptography API is not supported in this browser.");
//   }

//   return crypto.subtle
//     .digest("SHA-256", new TextEncoder().encode(str))
//     .then((hash) => {
//       return Array.from(new Uint8Array(hash))
//         .map((b) => b.toString(16).padStart(2, "0"))
//         .join("")
//         .substring(0, 42);
//     });
// }
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
function Interaction1() {
  const navigate = useNavigate();
  const [items, setItems] = useState<{ key: any }[]>([]);

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    config: { duration: 500 },
    unique: true, // 添加这一行
  });

  const handleClick = () => {
    if (items.length < 3) {
      setItems([
        ...items,
        {
          key: (
            <div>
              <img style={{ width: "4vw" }} src={jiantou} alt="" />
            </div>
          ),
        },
      ]);
    } else {
      setShow(true);
      setStartAnimation(true);
      generateHash("80000000")
        .then((hash: any) => {
          console.log(hash.substring(0, 32));
          setHash(hash);
        }) // 输出：
        .catch((error) => console.error(error));
      setNext(true);
    }
  };
  const [show, setShow] = useState(false);

  const spring = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(-50%)" : "translateY(-100%)",
    config: {
      mass: 1,
      tension: 380,
      friction: 80,
    },
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
  //标题文字浮现
  const slide = useSpring({
    from: { transform: "translateY(20%)", opacity: 0 }, // 起始值
    to: { transform: "translateY(0)", opacity: 1 }, // 结束值
    config: { duration: 800, delay: 110 },
  });
  //数字加载
  const [startAnimation, setStartAnimation] = useState(false);
  const { principal } = useSpring({
    from: { principal: 0 },
    to: { principal: startAnimation ? 80000000 : 0 },
    delay: 500,
    duration: 5000,
  });

  // const { payable } = useSpring({
  //   from: { payable: 0 },
  //   to: { payable: startAnimation ? 80000000 : 0 },
  //   delay: 500,
  //   duration: 5000,
  // });

  //hashToken
  const [hash, setHash] = useState("未定义");

  //下一步
  const [next, setNext] = useState(false);

  return (
    <div>
      {/* <ModalShow /> */}
      <animated.h1
        style={{
          ...slide,
          fontSize: "1.4vw",
          height: "1.8vw",
          // lineHeight: "1.8vw",
        }}
      >
        区块链的乡村振兴财政专项资金服务仿真项目
      </animated.h1>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "nowrap",
          position: "relative",
          // border: "1px solid gray",
          padding: "16px",
          borderRadius: "16px",
          backgroundColor: "rgb(210 210 210 / 50%)",
          marginTop: "1vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: "16px",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              width: "55vw",
              height: "30vh",
              // height: "200px",
              // border: "1px solid gray",
              // borderTopLeftRadius: "100px",
              // borderTopRightRadius: "100px",
              // borderBottomLeftRadius: "100px",
              // borderBottomRightRadius: "100px",

              fontSize: "6vw",
              fontWeight: "-moz-initial",
              color: "#000000a8",
              display: "flex",
              justifyContent: "space-between",
              // gap: "15vw",
              paddingLeft: "-20vw",
              alignItems: "center",
              paddingBottom: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <animated.p
              style={{
                ...slide,
                fontSize: "1vw",
                marginTop: "1vh",
                height: "2vw",
                position: "absolute",
                top: "0",
                // lineHeight: "1.8vw",
              }}
            >
              ① 中国人民银行数字人民币E-CNY发行和专项资金智能合约生成
            </animated.p>
            {transitions((style, item, t, index) =>
              item ? (
                <animated.div
                  key={item.key}
                  style={{
                    // height: "100%",
                    ...style,
                    position: "absolute",
                    left: `${(index + 0.6) * 28.6}%`, // 添加这两行
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100%",
                    }}
                  >
                    {item.key}
                  </div>
                </animated.div>
              ) : null
            )}
            {/* <HomeOutlined /> */}
            <div
              style={{
                width: "8vw",
                height: "8vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "90%" }} src={yinhang} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>发行库</p>
            </div>
            <div
              style={{
                width: "8vw",
                height: "8vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "90%" }} src={dengji} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>登记中心</p>
            </div>
            <div
              style={{
                width: "8vw",
                height: "8vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "90%" }} src={renzheng} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>认证中心</p>
            </div>
            <div
              style={{
                width: "8vw",
                height: "8vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "90%" }} src={shuju} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>数据中心</p>
            </div>
            {/* <div></div> */}
            {/* <HomeOutlined />
          
          <ArrowRightOutlined /> 
          <HomeOutlined />

          <HomeOutlined />

          <HomeOutlined /> */}
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              style={{ marginRight: "1vw" }}
              type="primary"
              onClick={handleClick}
            >
              开始发行
            </Button>
          </div>

          <animated.div
            style={{ ...spring, position: "absolute", left: "26.5vw" }}
          >
            {/* <ArrowDownOutlined style={{ fontSize: "6vw" }} />
             */}
            <div>
              <img
                style={{ width: "4vw", transform: "rotate(90deg)" }}
                src={jiantou}
                alt=""
              />
            </div>
          </animated.div>
          <div
            style={{
              // border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
              position: "relative",
            }}
          >
            {/* <HomeOutlined
              style={{
                fontSize: "10vw",
                // margin: "20vh auto 0",
                display: "block",
              }}
            /> */}
            <div
              style={{
                width: "16vw",
                height: "16vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ width: "90%" }} src={bofu} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>
                国库拨付中心
              </p>
            </div>
            <AlertOutlined
              onClick={() => {
                showModal();
              }}
              type="primary"
              style={{
                // color: "yellow",
                position: "absolute",
                bottom: "1vw",
                left: "1vw",
                zIndex: "9",
                fontSize: "1.8vw",
              }}
            >
              提示
            </AlertOutlined>
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
                        1. 中国人民银行数字人民币E-CNY发行和专项资金智能合约生成
                        <br />
                      </animated.h1>
                      <p style={{ fontSize: "1vw", lineHeight: "1.8vw" }}>
                        {isModalOpen ? (
                          <TypingCard
                            source={
                              "场景角色：本流程中学员将扮演央行的角色。该场景下需要设计数字人民币从“数字人民币发行库”到“数字人民币登记中心”到“数字人民币认证中心”的发行及流转过程，以及“数字人民币大数据中心”对每个流转过程的数据监控过程。<br/><br/>场景流程：“E-CNY数字人民币发行库”发行成乡村振兴的特定批次数字人民币（如：8000万额度，底层编码中记录该数字货币的token信息）后，数字人民币进入“数字人民币等登记中心”，登记相关版本型号、生成时间等相关内容以及乡村振兴数字人民币专项资金智能合约；然后进入“数字人民币认证中心”对本批次相关数字人民币的基本信息进行认证，并批准上市；同时将相关各种信息与编码token传送至“数字人民币大数据中心”加以存储以备日后相关信息监管比对；“大数据中心”将以上相关信息记入中央银行数字人民币监管区块链。<br/><br/>实验操作步骤：学员需要点击该实验流程的“开始发行”来分别模拟中国人民银行数字人民币E-CNY发行和专项资金智能合约生成过程。该步骤完成之后，请点击“下一步”进入下一个实验环节。"
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
          </div>
        </div>
        <div
          style={{
            // width: "22vw",
            // height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "80%",
              border: "3px solid #b18181",
              // margin: "7vh auto",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Account
              title="国库拨付中心"
              height="100%"
              tokenList={[{ key: "token", hash }]}
            >
              <animated.div
                style={{
                  height: "98%",
                  width: "90%",
                  border: "3px solid #b18181",
                  fontSize: "1.2vw",
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgb(210 210 210 / 20%)",
                }}
              >
                <p style={{ height: "5vh", lineHeight: "5vh" }}>本金</p>
                <animated.span>
                  {principal.to((n) => formatNumberWithCommas(n.toFixed(0)))}
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
                {/* <p>应付</p> */}
                {/* <animated.span>{payable.to((n) => n.toFixed(0))}</animated.span> */}
              </div>
            </Account>
            <Button
              onClick={() => {
                next
                  ? navigate("/admin/experimentalCenter/course/interaction2")
                  : message.open({
                      type: "warning",
                      content: "请您先完成流程",
                    });
              }}
              type="primary"
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              下一步
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction1;
