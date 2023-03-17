import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Hero from './Hero';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/Hero',
    component: Hero,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <Hero {...args} />;


  export const Desktop = Template.bind({});
  //@ts-ignore
  Desktop.args = {
    
}


export const Tablet = Template.bind({});
//@ts-ignore
Tablet.args = {
  
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
   
    
    }

      //@ts-ignore
    Mobile.parameters ={
        viewport: {
            defaultViewport: 'iphonex',
          },

          

    }


    export const HeroReverse = Template.bind({});
    //@ts-ignore
    HeroReverse.args = {
      reverse:true
      
      }
      