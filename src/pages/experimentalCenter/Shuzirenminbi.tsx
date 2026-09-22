import React, { useState } from "react";
import { Alert, Space, Spin } from "antd";
function Shuzirenminbi() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ height: "85vh", position: "relative", overflow: "hidden" }}>
      {loading ? (
        <Spin tip="Loading..." size="large">
          <Alert
            message="正在加载..."
            description="首次打开可能加载时间过长，请耐心等待"
            type="info"
          />
        </Spin>
      ) : null}
      <iframe
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          right: 0,
        }}
        src="https://szrmb.netlify.app/"
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe>
      {/* <iframe
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          right: 0,
        }}
        src="http://192.168.8.24:5173/"
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe> */}
    </div>
  );
}

export default Shuzirenminbi;
