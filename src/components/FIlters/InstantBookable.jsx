import React from 'react'
import Image from 'next/dist/client/image'
import styled from 'styled-components'
import { Text } from '../LayoutComponents'


export default function InstantBookable({instantBookable, setInstantBookable}) {
  return (
    <>
      <label htmlFor="instantBookable">
        <Text filterTitle>Okamžitá rezervace</Text>
        <Image 
            src="/instant-icon.svg" 
            width="1.6rem"
            height="1.6rem"
        />
      </label>

        <Container>
          <select value={String(instantBookable)}name="instantBookable" onChange={(e) => setInstantBookable(e.target.value === "true")}>
            <option value="true">Ano</option>
            <option value="false">Ne</option>
          </select>
        </Container>
    </>
  )
}

const Container = styled.div`

  select{
    width: calc(var(--filter-element-width) + 2rem);
    height: var(--filter-element-height);
    border: var(--border);
    border-radius: var(--border-radius);
    padding-left: var(--smaller-padding);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("/expand_more_black_24dp.svg");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 1.1rem;

    :focus{
      border-color: var(--green);
      outline: none;
    }
  }
`

