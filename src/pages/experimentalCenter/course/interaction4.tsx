import {
  AlertOutlined,
  BellOutlined,
  HeartTwoTone,
  HomeTwoTone,
  PlaySquareTwoTone,
  TransactionOutlined,
} from "@ant-design/icons";
import React, { useEffect, useId, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import Account from "./components/account";
import { Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import bofu from "./image/mortgage.png";
import qiye1 from "./image2/office-building.png";
import qianbao from "./image2/wallet.png";
import qiye2 from "./image2/enterprise.png";
import geren from "./image2/group.png";
import qian from "./image2/money-bag.png";
import { Scrollbar } from "react-scrollbars-custom";
import mp4 from "./image2/WeChat_buzhou3.mp4";
//@ts-ignore
import TypingCard from "./components/TypingCard.tsx";
//@ts-ignore
import { SHA256 } from "crypto-js";
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

function Interaction4() {
  const navigate = useNavigate();
  const [tokenList, setTokenList] = useState<any>([]);
  const [text1, setText1] = useState("");
  const [qian1, setQian1] = useState("50000000");
  const [startNext, setStartNext] = useState(false);

  useEffect(() => {
    generateHash("50000000")
      .then((hash: any) => {
        setTokenList((tokenList: any) => [
          ...tokenList,
          { key: "新优token", hash },
        ]);
      }) // 输出：
      .catch((error) => console.error(error));
    generateHash("35000000")
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

  //数字加载
  const [startAnimation, setStartAnimation] = useState(true);
  const [startAnimation1, setStartAnimation1] = useState(true);
  const { principal } = useSpring({
    from: { principal: 30000000 },

    to: { principal: startAnimation1 ? 30000000 : 5000000 },
    delay: 500,
    duration: 5000,
  });
  const { principal1 } = useSpring({
    from: { principal1: 0 },
    to: { principal1: startAnimation1 ? 50000000 : 75000000 },
    delay: 500,
    duration: 5000,
  });

  const { payable } = useSpring({
    from: { payable: 0 },
    to: { payable: startAnimation1 ? 0 : 0 },
    delay: 500,
    duration: 5000,
  });
  const { payable1 } = useSpring({
    from: { payable1: 0 },
    to: { payable1: startAnimation1 ? 25000000 : 0 },
    delay: 500,
    duration: 5000,
  });
  const { payable2 } = useSpring({
    from: { payable2: 0 },
    to: { payable2: startAnimation ? 5000000 : 0 },
    delay: 500,
    duration: 5000,
  });
  const next = () => {
    console.log(text1, qian1);

    if (
      (text1 == "a52f5677ade179ce801334e1ff26fcd307337a3396" &&
        qian1 == "25000000") ||
      (text1 == "a52f5677ade179ce801334e1ff26fcd307337a3396" &&
        qian1 == "25,000,000")
    ) {
      // navigate("/admin/experimentalCenter/course/interaction4");
      setIsVisible(true);
      setStartAnimation1(false);
      // console.log(1);
      setStartNext(true);
      const date = `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      // @ts-ignore
      const arr = JSON.parse(sessionStorage.getItem("arr"));

      sessionStorage.setItem(
        "arr",
        JSON.stringify([
          ...arr,
          {
            key: Date.now(),
            date,
            sender: "国库中心",
            payee: "集悦集团",
            amount: "25,000,000",
            token: "a52f5677ade179ce801334e1ff26fcd307337a3396",
          },
        ])
      );
    } else {
      // console.log(2);

      message.warning("您输入的token与金额不匹配！");
      // navigate("/admin/experimentalCenter/course/interaction4");
    }
  };
  //开始拨付动画
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const animation = useSpring({
    from: {
      display: "none",
      opacity: 0,
      left: 0,
      top: 0,

      zIndex: "999",
      transform: "translate(0px, 0px)",
    },
    to: async (next) => {
      if (isVisible) {
        await next({
          display: "block",
          opacity: 1,
          transform: "translate(-760px, 210px)",
        });
        await next({
          opacity: 0,
          transform: "translate(-760px, 210px)",
        });
        await next({
          display: "none",
        });
        // setIsVisible(false);
      }
    },
    config: { duration: 1500 },
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
                  3. 拨付专项数字人民币资金到专项资金子钱包
                </animated.h1>
                <p style={{ fontSize: "1vw", lineHeight: "1.8vw" }}>
                  {isModalOpen ? (
                    <TypingCard
                      source={
                        "场景角色：本流程中学员将扮演“国库拨付中心”角色。该场景下“国库拨付中心”拨付对应的乡村振兴资金给对应机构的企业数字人民币账户、个人的数字人民币账户。<br/><br/>场景流程：“国库拨付中心”分别拨付对应的乡村振兴资金到对应机构的企业数字人民币乡村振兴专项子钱包、个人的数字人民币乡村振兴专项子钱包。<br/><br/>实验操作步骤：学员需要分别在拨备中心的转账支付区域，输入对于新优集团的拨备金额50,000,000元，对于集悦集团的拨备金额25,000,000元，对于个人刘琦的拨备金额5,000,000元，以及每个金额相对应的token密钥。"
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
      {/* <animated.p
        style={{
          ...slide,
          fontSize: "1vw",
          marginTop: "1vh",
          height: "2vw",

          // lineHeight: "1.8vw",
        }}
      >
        中国人民银行数字人民币E-CNY发行
      </animated.p> */}
      <div
        style={{
          display: "flex",
          // border: "1px solid gray",
          padding: "18px",
          borderRadius: "16px",
          backgroundColor: "rgb(210 210 210 / 50%)",
          position: "relative",
          marginTop: "2vh",
        }}
      >
        <Button
          onClick={() => {
            //   navigate("/admin/experimentalCenter/course/interaction4");
            // next();
            startNext
              ? navigate("/admin/experimentalCenter/course/interaction5")
              : message.warning("请您先完成流程");
          }}
          type="primary"
          style={{
            position: "absolute",
            bottom: "1.5vw",
            right: "1.5vw",
            zIndex: "9",
          }}
        >
          下一步
        </Button>
        {/* <div>
        <button onClick={handleClick}>开始动画</button>
      </div> */}

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
        ></AlertOutlined>
        <div
          style={{
            width: "65%",
            // border: "1px solid gray",
            height: "72vh",
            position: "relative",
            backgroundColor: "#F5F5F5",
            padding: "16px",
            borderRadius: "16px",
            display: "flex",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1px solid gray",
              flexDirection: "column",
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
              ③ 拨付专项数字人民币资金到专项资金子钱包-2
            </animated.p>
            <div style={{ width: "10vw", height: "12vw" }}>
              {/* <HomeTwoTone style={{ fontSize: "10vw" }} /> */}
              <img src={qianbao} style={{ width: "100%" }} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>资金钱包</p>
            </div>

            <div
              style={{
                width: "20vw",
                height: "50%",
                border: "3px solid #b18181",
                // margin: "7vh auto",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Account
                height="100%"
                title="资金专项钱包"
                tokenList={tokenList}
                tokenEnd
              >
                <animated.div
                  style={{
                    height: "95%",
                    width: "88%",
                    border: "3px solid #b18181",
                    fontSize: "1.2vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>本金</p>
                  {/* {donghua} */}
                  <animated.span style={{}}>
                    {principal1.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </animated.div>
                <div
                  style={{
                    height: "95%",
                    width: "82%",
                    border: "3px solid #b18181",
                    fontSize: "1.2vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>应收</p>

                  <p>国库中心</p>

                  <p>
                    <animated.span style={{}}>
                      {payable1.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                    </animated.span>
                  </p>
                </div>
              </Account>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "3vh",
              // border: "1px solid gray",
            }}
          >
            {/* <PlaySquareTwoTone style={{ fontSize: "10vw" }} /> */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "10vw",
                height: "10vw",
                marginTop: "3vh",
              }}
            >
              <img src={qiye2} style={{ width: "100%" }} alt="" />
              <p style={{ textAlign: "center", fontSize: "1vw" }}>集悦集团</p>
            </div>
            <div
              style={{
                // height: "400px",
                border: "3px solid #b18181",
                width: "15vw",
                height: "32vh",
                padding: "8px",
                backgroundColor: "#F0F8FF",
                // width: "50%",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "#F5F5F5",
                borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                translate: "0 -1.7vh",
                marginTop: "1vh",
                // padding: "16px",
                // width: "300px",
              }}
            >
              {/* <TransactionOutlined style={{ fontSize: "1vw" }} />： */}
              <input
                style={{
                  margin: "1vh auto",
                  height: "15%",
                  width: "90%",
                  // marginTop: "3vh",
                  padding: "8px",

                  borderRadius: "4px",
                  marginBottom: "16px",
                  border: "3px solid #b18181",
                  marginTop: "1vh",
                }}
                onChange={(e) => {
                  setQian1(e.currentTarget.value);
                }}
                type="text"
                placeholder="请输入金额"
              />
              {/* <br></br> */}
              {/* <p style={{ textAlign: "center" }}>tokenID：</p> */}
              <input
                style={{
                  margin: "1vh auto",
                  height: "15%",
                  width: "90%",
                  // marginTop: "3vh",
                  padding: "8px",
                  border: "3px solid #b18181",
                  borderRadius: "4px",
                  marginBottom: "16px",

                  marginTop: "1vh",
                }}
                type="text"
                placeholder="请输入token"
                onChange={(e) => {
                  setText1(e.currentTarget.value);
                }}
              />
              <br></br>
              <Button
                style={{ width: "91%" }}
                // style={{ position: "absolute", left: "15%", bottom: 0 }}
                type="primary"
                onClick={() => {
                  next();
                }}
              >
                开始拨付
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "35%",
            // border: "1px solid gray",
            display: "flex",
            justifyContent: "center",
            gap: "3vh",
            alignItems: "center",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <animated.div
            style={{
              ...animation,
              position: "absolute",
              width: "12vw",
              height: "12vw",
              // backgroundColor: "red",
            }}
            className="animated-div"
          >
            <img src={qian} style={{ width: "100%" }} alt="" />
          </animated.div>
          <div
            style={{
              width: "90%",
              height: "80%",
              border: "3px solid #b18181",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Account
              height="100%"
              title="国库拨付中心"
              tokenList={tokenList}
              tokenEnd
            >
              <animated.div
                style={{
                  height: "97%",
                  width: "87%",
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
                  height: "97%",
                  width: "87%",
                  border: "3px solid #b18181",
                  fontSize: "1.2vw",
                  textAlign: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgb(210 210 210 / 20%)",
                }}
              >
                <p style={{ height: "5vh", lineHeight: "5vh" }}>应付</p>

                <p>
                  新优<br></br>
                  <animated.span style={{ display: "inline-block" }}>
                    {payable.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
                <p>
                  集悦<br></br>
                  <animated.span style={{ display: "inline-block" }}>
                    {payable1.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
                <p>
                  刘琦<br></br>
                  <animated.span style={{ display: "inline-block" }}>
                    {payable2.to((n) => formatNumberWithCommas(n.toFixed(0)))}
                  </animated.span>
                </p>
              </div>
            </Account>
          </div>
          {/* <Button
            style={{ width: "80%" }}
            // style={{ position: "absolute", left: "15%", bottom: 0 }}
            type="primary"
            onClick={() => {
              next();
            }}
          >
            开始拨付
          </Button>
          <div></div>
          <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default Interaction4;
