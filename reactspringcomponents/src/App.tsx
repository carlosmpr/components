import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/PageLayout/Page/Page';

function App() {
  //@ts-ignore
  const NavbarItems = [
    { title: "Home",  icon:'https://www.ketohackny.com/images/icons/home.svg', href: "" },
    { title: "Products", icon:'https://www.ketohackny.com/images/icons/menu.svg', href: "products" },
    { title: "Contact", icon:'https://www.ketohackny.com/images/icons/email.svg', href: "contact" },
    { title: "My order", icon:'https://www.ketohackny.com/images/icons/tracking.svg', href: "orderstatus" },
    { title: "Cart", icon:'https://www.ketohackny.com/images/icons/shopping-cart.svg', href: "orderstatus" }
  ]
  return (
    //@ts-ignore
    <Page  NavbarItems={NavbarItems}/>
  );
}

export default App;
