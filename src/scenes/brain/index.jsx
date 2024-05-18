import { useGLTF } from '@react-three/drei';
import { React, useLayoutEffect, useRef } from 'react'
import BrainApp from './brainapp'
import gsap from 'gsap'

const Brain = () => {
  return (
    <div>
      <BrainApp />
    </div>
  )
}

useGLTF.preload('./brain/brain.glb')

export default Brain