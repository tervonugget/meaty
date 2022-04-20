import {useRouter} from "next/router";
import styled from "styled-components";


// Styled components
let Container = styled.div`
  width: 80%;

  margin-left: 10%;

  border: 2px blue solid;
`;

export default function Tile(){
  return <Container>
    <h1>Uh oh!</h1>
  </Container>
}