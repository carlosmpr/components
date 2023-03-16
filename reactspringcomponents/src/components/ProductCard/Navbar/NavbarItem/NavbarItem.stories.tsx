import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import NavbarItem, { NavbarItemsProps } from './NavbarItem';

export default {
    title: 'NavbarItem',
    component: NavbarItem,
  } as Meta;


  const Template = (args: NavbarItemsProps) => <NavbarItem {...args} />;


  export const Default = Template.bind({});
  //@ts-ignore
  Default.args = {
    title: 'Home',
    icon:'https://www.ketohackny.com/images/icons/home.svg',
    href:'https://www.ketohackny.com',
    active:'Home'

}