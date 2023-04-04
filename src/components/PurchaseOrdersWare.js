import React, { useState } from "react";
import { Divider, Select, Col, Button, Popover } from "antd";
import "../Stylesheet/_header.scss";
import CollapseTable from "../Common/CollapsTable";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
const { Option } = Select;

const text = "";
const content = (
  <div>
    <p>Details</p>
    <p>Edit</p>
    <p>Remove</p>
  </div>
);

const columns = [
  {
    title: "CREATED BY",
    dataIndex: "created",
  },
  {
    title: "DATE",
    dataIndex: "date",
  },
  {
    title: "PO#",
    dataIndex: "po",
  },
  {
    title: "VENDOR NAME",
    dataIndex: "vendor",
  },
  {
    title: "THRESHOLD",
    dataIndex: "threshold",
  },
  {
    title: "TOTAL PRICE",
    dataIndex: "price",
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "",
    dataIndex: "emptyDate",
  },
  {
    title: "",
    dataIndex: "emptyStatus",
  },
  {
    title: "",
    dataIndex: "mailIcon",
  },
  {
    title: "",
    dataIndex: "downloadIcon",
  },
  {
    title: "",
    dataIndex: "dots",
  },
];

const subData = [
  {
    key: "1",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Philip Marshall
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "2",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Bianca Fisher
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#D98E00",
          width: "45px",
          fontWeight: "bolder",
        }}
      >
        Yellow
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#DEE3F5",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0047CE", marginLeft: "11px", marginTop: "5px" }}>
          Placed
        </h4>
      </div>
    ),
    // emptyDate: (
    //   <div style={{ fontSize: "14px", color: "#475569", width: "62px",fontWeight:"bold",textAlign:"left", }}>
    //     10/08/22
    //   </div>
    // ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Dropship</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "3",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Louisa Green
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#EDE3CC",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#CE8700", marginLeft: "6px", marginTop: "2px" }}>
          Shipped
        </h4>
      </div>
    ),
    // emptyDate: (
    //   <div style={{ fontSize: "14px", color: "#475569", width: "62px",fontWeight:"bold",textAlign:"left", }}>
    //     10/08/22
    //   </div>
    // ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "4",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Rebecca Gilbert
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#D98E00",
          width: "45px",
          fontWeight: "bolder",
        }}
      >
        Yellow
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#F8E2E2",
          borderRadius: "14px",
          minWidth: "90px",
        }}
      >
        <h4 style={{ color: "#FF0000", marginLeft: "8px" }}>Call vendor</h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "5",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Amber Cooper
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "6",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Jessica Banks
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "7",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "108px",

          fontWeight: "bold",
        }}
      >
        Amber Coleman
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "8",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Ruth Ortiz
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",

          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
  {
    key: "9",
    created: (
      <div
        style={{
          fontSize: "14px",
          color: "#1E293B",
          width: "105px",

          fontWeight: "bold",
        }}
      >
        Jeremy Gray
      </div>
    ),
    date: (
      <div
        style={{
          color: "#475569",
          fontSize: "14px",
          width: "80px",
          height: "16px",
        }}
      >
        09/07/2022
      </div>
    ),
    po: (
      <div
        style={{
          color: "#0057D5",
          fontSize: "14px",
          width: "60px",
          fontWeight: "bold",
        }}
      >
        #123456
      </div>
    ),
    vendor: (
      <h2 style={{ fontSize: "14px", color: "#475569", width: "71px" }}>
        Craftmade
        <p style={{ fontSize: "13px", width: "90px" }}>(528)157-4215</p>
      </h2>
    ),
    threshold: (
      <div
        style={{
          fontSize: "14px",
          color: "#00C64C",
          width: "41px",
          fontWeight: "bolder",
        }}
      >
        Green
      </div>
    ),
    price: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        $1234.00
      </div>
    ),
    status: (
      <div
        className="status"
        style={{
          backgroundColor: "#E2F8F0",
          borderRadius: "14px",
          width: "70px",
        }}
      >
        <h4 style={{ color: "#0BA811", marginLeft: "6px", marginTop: "2px" }}>
          Received
        </h4>
      </div>
    ),
    emptyDate: (
      <div
        style={{
          fontSize: "14px",
          color: "#475569",
          width: "62px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        10/08/22
      </div>
    ),
    emptyStatus: (
      <div
        className="status"
        style={{
          backgroundColor: "#fff",
          borderRadius: "14px",
          width: "85px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h4 style={{ color: "#475569", marginLeft: "6px" }}>Warehouse</h4>
      </div>
    ),
    mailIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-mail"
          style={{ width: "122px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Email purchase order to vendor"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <MailOutlined />
          </Button>
        </Popover>
      </div>
    ),
    downloadIcon: (
      <div style={{ fontSize: "10px", color: "#475569", width: "20px" }}>
        <Popover
          className="pop-download"
          style={{ width: "200px", height: "50px", borderRadius: "5px" }}
          placement="top"
          content="Download to PDF"
          trigger="click"
        >
          <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
            <DownloadOutlined />
          </Button>
        </Popover>
      </div>
    ),

    dots: (
      <Popover
        className="pop-dots"
        style={{ width: "124px", height: "177px" }}
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button style={{ border: "0px solid #E2E8F0", color: "#475569" }}>
          ...
        </Button>
      </Popover>
    ),
  },
];

const data = {
  isCollapseTable: true,
  pageTitle: "PO",
  pageButtonTitle: "",
  collapseButtonTitle: "",
  search: false,
  collapseTableData: [
    {
      id: "1",
      collapseTitle: "",
      collapseSubTitle: "",
      collapseData: subData,
      constraints: false,
    },
  ],
};

export default function PurchaseOrdersWare() {
  return <CollapseTable columns={columns} data={data} showCheckBox />;
}
