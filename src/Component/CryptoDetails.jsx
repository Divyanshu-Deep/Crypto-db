import React from "react";
import { Typography, Col, Row, Select, Spin } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} from "./cryptoApi";
import LineChart from "./LineChart";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = React.useState("24h");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod});
  
  
  const coinDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const { Title } = Typography;
  const { Option } = Select;

  if (isFetching) return (<Spin/>);
  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {coinDetails.name} ({coinDetails.slug}) Price
        </Title>
        <p>
          {coinDetails.name} live prices in Us Dollars.View Value Statistics and
          Market Cap.
        </p>
      </Col>
      <Select
        defaultValue="24h"
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={millify(coinDetails.price)} coinName={coinDetails.name}/>

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {coinDetails.name}
            {HTMLReactParser(coinDetails.description)}
          </Title>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {coinDetails.name} Links
          </Title>
          {coinDetails.links.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
