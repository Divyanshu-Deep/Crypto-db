import React from "react";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News"
import { useGetCryptosQuery } from "./cryptoApi";
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
    
  if (isFetching) return (<Spin/>);
  return (
    <>
      <Title level={2} className="heading">
        Cryptos
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrency" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total cryptocurrency"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total cryptocurrency"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 cryptos
        </Title>

          <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">
            Show More
            </Link>
          </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>

          <Title level={3} className="show-more">
          <Link to="/news">
            Show More
            </Link>
          </Title>
      </div>
      <News simplified/>
    </>
  );
};

export default Homepage;
