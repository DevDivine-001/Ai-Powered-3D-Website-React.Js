import { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      opacity={0.1} // Lower opacity for lighter shadows
      blend={100} // Adding blend to create smoother, lighter shadows
    >
      <RandomizedLight
        amount={2}
        radius={8} // Larger radius for more diffuse and soft shadows
        intensity={0.5} // Lower intensity for a subtler effect
        ambient={0.7} // Higher ambient light for better text visibility
        position={[5, 5, -10]}
        bias={0.002} // Slight bias to reduce sharp shadow edges
      />
      <RandomizedLight
        amount={2}
        radius={6} // Similar diffuse effect on the other light
        intensity={0.25} // Lower intensity on the second light
        ambient={0.8} // Higher ambient to further soften shadows
        position={[-5, 5, -9]}
        bias={0.002}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;


