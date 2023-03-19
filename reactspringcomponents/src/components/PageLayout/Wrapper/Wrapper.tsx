import React from 'react'
import styles from './Wrapper.module.css'
import Spacer from '../../Spacer/Spacer';
interface WrapperProps {
    children?: JSX.Element | JSX.Element[];
  }
export default function Wrapper({children}:WrapperProps) {
  return (
    <div className={styles.Wrapper}>

        {children}
        <Spacer />
    </div>
  )
}
