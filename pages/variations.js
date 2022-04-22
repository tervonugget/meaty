// This is the second selection screen.
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
  if (router.asPath === undefined){
    return null
  }

  else if (router.asPath === '/variations?type=ch'){
  return <Container>
    <h2>Select a chicken.</h2>
    <Tile></Tile>
  </Container>
  }

  else if (router.asPath === '/variations?type=co'){
    return <Container>
      <h2>Select a cow.</h2>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/variations?type=pi'){
    return <Container>
      <h2>Select a pig.</h2>
      <Tile></Tile>
    </Container>
  }

  else return <Container>
    <h2>Uh-oh!</h2>
  </Container>
}