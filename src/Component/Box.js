import React , { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Box(props) {
  const mesh = useRef(null)
  useFrame(() => {
   mesh.current.rotation.y += 0.01
  })


  return (
    <mesh ref={mesh} position={[props.p*3,props.h/2,0]}>
          <boxBufferGeometry attach='geometry' args={[1, props.h, 1]} />
          <meshStandardMaterial color="hotpink" attach='material'/>
    </mesh>
  )
}

export default Box