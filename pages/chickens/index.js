import Image from 'next/image';
import styled from 'styled-components'
import {useRouter} from 'next/router'
import { keyframes } from 'styled-components';
import React, { useState } from 'react';

import { animals, chickens, cows, pigs, weaponsCh, weaponsCoPi, chickenPath } from '../../data/selections';


// Animating chicken
const lowerAnimation = keyframes`
  0% { height: '100%'; width: '100%' };
  100% { transform: translateY(35%) };
`


// Defining variables
let Container = styled.div`
  width: 70%;
  max-width: 500px;
  height: 100vh;

  margin-left: auto;
  margin-right: auto;

  border: 2px red solid;

  display: flex;
  place-content: center;

  .chicken {
    position: absolute;
    top: 21%;
  }

  .chicken:hover {
    cursor: pointer;
    animation: ${lowerAnimation} 2s ease 0.2s;
    animation-fill-mode: forwards;
    filter: drop-shadow(4px 4px 8px red);
  }

  .chickenstuncomp {
    position: absolute;
    top: 35%;
  }

  button {
    position: absolute;
    top: 80%;
    width: 20%;
    height: 90px;
    border-radius: 50%;
    text-transform: uppercase;
    font-weight: bold;
    border: 4px solid red;
    cursor: pointer;
    background-color: white;
  }

  button:hover {
    color: white;
    background-color: red;
  }

`;

let WeaponCont = styled.div`
  position: absolute;
  bottom: 25%;
  opacity: 90%;
  z-index: 9999;
  pointer-events: none;
`;

export default function Chickens(){
  const router = useRouter();

  if (router.asPath === undefined){
    return null;
  }

  else if (router.asPath === '/chickens?type=chba0'){
    return <Container>
      <h2>First stage for chicken 1</h2>
        <WeaponCont>
          <Image src={weaponsCh[0].img} width={250} height={300}/>
        </WeaponCont>
      <div className='chicken' onClick={() => router.push({
        query:{
          type: (chickens[0].route) + (weaponsCh[0].route) + Number(1)
        }
      })}>
        <Image src={chickenPath[0].img} width={100} height={300}/>
      </div>
      <button>Click</button>
    </Container>
  }

  else if (router.asPath === '/chickens?type=chba1'){
    return <div>
      <Container>
        <h2>After user has clicked on chicken 1...</h2>
        <WeaponCont>
          <Image src={weaponsCh[0].img} width={250} height={300} />
        </WeaponCont>
        <div className='chickenstuncomp'>
          <Image src={chickenPath[0].img} width={100} height={300} />
        </div>
      </Container>
    </div>
  }
  
  return <div>
    <h2>Uhoh!</h2>
  </div>
}