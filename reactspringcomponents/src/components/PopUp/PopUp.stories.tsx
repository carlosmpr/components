import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import ShowPopUp from './ShowPopUp';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/PopUp',
    component: ShowPopUp,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <ShowPopUp {...args} />;


  export const Default = Template.bind({});
  //@ts-ignore
  Default.args = {
   

}












