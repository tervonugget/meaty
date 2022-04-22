import Image from "next/image";
import {useRouter} from "next/router";
import styled from "styled-components";

import {animals, chickens, cows, pigs, weaponsCh, weaponsCoPi} from '../data/selections';


// Styled components
let Container = styled.div`
  width: 60%;

  margin-left: 20%;
  margin-bottom: 1rem;

  text-align: center;

  div {
    border: 5px black solid;
    border-radius: 20px;
    box-shadow: 4px 2px #111111;
    height: 200px;
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
  if (router.asPath === undefined) {
    return null
  }
  
  else if (router.asPath === '/'){
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
          <Image src={animals[2].img} width='100%' height='80%%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A CHICKEN
  // If user selects chicken, show chicken variants
  else if (router.asPath === '/variations?type=ch'){
    return <div>
    <Container onClick={() => router.push({
      pathname: '/weapons',
      query: {
        type: (animals[0].route) + (chickens[0].route)
      }
    })}>
        <div>
          <h3>{chickens[0].title}</h3>
          <Image src={chickens[0].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[0].route) + (chickens[1].route)
        }
      })}>
        <div>
          <h3>{chickens[1].title}</h3>
          <Image src={chickens[1].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[0].route) + (chickens[2].route)
        }
      })}>
        <div>
          <h3>{chickens[2].title}</h3>
          <Image src={chickens[2].img} width='80%' height='100%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A COW
  // If user selects cow, show cow variations
  else if (router.asPath === '/variations?type=co'){
    return <div>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[1].route) + (cows[0].route)
        }
      })}>
        <div>
          <h3>{cows[0].title}</h3>
          <Image src={cows[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[1].route) + (cows[1].route)
        }
      })}>
        <div>
          <h3>{cows[1].title}</h3>
          <Image src={cows[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[1].route) + (cows[2].route)
        }
      })}>
        <div>
          <h3>{cows[2].title}</h3>
          <Image src={cows[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  // SELECT A PIG
  // If user selects pig, show pig variations
  else if (router.asPath === '/variations?type=pi'){
    return <div>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[2].route) + (pigs[0].route)
        }
      })}>
        <div>
          <h3>{pigs[0].title}</h3>
          <Image src={pigs[0].img} width='100%' height='80%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[2].route) + (pigs[1].route)
        }
      })}>
        <div>
          <h3>{pigs[1].title}</h3>
          <Image src={pigs[1].img} width='100%' height='80%' />
        </div>
      </Container>
      <Container onClick={() => router.push({
        pathname: '/weapons',
        query: {
          type: (animals[2].route) + (pigs[2].route)
        }
      })}>
        <div>
          <h3>{pigs[2].title}</h3>
          <Image src={pigs[2].img} width='100%' height='80%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A WEAPON FOR THE CHICKEN
  // Show the weapons for the chicken path
  else if (router.asPath === '/weapons?type=chch'){
    return <div>
      <Container onClick={() => router.push({
        pathname: 'chickens',
        query:{
          type: (chickens[0].route) + (weaponsCh[0].route) + Number(0)
        }
      })}>
        <div>
          <h3>{weaponsCh[0].title}</h3>
          <Image src={weaponsCh[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[1].title}</h3>
          <Image src={weaponsCh[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[2].title}</h3>
          <Image src={weaponsCh[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  else if (router.asPath === '/weapons?type=chch2'){
    return <div>
      <Container>
        <div>
          <h3>{weaponsCh[0].title}</h3>
          <Image src={weaponsCh[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[1].title}</h3>
          <Image src={weaponsCh[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[2].title}</h3>
          <Image src={weaponsCh[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  else if (router.asPath === '/weapons?type=chch3'){
    return <div>
      <Container>
        <div>
          <h3>{weaponsCh[0].title}</h3>
          <Image src={weaponsCh[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[1].title}</h3>
          <Image src={weaponsCh[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCh[2].title}</h3>
          <Image src={weaponsCh[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }

  // SELECT A WEAPON FOR THE COW
  // Show the weapons for the cow path
  else if (router.asPath === '/weapons?type=cocow'){
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  else if (router.asPath === '/weapons?type=cocow2'){
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  else if (router.asPath === '/weapons?type=cocow3'){
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }

  // SHOW THE WEAPONS FOR THE PIG PATH
  else if (router.asPath === '/weapons?type=pipi') {
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  
  else if (router.asPath === '/weapons?type=pipi2') {
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }
  else if (router.asPath === '/weapons?type=pipi3') {
    return <div>
      <Container>
        <div>
          <h3>{weaponsCoPi[0].title}</h3>
          <Image src={weaponsCoPi[0].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[1].title}</h3>
          <Image src={weaponsCoPi[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{weaponsCoPi[2].title}</h3>
          <Image src={weaponsCoPi[2].img} width='100%' height='100%' />
        </div>
      </Container>
    </div>
  }

  
  return <Container>
    <h3>Uh oh!</h3>
  </Container>
}