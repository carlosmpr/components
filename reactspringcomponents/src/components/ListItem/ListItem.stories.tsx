import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import ListItem from './ListItem';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/ListItem',
    component: ListItem,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <ListItem {...args} />;


  export const Desktop = Template.bind({});
  //@ts-ignore
  Desktop.args = {
   product:{ id: 2,
    image: "https://www.ketohackny.com/_next/image?url=%2Fimages%2Fproducts%2Fmain%2Fempanadas%2Fcordon%2F1.webp&w=1080&q=75",
    name: "Product 2",
    price: 29.99,
    qty: 5,
    shortDescription:
      "This is a short description for Product 2. The text should not be too long.",
  }
}
















