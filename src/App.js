import logo from './logo.svg';
import './App.css';
import { Canvas } from 'react-three-fiber'
import Box  from './Component/Box'
import { OrbitControls } from 'drei';
import { useRef } from 'react';

function App() {
  const canvas = useRef()
  const sizes = [
    {
      h:1,
      p: -4
    },
    {
      h:5,
      p: -3
    },
    {
      h:6,
      p: -2
    },
    {
      h:8,
      p: -1
    },
    {
      h:9,
      p: 0
    },
    {
      h:1,
      p: 1
    },
    {
      h:5,
      p: 2
    },
    {
      h:6,
      p: 3
    },
    {
      h:8,
      p: 4
    },
    {
      h:9,
      p: 5
    }
  ]


  async function ch() {
    //console.log(canvas.current.children[1].position.x);
    console.log(sizes);

    for(let i=1;i<sizes.length;i++) {
      for(let j=0;j<sizes.length-i;j++) {
        if(sizes[j].h > sizes[j+1].h) {
          let temp = sizes[j].h
          sizes[j].h = sizes[j+1].h
          sizes[j+1].h = temp


          let tempP = canvas.current.children[j].position.x
          canvas.current.children[j].position.x = canvas.current.children[j+1].position.x
          canvas.current.children[j+1].position.x = tempP


          await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('foo')
            }, 1000)
          })
        }
      }
    }
    console.log(sizes);

  }

  return (
    <div className="App">
     <Canvas camera={{ position: [-5,2, 10], fov: 60 }}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <group ref={canvas} name='canvas'>
          {sizes.map((size, e) => {
            return <Box h={size.h} p={size.p} />
          })}
        </group>
        
        {/* <Box h='1' w='4' l='3' /> */}
      <OrbitControls />
     </Canvas>
     <button onClick={ch}>Check</button>

    </div>
  );
}

export default App;
