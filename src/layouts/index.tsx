import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OneToOneOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, MenuProps, Modal } from "antd";
import { Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { removeToken } from "../utils/tools";

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "/admin", <MailOutlined />),
  getItem("学习中心", "/admin/learnCenter/index", <AppstoreOutlined />),
  getItem("实验中心", "/admin/experimentalCenter", <SettingOutlined />, [
    getItem("区块链原理实验", "/admin/experimentalCenter/principle"),
    getItem("区块链开发实验", "/admin/experimentalCenter/exploitation"),
    // getItem("DAAP在线IDE", "/admin/experimentalCenter/remix"),
    getItem(
      "去中心化金融实验",
      "/admin/experimentalCenter/",
      <OneToOneOutlined />,
      [
        // getItem("去中心化金融应用实验", "/admin/experimentalCenter/test"),
        getItem(
          "多场景下数字人民币的国际大宗商品交易创新服务实验",
          "/admin/experimentalCenter/shuzirenminbi"
        ),
      ]
    ),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Layouts = ({ children }: any) => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("您将会退出登录！");
  const [status, setStatus] = useState(false);
  const [left, setLeft] = useState(235);
  const location = useLocation();

  // sessionStorage.setItem("selectMenu", "/admin");
  // const [selectMenu, setSelectMenu] = useState(
  //   sessionStorage.getItem("selectMenu")
  // );
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("正在退出登录");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      removeToken();
      navigate("/");
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        width={"240px"}
        collapsed={status}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 40,
            margin: "16px auto",
            background: "#001529",
          }}
        >
          <img
            style={{ width: "45px", height: "100%", marginLeft: "20px" }}
            src="https://i.postimg.cc/P5W9X9Nn/Backup-of-Quant-Plus.png"
            alt=""
          />
          {status ? null : (
            <p
              style={{
                color: "#00A6E3",
                float: "right",
                fontSize: "28px",
                fontWeight: "700",
                marginRight: 10,
              }}
            >
              BC Lab+
            </p>
          )}
          {/* {status ? null : (
            <img
              src="https://www.nxnu.edu.cn/banner/logox.png"
              style={{ width: "200px", marginLeft: "20px" }}
              alt=""
            />
          )} */}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname]}
          onOpenChange={onOpenChange}
          items={items}
          onClick={({ key }) => {
            console.log(key);
            navigate(key);
          }}
        />
        {/* <div
          style={{
            height: "200px",
            position: "absolute",
            bottom: 60,
            textAlign: "center",
          }}
        >
          {status ? (
            <img
              style={{
                width: "100%",
                height: "50%",
              }}
              src="https://cdn-icons-png.flaticon.com/512/1456/1456542.png"
              alt=""
            />
          ) : (
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://cdn-icons-png.flaticon.com/512/1456/1456542.png"
              alt=""
            />
          )}
        </div> */}
        <div
          style={{
            color: "white",
            position: "absolute",
            bottom: "2vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => {
            setStatus(!status);
            status ? setLeft(200) : setLeft(80);
          }}
        >
          {status ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: left, transition: ".5s" }}
      >
        <Header
          style={{ height: "6vh", padding: 0, background: colorBgContainer }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "20px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h1
              style={{
                // marginTop: "-1vh",
                fontSize: "1.6vw",
                marginLeft: "20px",
              }}
            >
              区块链学习平台
            </h1>
            <Button
              danger
              onClick={() => {
                showModal();
              }}
            >
              退出登录
            </Button>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,

              background: colorBgContainer,
            }}
          >
            <Modal
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
