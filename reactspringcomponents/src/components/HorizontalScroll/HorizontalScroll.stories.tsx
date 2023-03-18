import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import TextSlider from './TextSlider';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/HorizontalScroll/TextSlider',
    component: TextSlider,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <TextSlider {...args} />;


  export const Desktop = Template.bind({});
  //@ts-ignore
  Desktop.args = {
    active:"Offers",
   elements:[
    "Offers",
    "Empanadas",
    "Pizzas",
    "Lasagnas",
    "Desserts",
    "Breakfast",
  ],

 

}




export const Tablet = Template.bind({});
//@ts-ignore
Tablet.args = {
    active:"Offers",
    elements:[
     "Offers",
     "Empanadas",
     "Pizzas",
     "Lasagnas",
     "Desserts",
     "Breakfast",
   ],
  
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
    active:"Offers",
    elements:[
     "Offers",
     "Empanadas",
     "Pizzas",
     "Lasagnas",
     "Desserts",
     "Breakfast",
   ],
    
    }

      //@ts-ignore
    Mobile.parameters ={
        viewport: {
            defaultViewport: 'iphonex',
          },

          

    }





