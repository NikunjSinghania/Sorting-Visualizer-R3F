import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber'
import Box  from './Component/Box'
import { OrbitControls } from 'drei';
import { useEffect, useRef, useState } from 'react';

function App() {
  const canvas = useRef()

  const [sizes, updateSizes ] = useState([
    {
      h:9,
      p: -4
    },
    {
      h:8,
      p: -3
    },
    {
      h:7,
      p: -2
    },
    {
      h:6,
      p: -1
    },
    {
      h:5,
      p: 0
    },
    {
      h:4,
      p: 1
    },
    {
      h:3,
      p: 2
    },
    {
      h:2,
      p: 3
    },
    {
      h:1,
      p: 4
    },
    {
      h:20,
      p: 5
    }
  ])
  
  

  async function bubble() {
    for(let i=1;i<sizes.length;i++) {
      for(let j=0;j<sizes.length-i;j++) {
        if(sizes[j].h > sizes[j+1].h) {
          let temp = sizes[j].h
          sizes[j].h = sizes[j+1].h
          sizes[j+1].h = temp

          canvas.current.children[j].position.x = sizes[j+1].p*3
          canvas.current.children[j+1].position.x = sizes[j].p*3
          
          let obj1 = canvas.current.children[j]
          canvas.current.children[j] = canvas.current.children[j+1]
          canvas.current.children[j+1] = obj1

          await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('foo')
            }, 500)
          })
        }
      }
    }
  }
  

  return (
    <div className="App">
     <Canvas camera={{ position: [-5,2, 10], fov: 60 }}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <group ref={canvas} name='canvas'>
          {sizes.map((size, e) => {
            return <Box h={size.h} p={size.p} key={e} />
          })}
        </group>
        
      <OrbitControls />
     </Canvas>
     <button onClick={bubble}>Bubble Sort</button>
    </div>
  );
}

export default App;
