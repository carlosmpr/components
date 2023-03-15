import React from 'react';
import { Meta, storiesOf } from '@storybook/react';

import ProductCard, {ProductCardProps} from './ProductCard';

export default {
    title: 'ProductCard',
    component: ProductCard,
  } as Meta;


  const Template = (args: ProductCardProps) => <ProductCard {...args} />;

  export const Default = Template.bind({});
  //@ts-ignore
  Default.args = {
    title: 'Mac',
    description: 'This is an example of a card component',
    imageSrc: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80',
   price:25,

}

export const Mobile= Template.bind({});
  //@ts-ignore
Mobile.args = {
    //@ts-ignore
  ...Default.args,
  style: {
    width: '300px',
    height: '400px',
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
};




