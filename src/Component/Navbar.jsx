import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography} from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const {Title} = Typography;
const Navbar = () => {
const[activeMenu, setActiveMenu ] = React.useState(true);
const[screenSize, setScreenSize] = React.useState(null);

React.useEffect(()=>{
  const handleResize = () => setScreenSize(window.innerWidth);

  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize) 
}, [])

React.useEffect(()=>{
  if(screenSize < 768){
    setActiveMenu(false);
  }
  else {
    setActiveMenu(true);
  }
}, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoWorld</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />} >
          <Link to="/cryptocurrencies" >Crypto Currencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MenuOutlined />} >
          <Link to="/news" >News</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
