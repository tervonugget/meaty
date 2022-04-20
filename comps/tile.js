import Image from "next/image";
import {useRouter} from "next/router";
import styled from "styled-components";

import {animals, chickens, cows, pigs} from '../data/selections';


// Styled components
let Container = styled.div`
  width: 60%;

  margin-left: 20%;
  margin-bottom: 2rem;

  text-align: center;

  div {
    border: 5px black solid;
    border-radius: 20px;
    box-shadow: 4px 2px #111111;
  }

  div:hover {
    background-color: rgba(256, 0, 0, 0.3);
    border: 5px red solid;
    box-shadow: 4px 2px red;
    color: white;
    cursor: pointer;
  }
`;


export default function Tile(){
  // Defining variables
  let router = useRouter();
  
  // SELECT AN ANIMAL
  // Check the router's current path and display the corresponsding
  // information from an array in /data/selections.js
  if (router.asPath === '/'){
    return <div>
      <Container onClick={() => router.push({
        pathname: '/variations',
        query:{
          type: (animals[0].route)
        }
      })}>
        <div>
          <h3>{animals[0].title}</h3>
          <Image src={animals[0].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/variations',
        query: {
          type: (animals[1].route)
        }
      })}>
        <div>
          <h3>{animals[1].title}</h3>
          <Image src={animals[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/variations',
        query: {
          type: (animals[2].route)
        }
      })}>
        <div>
          <h3>{animals[2].title}</h3>
          <Image src={animals[2].img} width='100%' height='80%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A CHICKEN
  // If user selects chicken, show chicken variants
  else if (router.asPath === '/variations?type=ch'){
    return <div>
    <Container>
        <div>
          <h3>{chickens[0].title}</h3>
          <Image src={chickens[0].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{chickens[1].title}</h3>
          <Image src={chickens[1].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{chickens[2].title}</h3>
          <Image src={chickens[2].img} width='80%' height='100%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A COW
  // If user selects cow, show cow variations
  else if (router.asPath === '/variations?type=co') {
    return <div>
      <Container>
        <div>
          <h3>{cows[0].title}</h3>
          <Image src={cows[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{cows[1].title}</h3>
          <Image src={cows[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{cows[2].title}</h3>
          <Image src={cows[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  // SELECT A PIG
  // If user selects pig, show pig variations
  else if (router.asPath === '/variations?type=pi') {
    return <div>
      <Container>
        <div>
          <h3>{pigs[0].title}</h3>
          <Image src={pigs[0].img} width='100%' height='80%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{pigs[1].title}</h3>
          <Image src={pigs[1].img} width='100%' height='80%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{pigs[2].title}</h3>
          <Image src={pigs[2].img} width='100%' height='80%' />
        </div>
      </Container>
    </div>
  }

  
  return <Container>
    <h3>Uh oh!</h3>
  </Container>
}