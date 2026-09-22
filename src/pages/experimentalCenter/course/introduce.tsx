import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import img from "./image/nasa-Q1p7bh3SHj8-unsplash.jpg";
import laoshi from "./image/teacher.png";
import { Scrollbar } from "react-scrollbars-custom";
import mp4 from "./image2/WeChat_20230522173849.mp4";
import liucheng from "./image2/WeChat_liucheng.mp4";

//@ts-ignore
import TypingCard from "./components/TypingCard.tsx";
import { AlertOutlined } from "@ant-design/icons";

function Introduce() {
  const navigate = useNavigate();
  const slide = useSpring({
    from: { transform: "translateY(20%)", opacity: 0 }, // 起始值
    to: { transform: "translateY(0)", opacity: 1 }, // 结束值
    config: { duration: 800, delay: 110 },
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
    // @ts-ignore
    videoRef.current.pause();
  };

  const handleOk = () => {
    setIsModalOpen(false);
    showModal1();
    // @ts-ignore
    videoRef.current.pause();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // showModal1();
    // @ts-ignore
    videoRef.current.pause();
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
    // videoRef.current.pause();
    // @ts-ignore
    videoRef1.current.pause();
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
    // @ts-ignore
    videoRef1.current.pause();
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
    // @ts-ignore
    videoRef1.current.pause();
  };

  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "rgb(210 210 210)",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "82vh",
          backgroundSize: "cover",
          position: "relative",
          borderRadius: "16px",
        }}
      >
        {/* <img
        style={{ width: "100%", zIndex: -1, float: "left" }}
        src={img}
        alt=""
      /> */}
        <animated.div
          style={{
            margin: "0 auto",
            // width: "70vw",
            padding: "30px",
            height: "200px",
            // border: "1px solid black",
          }}
        >
          <animated.h1
            style={{
              ...slide,
              fontSize: "2vw",
              textAlign: "center",
              color: "gray",
              marginTop: "5vh",
            }}
          >
            区块链乡村振兴财政仿真项目
          </animated.h1>

          <animated.p style={{ ...slide, fontSize: "1.5vw" }}></animated.p>
          <animated.h1
            style={{ ...slide, fontSize: "1.5vw", margin: "10px 0" }}
          >
            区块链技术介绍
          </animated.h1>
          <animated.p
            style={{
              ...slide,
              fontSize: "1.2vw",
              lineHeight: "2.8vw",
              color: "gray",
              // textIndent:''
              padding: "5vw",
              paddingTop: "0",
              textIndent: "3rem",
            }}
          >
            区块链技术是一种去中心化的分布式账本技术，它的主要特点是安全、透明、不可篡改和去中心化。区块链技术的应用非常广泛，包括金融、物流、医疗、能源、政府等行业。区块链技术的发展历史可以追溯到比特币的出现，随着时间的推移，区块链技术不断发展壮大，逐渐成为了一个独立的技术领域。区块链技术的应用空间非常广泛，可以用于数字货币、智能合约、供应链管理、身份认证等领域。未来，随着区块链技术的不断发展和完善，它将会在更多的领域得到应用，为人们的生活带来更多的便利和创新。
          </animated.p>
          <br />
          <animated.p style={{ ...slide, fontSize: "18px" }}></animated.p>
          <animated.p style={{ ...slide, fontSize: "18px" }}></animated.p>
          <animated.p style={{ ...slide, fontSize: "18px" }}></animated.p>
        </animated.div>
        <AlertOutlined
          onClick={() => {
            showModal();
          }}
          style={{
            color: "yellow",
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
          okText="下一步"
          // title="区块链介绍"
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
                    实验背景介绍
                  </animated.h1>
                  <p
                    style={{
                      fontSize: "1vw",
                      lineHeight: "1.8vw",
                    }}
                  >
                    {isModalOpen ? (
                      <TypingCard
                        source={
                          "区块链本身只是一种技术，传统的实验或者是无法体现区块链这种金融科技的特点，或者是过于偏向编程和密码学的概念，经济、管理类专业的同学对其无法理解和掌握。因此本项目将区块链与具体的行业应用相结合，构建了以经济社会发展为基础的信任互联网，将政府资金运用纳入金融科技业务的全面监管。实验完全按照当前脱贫县的具体情况设计，本年的地方财政收入仅有8000万元，但是当年需要支付的金额需要1.2亿元，存在4000万的资金缺口，中央人民政府通过数字人民币的发行，向脱贫县提供财政资金支持，用来促进贸易的流通和经济的发展。"
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
            <div style={{ width: "40%" }}>
              <video
                ref={videoRef1}
                style={{ height: "100%", width: "100%" }}
                src={liucheng}
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
                  justifyContent: "end",
                }}
              >
                <div style={{ width: "90%", marginRight: "1vw" }}>
                  <br />
                  <animated.h1
                    style={{ ...slide, fontSize: "26px", margin: "10px 0" }}
                  >
                    实验背景介绍
                  </animated.h1>
                  <p style={{ fontSize: "1vw" }}>
                    <TypingCard
                      source={
                        " 本实验共包含八个步骤流程：<br/>本次实验学员将在不同场景扮演不同的角色，<br/>通过步骤化的实验操作，模拟区块链技术和数字人民币业务在乡村振兴财政中的各种流程，了解该业务的具体支付和转账业务模式，深入理解区块链技术在这个业务场景下的应用细节。<br/>1. 中国人民银行数字人民币E-CNY发行和专项资金智能合约生成 <br/>2. 通知地方人民政府和监管机构合约信息<br/> 3. 拨付专项数字人民币资金到专项资金子钱包<br/> 4.  企业接收数字人民币专项资金流程<br/> 5. 个人接收数字人民币专项资金流程 <br/>6. 企业通过数字人民币支付员工工资 <br/>7. 个人通过数字人民币支付商品货款流程<br/>8. 交易数据回流和查询 请点击下一步进入第1个实验流程。"
                      }
                    />
                  </p>
                </div>
              </div>
            </Scrollbar>
          </div>
        </Modal>
        <Button
          onClick={() => {
            navigate("/admin/experimentalCenter/course/interaction1");
          }}
          type="primary"
          style={{ position: "absolute", bottom: 20, right: 20 }}
        >
          下一步
        </Button>
      </div>
    </div>
  );
}

export default Introduce;
