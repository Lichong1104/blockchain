import { EuroOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import React, { useState } from "react";
import Image from "../image2/微信图片_20230522162504.png";

function Account({ height, children, tokenList, tokenEnd, title }: any) {
  const handleCopy = (text: any) => {
    const textToCopy = text; // 要复制的文本内容

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          message.success("复制hash成功！");
        })
        .catch(() => {
          fallbackCopyTextToClipboard(textToCopy);
        });
    } else {
      fallbackCopyTextToClipboard(textToCopy);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      message.success("复制hash成功！");
    } catch (error) {
      message.error("复制hash失败，请到悬浮框里手动复制！");
      console.error("Error copying text:", error);
    }

    document.body.removeChild(textArea);
  };
  const [myTokenEnd, setMyTokenEnd] = useState(tokenEnd);
  return (
    <div
      style={{
        height,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
        // backgroundImage: `url(${Image})`,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          height: "4.5vh",
          lineHeight: "4.5vh",
          backgroundColor: "#F5F5F5",
          fontSize: "1.3vw",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            width: "50%",
            height: "100%",
            border: "3px solid rgb(138 55 55 / 50%)",
            borderBottom: "none",
            borderLeft: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "#F5F5F5",
            padding: "8px",
          }}
        >
          {children[0]}
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            border: "3px solid rgb(138 55 55 / 50%)",
            borderBottom: "none",
            borderLeft: "none",
            borderRight: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",

            backgroundColor: "#F5F5F5",
            padding: "8px",
          }}
        >
          {children[1]}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "20px",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
        }}
      >
        <EuroOutlined
          onClick={() => {
            console.log(1);
            setMyTokenEnd(!myTokenEnd);
          }}
        />
      </div>
      {myTokenEnd ? (
        ""
      ) : (
        <div
          style={{
            // height: "30%",
            border: "3px solid rgb(138 55 55 / 50%)",
            width: "91%",
            margin: "1vh auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            overflow: "hidden",
            fontWeight: "500",
          }}
        >
          {tokenList.map((item: any) => {
            return (
              <div key={item.hash}>
                <Tooltip title={item.hash}>
                  <p
                    onClick={() => {
                      handleCopy(item.hash);
                    }}
                    style={{
                      textIndent: "1em",
                      height: "4vh",
                      lineHeight: "4vh",
                      whiteSpace: "nowrap" /* 防止换行 */,
                      overflow: "hidden" /* 隐藏溢出部分 */,
                      textOverflow: "ellipsis",
                      width: "100%",
                      cursor: "pointer",
                      // fontSize: "22px",
                    }}
                  >
                    {item.key}：{item.hash}
                  </p>
                </Tooltip>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
Account.defaultProps = {
  tokenList: [],
  title: "ACCOUNT TITLE",
};
export default Account;
