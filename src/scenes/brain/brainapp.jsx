import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Brain from './components/Brain'

export default function BrainApp() {
  return (
    <Canvas>
        <ambientLight/>
        <OrbitControls enableRotate={true}/>
        <Suspense fallback={null}>
            <Brain />
        </Suspense>
    </Canvas>
  )
}
