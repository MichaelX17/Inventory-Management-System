// components/auth/LucidDreamBackground.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'

export const LucidDreamBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x8540b,
          midtoneColor: 0x7d0c95,
          lowlightColor: 0xdf84f7,
          baseColor: 0xffffff,
          blurFactor: 0.3,
          speed: 0.5,
          zoom: 0.4,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full h-full z-10"
    />
  )
}
