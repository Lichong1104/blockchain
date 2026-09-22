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
import { Button, Modal, message, Table, Result } from "antd";
import { useNavigate } from "react-router-dom";
import bofu from "./image/mortgage.png";
import qiye1 from "./image2/office-building.png";
import qianbao from "./image2/wallet.png";
import qiye2 from "./image2/enterprise.png";
import geren from "./image2/group.png";
import qian from "./image2/money-bag.png";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Scrollbar } from "react-scrollbars-custom";
import mp4 from "./image2/WeChat_buzhou8.mp4";
//@ts-ignore
import TypingCard from "./components/TypingCard.tsx";

// import geren from "./image2/group.png";
// @ts-nocheck
//@ts-ignore
import { SHA256 } from "crypto-js";

const columns: ColumnsType<any> = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Sender",
    dataIndex: "sender",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // @ts-ignore
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Payee",
    dataIndex: "payee",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (v) => "￥" + v,
  },
  {
    title: "Token",
    dataIndex: "token",
  },
];

const onChange: TableProps<any>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

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

const Interaction8: React.FC = () => {
  // const data = JSON.parse(arr);
  const [data, setData] = useState([]);
  useEffect(() => {
    const arr: any = sessionStorage.getItem("arr");
    setData(JSON.parse(arr));
  }, []);
  const navigate = useNavigate();
  const [tokenList, setTokenList] = useState<any>([]);
  useEffect(() => {
    generateHash("10000")
      .then((hash: any) => {
        setTokenList((tokenList: any) => [
          ...tokenList,
          { key: "集悦token", hash },
        ]);
      }) // 输出：
      .catch((error) => console.error(error));
    // generateHash("35000000")
    //   .then((hash: any) => {
    //     setTokenList((tokenList: any) => [
    //       ...tokenList,
    //       { key: "集悦token", hash },
    //     ]);
    //   }) // 输出：
    //   .catch((error) => console.error(error));
    // generateHash("5000000")
    //   .then((hash: any) => {
    //     setTokenList((tokenList: any) => [
    //       ...tokenList,
    //       { key: "个人token", hash },
    //     ]);
    //   }) // 输出：
    //   .catch((error) => console.error(error));
  }, []);
  function handleRedirectResponse(response: any) {
    if (response.status === 301 || response.status === 302) {
      const redirectUrl = response.headers.get("Location");
      if (redirectUrl) {
        return fetch(redirectUrl);
      }
    }
    return response;
  }

  // fetch("/api/database/relationship")
  //   .then(handleRedirectResponse)
  //   .then((response) => {
  //     // 处理最终的响应
  //   })
  //   .catch((error) => {
  //     // 处理错误
  //   });
  // fetch("/api/database/relationship", {
  //   redirect: "follow",
  // }).then((res) =>
  //   res.json().then((res) => {
  //     console.log(res);
  //   })
  // );
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

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [donghua1, setDonghua1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
    showModal2();
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [donghua2, setDonghua2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  return (
    <div>
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
                  8. 交易数据回流和查询
                </animated.h1>
                <p style={{ fontSize: "1vw", lineHeight: "1.8vw" }}>
                  {isModalOpen ? (
                    <TypingCard
                      source={
                        "场景角色：本流程中学员将扮演“数字人民币大数据中心”的角色<br/><br/>场景描述： ”数字人民币大数据中心“存储有乡村振兴专项数字人民币资金的交易明细数据，用户可以查询不同用户的交易方向和交易明细。<br/><br/>实验操作步骤：<br/>学员查询不同用户的交易方向和交易明细"
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
      <Modal
        style={{ top: "auto", left: "5vw", bottom: "-30vh" }}
        width={"70vw"}
        okText="下一步"
        // title="区块链介绍"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <div
          style={{
            height: "40vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Scrollbar
            style={{
              flex: "1",
              // display: "flex",
              // justifyContent: "end",
              height: "100%",
            }}
          >
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Scrollbar>
        </div>
      </Modal>
      <Modal
        style={{ top: "auto", left: "5vw", bottom: "-30vh" }}
        width={"70vw"}
        okText="确定"
        // title="区块链介绍"
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <Result
          status="success"
          title="恭喜您已经完成所有步骤！"
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button
              onClick={() => {
                navigate("/admin/experimentalCenter/test");
              }}
              type="primary"
              key="console"
            >
              返回
            </Button>,
            <Button
              key="buy"
              onClick={() => {
                handleOk2();
              }}
            >
              确定
            </Button>,
          ]}
        />
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
            // startNext
            //   ? navigate("/admin/experimentalCenter/course/interaction8")
            //   : message.warning("请您先完成流程");
            showModal2();
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
        <div
          style={{
            width: "100%",
            height: "30px",
            // border: "1px solid gray",
            position: "absolute",
            bottom: "-5vh",
            display: "flex",
            justifyContent: "center",
            // opacity: "0",
          }}
        >
          <Button
            onClick={() => {
              showModal1();
              //   navigate("/admin/experimentalCenter/course/interaction4");
              // next();
              // startNext
              //   ? navigate("/admin/experimentalCenter/course/interaction8")
              //   : message.warning("请您先完成流程");
            }}
            type="primary"
            style={{
              // position: "absolute",
              // bottom: "1.5vw",
              // right: "41vw",
              zIndex: "9",
              marginTop: "-10vh",
              marginLeft: "-2vw",
            }}
          >
            查询记录
          </Button>
        </div>

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
            width: "100%",
            // border: "1px solid gray",
            height: "73vh",
            position: "relative",
            backgroundColor: "#F5F5F5",
            padding: "16px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <animated.p
            style={{
              ...slide,
              fontSize: "1vw",
              marginTop: "1vh",
              height: "2vw",
              position: "absolute",

              // lineHeight: "1.8vw",
            }}
          >
            ⑧ 交易数据回流和查询
          </animated.p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "50%",
              marginTop: "5vh",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "15vw",
                height: "90%",
                border: "3px solid #b18181",
                // margin: "7vh auto",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Account
                height="100%"
                title="新优集团"
                tokenList={tokenList}
                tokenEnd
              >
                <animated.div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>本金</p>
                  {/* {donghua} */}
                  <animated.span style={{ fontSize: "1vw" }}>
                    49,900,000
                    {/* {principal1.to((n) => formatNumberWithCommas(n.toFixed(0)))} */}
                  </animated.span>
                </animated.div>
                <div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>应收</p>

                  <p>0</p>

                  <p>
                    <animated.span style={{ fontSize: "1vw" }}></animated.span>
                  </p>
                </div>
              </Account>
            </div>
            <div
              style={{
                width: "15vw",
                height: "90%",
                border: "3px solid #b18181",
                // margin: "7vh auto",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Account
                height="100%"
                title="集悦集团"
                tokenList={tokenList}
                tokenEnd
              >
                <animated.div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>本金</p>
                  {/* {donghua} */}
                  <animated.span style={{ fontSize: "1vw" }}>
                    {/* {principal1.to((n) => formatNumberWithCommas(n.toFixed(0)))} */}
                    25,010,000
                  </animated.span>
                </animated.div>
                <div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>应收</p>

                  <p>0</p>

                  <p>
                    <animated.span style={{ fontSize: "1vw" }}></animated.span>
                  </p>
                </div>
              </Account>
            </div>
            <div
              style={{
                width: "15vw",
                height: "90%",
                border: "3px solid #b18181",
                // margin: "7vh auto",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Account
                height="100%"
                title="刘琦"
                tokenList={tokenList}
                tokenEnd
              >
                <animated.div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>本金</p>
                  {/* {donghua} */}
                  <animated.span style={{ fontSize: "1vw" }}>
                    {/* {principal1.to((n) => formatNumberWithCommas(n.toFixed(0)))} */}
                    5,000,000
                  </animated.span>
                </animated.div>
                <div
                  style={{
                    height: "97%",
                    width: "86%",
                    border: "3px solid #b18181",
                    fontSize: "0.9vw",
                    textAlign: "center",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "rgb(210 210 210 / 20%)",
                  }}
                >
                  <p style={{ height: "5vh", lineHeight: "5vh" }}>应收</p>

                  <p>0</p>

                  <p>
                    <animated.span style={{ fontSize: "1vw" }}></animated.span>
                  </p>
                </div>
              </Account>
            </div>
          </div>
          <div
            style={{
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "15vw" }}>
              <img
                style={{ width: "80%", margin: "0 auto", display: "block" }}
                src={qiye1}
                alt=""
              />
            </div>
            <div style={{ width: "15vw" }}>
              <img
                style={{ width: "80%", margin: "0 auto", display: "block" }}
                src={qiye2}
                alt=""
              />
            </div>
            <div style={{ width: "15vw" }}>
              <img
                style={{ width: "80%", margin: "0 auto", display: "block" }}
                src={geren}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // @ts-ignore
  // <Table columns={columns} dataSource={data} onChange={onChange} />
};

export default Interaction8;
