import React, { useState } from 'react'
import styled from 'styled-components'

import { Text, BorderedContainer } from '../LayoutComponents'
import { PageWrapper } from '../../../pages'
import InstantBookable from "./InstantBookable"
import Price from "./Price"
import CarTypeButtons from './CarTypeButtons'

export default function Filters({setPriceFrom, setPriceTo, priceTo, priceFrom, setInstantBookable, instantBookable, setCarType}) {
  return (
        <BorderedContainer>
          <PageWrapper>
            <FilterGrid>
              <FilterBlock>
                <Price setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} priceTo={priceTo} priceFrom={priceFrom}/>
              </FilterBlock>
              <FilterBlock>
                  <Text grey filterTitle>Typ karavanu</Text>
                  <CarTypeButtons setCarType={setCarType} />
              </FilterBlock>
              <FilterBlock>
                <InstantBookable instantBookable={instantBookable} setInstantBookable={setInstantBookable} />
              </FilterBlock>
            </FilterGrid>
          </PageWrapper>
        </BorderedContainer>
  )
}

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: .7fr 2fr .7fr;

  @media screen and (max-width: 644px) {
    grid-template-columns: 1fr;
  }
`

const FilterBlock = styled.div`
  padding-bottom: var(--default-padding);
  padding-right: var(--default-padding);
  
  :nth-child(2){
    @media screen and (min-width: 644px) {
      border-left: .1rem solid var(--beige);
      border-right: .1rem solid var(--beige);
      padding-left: var(--default-padding);
    }
  }

  :last-child{
    padding-left: var(--default-padding);
  }
`