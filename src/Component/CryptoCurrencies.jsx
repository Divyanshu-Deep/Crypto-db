import React from 'react';
import {Link} from "react-router-dom"
import {Card, Row, Col, Input, Spin} from "antd";
import {useGetCryptosQuery} from "../Component/cryptoApi";
import millify from 'millify';
const CryptoCurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data:cryptoList, isFetching} = useGetCryptosQuery(count);
    const [crypto, setCrypto] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    
    React.useEffect(() => {
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCrypto(filterData)
    }, [cryptoList, searchTerm]);

    if(isFetching) return (<Spin/>);

    return (
        <>
       {!simplified && (
            <div className="search-crypto">
            <Input placeholder="Search Cryptos" onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
       )}
        <Row gutter={[32, 32]} className="crypto-card-container">
            {
                crypto?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                    <Link to={`/crypto/${currency.id}`}>
                        <Card
                        title={`${currency.rank}. ${currency.name}`}
                        extra={<img className="crypto-image" alt="crypto updating" src={currency.iconUrl}/>}
                        hoverable
                        >
                            
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}%</p>
                        </Card>
                    </Link>
                    </Col>
                ))
            }

        </Row>
        </>
    )
}

export default CryptoCurrencies
