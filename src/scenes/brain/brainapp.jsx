import React from 'react'
import Experience from './components/experience'
import { Canvas } from '@react-three/fiber'

export default function BrainApp() {
  return (
    <Canvas>
        <Experience />
    </Canvas>
  )
}
