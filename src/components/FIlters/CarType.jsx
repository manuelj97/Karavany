import React from 'react'
import styled from "styled-components"
import { Text, TextSmaller } from '../LayoutComponents'


export default function CarType({carType, label, desc, setCarType}) {
  return (
    <Container>
        <button onClick={() => setCarType(carType)}>
          <Text>{label}</Text>
          <TextSmaller grey>{desc}</TextSmaller>
        </button>
    </Container>
  )
}

const Container = styled.div`
    width: 17rem;
    height: 10rem;
    margin-right: var(--smaller-padding);
    text-align: center;
    font-size: clamp(.7rem,.5vw,1rem);

    button {
      padding-top: 1rem;
      padding: 0;
      border: .1rem solid var(--beige);
      border-radius: .8rem;
      padding: .8rem 1.5rem;
      transition: .1s ease-out;
      background-color: transparent;
      width: 100%;
      height:100%;

      :hover {
        border: .2rem solid var(--green);
        cursor: pointer;
      }
    }
`
