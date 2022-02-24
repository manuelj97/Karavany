import React from 'react'
import styled from "styled-components"
import { TextBigger, TextSmaller } from './LayoutComponents'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarCard({ data }) {
  return (
    <Center>
      <FlexRow>
          {data.map((item, i) => {
              return (
                  <CardContainer key={i}>
                    <Carousel>  
                    {item.pictures.map((picture, j) => 
                        <img src={picture} alt="Car Card Picture" key={j} />
                    )}
                    </Carousel>
                    <TextSmaller vehicleType>
                      {item.vehicleType}
                    </TextSmaller>
                    <TextBigger>
                      {item.name}
                    </TextBigger>
                  </CardContainer>
              )
          })}
      </FlexRow>
    </Center>
  )
}

const Center = styled.div`
  place-content: center;
`

const CardContainer = styled.div`
    width: 39.2rem;
    height: 50rem;
    border: var(--border);
    border-radius: var(--border-radius);
    padding: var(--default-padding);
`

const FlexRow = styled.div`
  padding: var(--default-padding) 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  gap: 10rem;
  margin: 0 auto;
  justify-content: center;
`
