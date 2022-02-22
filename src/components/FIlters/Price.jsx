import React from 'react'
import Slider from '@mui/material/Slider';
import styled from 'styled-components'
import { Text } from '../LayoutComponents'

const MIN = 0
const MAX = 99999

export default function Price({priceFrom, setPriceFrom, priceTo, setPriceTo}) {
  return (
    <>
      <Text grey filterTitle>Cena za den</Text>
      <Slider
        sx={{
          color: "var(--green)",
        }}
        value={[priceFrom,priceTo]}
        onChange={(e) => {
          setPriceFrom(e.target.value[0])
          setPriceTo(e.target.value[1])
        }}
        valueLabelDisplay="auto"
        disableSwap
        min={0}
        max={10000}
      />
      <StyledInputs>
        <input type="number" value={priceFrom} min={MIN} max={priceTo} onChange={(e) => {
          setPriceFrom(Number(e.target.value))
        }} />
        <input type="number" value={priceTo} min={MIN} onChange={(e) => {
          setPriceTo(Number(e.target.value))
        }} />
      </StyledInputs>
    </>
  )
}

const StyledInputs = styled.div`
  input{
    font-family: inherit;
    height: var(--filter-element-height);
    width: var(--filter-element-width);
    border: var(--border);
    border-radius: var(--border-radius);
    padding-left: var(--smaller-padding);

    // Hidoing number input arrows
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button{
      // Safari, Edge, Opera
      --webkit-appearance: none !important;
      // Chrome
      display: none;
      // Mozilla
      -moz-appearance: textfield;
    }

    :first-child {
      margin-right: var(--smaller-padding);
    }

    :focus {
      outline: none !important;
      border-color: var(--green)
    }
  }
    
`