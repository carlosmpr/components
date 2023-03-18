import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Spinner from './Spinner';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/Spinner',
    component: Spinner,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <Spinner {...args} />;


  export const Default = Template.bind({});
  //@ts-ignore
  Default.args = {
   

}












