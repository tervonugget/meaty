import Image from "next/image";
import {useRouter} from "next/router";
import styled from "styled-components";

import {animals} from '../data/selections';


// Styled components
let Container = styled.div`
  width: 80%;

  margin-left: 10%;
  margin-bottom: 1rem;

  border: 2px blue solid;
  text-align: center;
`;


export default function Tile(){
  // Defining variables
  let router = useRouter();
  
  // Check the router's current path and display the corresponsding
  // information from an array in /data/selections.js
  if (router.asPath === '/'){
    return <div>
      <Container>
        <h3>Chicken</h3>
        <p>{animals[0].title}</p>
      </Container>
      <Container>
        <h3>Cow</h3>
      </Container>
      <Container>
        <h3>Pig</h3>
      </Container>
    </div>
  }
  
  return <Container>
    <h3>Uh oh!</h3>
  </Container>
}