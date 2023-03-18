import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Button from './Button';
import { INITIAL_VIEWPORTS, } from '@storybook/addon-viewport';

export default {
    title: 'Design System/components/Buttons',
    component: Button,
    parameters: {
        //👇 The viewports object from the Essentials addon
        viewport: {
          //👇 The viewports you want to use
          viewports: INITIAL_VIEWPORTS,
   
     
        },
        
      },
  } as Meta;


  const Template = (args: any) => <Button {...args} />;


  export const Primary = Template.bind({});
  //@ts-ignore
  Primary.args = {
 title: "Show now"   

}






export const Secondary = Template.bind({});
//@ts-ignore
Secondary.args = {
    title: "Shop now" , 
    buttonStyle:"Secondary"

  
  }


  export const Checkout = Template.bind({});
//@ts-ignore
Checkout.args = {
    title: "Checkout" , 
    buttonStyle:"Checkout"

  
  }


 

 



export const Outline = Template.bind({});
  //@ts-ignore
Outline.args = {
    title: "Shop now" , 
   
    buttonStyle:"outline-prymary"
    }




    export const OutlineSecondary = Template.bind({});
  //@ts-ignore
  OutlineSecondary.args = {
    title: "Shop now" , 
   
    buttonStyle:"outline-secondary"
    }




    export const SmallButton = Template.bind({});
    //@ts-ignore
    SmallButton.args = {
      title: "Shop now" , 
      buttonForm: "SmallButton"
      
      }
  
 
 
    


