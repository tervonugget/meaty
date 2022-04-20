// This is the start of Meaty.
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Tile from '../comps/tile';


// Styled components
let Container = styled.div`
  width: 70%;
  height: 100vh;

  margin-left: 15%;

  border: 2px red solid;
`;


// Page
export default function Index(){
  // Defining variables
  let router = useRouter();

  // Content
  return <Container>
    <h1>Select an animal.</h1>
    <Tile></Tile>
  </Container>
}