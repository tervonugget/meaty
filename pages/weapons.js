// This is the third and final selection screen.
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Tile from '../comps/tile';


// Styled components
let Container = styled.div`
  width: 70%;
  max-width: 500px;
  height: 100vh;

  margin-left: auto;
  margin-right: auto;

  border: 2px red solid;
`;


// Page
export default function Index() {
  // Defining variables
  let router = useRouter();

  // Content
  // If the selection is chicken > chicken 1, chicken 2, or chicken 3...
  if (router.asPath === undefined) {
    return null
  }

  else if (router.asPath === '/weapons?type=chch'){
    return <Container>
      <h2>Chicken 1 Weapons</h2>
      <Tile></Tile>
    </Container>
  }

  else if (router.asPath === '/weapons?type=chch2'){
    return <Container>
      <h2>Chicken 2 Weapons</h2>
      <Tile></Tile>
    </Container>
  }

  else if (router.asPath === '/weapons?type=chch3'){
    return <Container>
      <h2>Chicken 3 Weapons</h2>
      <Tile></Tile>
    </Container>
  }

  // If the selection is cow > cow 1, cow 2, or cow 3...
  else if (router.asPath === '/weapons?type=cocow'){
    return <Container>
      <h2>Cow 1 Weapons</h2>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/weapons?type=cocow2') {
    return <Container>
      <h2>Cow 2 Weapons</h2>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/weapons?type=cocow3') {
    return <Container>
      <h2>Cow 3 Weapons</h2>
      <Tile></Tile>
    </Container>
  }
  
  // If the selectoin is pig > pig 1, pig 2, or pig 3...
  else if (router.asPath === '/weapons?type=pipi'){
    return <Container>
      <h2>Pig 1 Weapons</h2>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/weapons?type=pipi2'){
    return <Container>
      <h2>Pig 2 Weapons</h2>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/weapons?type=pipi3'){
    return <Container>
      <h2>Pig 3 Weapons</h2>
      <Tile></Tile>
    </Container>
  }

  return <Container>
    <h2>Uh oh!</h2>
    <Tile></Tile>
  </Container>
}