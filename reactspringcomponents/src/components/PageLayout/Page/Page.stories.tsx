import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Page from './Page';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/PageLayout/Page',
    component: Page,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <Page {...args} />;


  export const Desktop = Template.bind({});
  //@ts-ignore
  Desktop.args = {
   
    NavbarItems: [
      { title: "Home",  icon:'https://www.ketohackny.com/images/icons/home.svg', href: "" },
      { title: "Products", icon:'https://www.ketohackny.com/images/icons/menu.svg', href: "products" },
      { title: "Contact", icon:'https://www.ketohackny.com/images/icons/email.svg', href: "contact" },
      { title: "My order", icon:'https://www.ketohackny.com/images/icons/tracking.svg', href: "orderstatus" },
      { title: "Cart", icon:'https://www.ketohackny.com/images/icons/shopping-cart.svg', href: "orderstatus" }
    ]
}


export const DesktopReverse = Template.bind({});
//@ts-ignore
DesktopReverse.args = {
  reverse:true,
  NavbarItems: [
    { title: "Home",  icon:'https://www.ketohackny.com/images/icons/home.svg', href: "" },
    { title: "Products", icon:'https://www.ketohackny.com/images/icons/menu.svg', href: "products" },
    { title: "Contact", icon:'https://www.ketohackny.com/images/icons/email.svg', href: "contact" },
    { title: "My order", icon:'https://www.ketohackny.com/images/icons/tracking.svg', href: "orderstatus" },
    { title: "Cart", icon:'https://www.ketohackny.com/images/icons/shopping-cart.svg', href: "orderstatus" }
  ]

}



export const Tablet = Template.bind({});
//@ts-ignore
Tablet.args = {
  NavbarItems: [
    { title: "Home",  icon:'https://www.ketohackny.com/images/icons/home.svg', href: "" },
    { title: "Products", icon:'https://www.ketohackny.com/images/icons/menu.svg', href: "products" },
    { title: "Contact", icon:'https://www.ketohackny.com/images/icons/email.svg', href: "contact" },
    { title: "My order", icon:'https://www.ketohackny.com/images/icons/tracking.svg', href: "orderstatus" },
    { title: "Cart", icon:'https://www.ketohackny.com/images/icons/shopping-cart.svg', href: "orderstatus" }
  ]
  
  }

    //@ts-ignore
  Tablet.parameters ={
      viewport: {
          defaultViewport: 'ipad',
        },

 
  }



export const Mobile = Template.bind({});
  //@ts-ignore
Mobile.args = {
  NavbarItems: [
    { title: "Home",  icon:'https://www.ketohackny.com/images/icons/home.svg', href: "" },
    { title: "Products", icon:'https://www.ketohackny.com/images/icons/menu.svg', href: "products" },
    { title: "Contact", icon:'https://www.ketohackny.com/images/icons/email.svg', href: "contact" },
    { title: "My order", icon:'https://www.ketohackny.com/images/icons/tracking.svg', href: "orderstatus" },
    { title: "Cart", icon:'https://www.ketohackny.com/images/icons/shopping-cart.svg', href: "orderstatus" }
  ]
    
    }

      //@ts-ignore
    Mobile.parameters ={
        viewport: {
            defaultViewport: 'iphonex',
          },

          

    }


