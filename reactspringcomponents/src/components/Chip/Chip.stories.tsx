import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Chip from './Chip';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/Chip',
    component: Chip,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <Chip {...args} />;


  export const Desktop = Template.bind({});
  //@ts-ignore
  Desktop.args = {
   text:"Home"

}






export const ChipActive = Template.bind({});
//@ts-ignore
ChipActive.args = {
    text:"Home",
    active:"Home"
  
  }







