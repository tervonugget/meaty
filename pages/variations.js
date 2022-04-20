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
  if (router.asPath === '/variations?type=ch'){
  return <Container>
    <h1>Select a chicken.</h1>
    <Tile></Tile>
  </Container>
  }

  else if (router.asPath === '/variations?type=co'){
    return <Container>
      <h1>Select a cow.</h1>
      <Tile></Tile>
    </Container>
  }
  
  else if (router.asPath === '/variations?type=pi'){
    return <Container>
      <h1>Select a pig.</h1>
      <Tile></Tile>
    </Container>
  }

  else return <Container>
    <h1>Uh-oh!</h1>
  </Container>
}