import Image from "next/image";
import {useRouter} from "next/router";
import styled from "styled-components";

import {animals} from '../data/selections';


// Styled components
let Container = styled.div`
  width: 60%;

  margin-left: 20%;
  margin-bottom: 2rem;

  text-align: center;

  div {
    border: 2px blue solid;
  }

  div:hover {
    background-color: red;
  }
`;


export default function Tile(){
  // Defining variables
  let router = useRouter();
  
  // Check the router's current path and display the corresponsding
  // information from an array in /data/selections.js
  if (router.asPath === '/'){
    return <div>
      <Container>
        <div>
          <h3>{animals[0].title}</h3>
          <Image src={animals[0].img} width='80%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{animals[1].title}</h3>
          <Image src={animals[1].img} width='100%' height='100%' />
        </div>
      </Container>
      <Container>
        <div>
          <h3>{animals[2].title}</h3>
          <Image src={animals[2].img} width='100%' height='80%' />
        </div>
      </Container>
    </div>
  }
  
  return <Container>
    <h3>Uh oh!</h3>
  </Container>
}