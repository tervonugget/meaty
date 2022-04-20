// This is the start of Meaty.
import {useRouter} from 'next/router';
import styled from 'styled-components';


// Styled Components
let Container = styled.div`
  width: 60%;
  height: 100vh;

  margin-left: 20%;

  border: 2px red solid;
`;


// Page
export default function Index(){
  // Defining variables
  let router = useRouter();

  // Content
  return <Container>
    <h1>Select an animal.</h1>

  </Container>
}