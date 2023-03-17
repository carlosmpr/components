import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Content from '../Content/Content'
import Hero from '../../Hero/Hero'
import "../../../index.css"
//@ts-ignore
export default function Page() {
  return (
   <Wrapper>
        <Content >
              <Hero />
            </Content>
   </Wrapper>
  )
}
