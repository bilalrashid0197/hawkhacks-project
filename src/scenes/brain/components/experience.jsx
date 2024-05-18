import { OrbitControls, ScrollControls, useGLTF } from '@react-three/drei'
import Brain from './Brain'
import React from 'react'

export default function Experience() {
  return (
    <>
        <ambientLight intensity={1}/>
        <OrbitControls/>
        <Brain />
    </>
    
  )
}
