import React, { useState } from "react";
import { Button, Modal } from "antd";

function ExperimentalCenterPrinciple() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        style={{ top: "2vw", left: "5vw", bottom: "-30vh" }}
        width={"70vw"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ height: "80vh" }}>
          <iframe
            src="./public/区块链原理实验二.pdf"
            width={"100%"}
            height={"100%"}
            frameBorder="0"
          ></iframe>
        </div>
      </Modal>
      <div style={{ height: "83vh" }} className="prnciple">
        <iframe
          height="95%"
          width="100%"
          src="http://116.204.67.82:8998/"
          frameBorder="0"
        ></iframe>
        <Button type="primary" onClick={showModal}>
          查看区块链原理哈希教程
        </Button>
      </div>
    </div>
  );
}

export default ExperimentalCenterPrinciple;
