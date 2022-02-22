import styled from "styled-components"
import { useState, useEffect } from "react"
import Head from "next/head"

import Header from "../src/components/Header"
import Filters from "../src/components/Filters/index"
import CarCard from "../src/components/CarCard"

const BATCH_SIZE = 1

export default function Home() {
  const [isAtListEnd, setIsAtListEnd] = useState(false)
  const [itemCount, setItemCount] = useState(1)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [priceFrom, setPriceFrom] = useState(0)
  const [priceTo, setPriceTo] = useState(99999)
  const [carType, setCarType] = useState("Intergrated")
  const [instantBookable, setInstantBookable] = useState(true)
  
  async function handleScroll() {
    setTimeout(() => {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      })
    },1)
  }
 
  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => setData(data.items))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    setItemCount(BATCH_SIZE)
    setIsAtListEnd(false)
  }, [priceFrom, priceTo, carType, instantBookable])

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.vehicleType === carType && item.price >= priceFrom && item.price <= priceTo && item.instantBookable === instantBookable
    })
    if(itemCount >= newData.length){setIsAtListEnd(true)}
    setFilteredData(newData.slice(0, itemCount))
  }, [priceFrom, priceTo, carType, instantBookable, itemCount])

  return (
      <>
        <Head>
          <link rel="icon" href="/favicon-16x16.png" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
          <link rel="stylesheet" href="/styles/globals.css" />
          <title>Campiri - Zadání</title>
        </Head>
        <PageWrapper>
          <Header />
        </PageWrapper>
          <Filters 
            priceFrom={priceFrom} 
            priceTo={priceTo} 
            setPriceFrom={setPriceFrom} 
            setPriceTo={setPriceTo} 
            setPriceFrom={setPriceFrom} 
            setCarType={setCarType} 
            setInstantBookable={setInstantBookable} 
            instantBookable={instantBookable}
          />
        <PageWrapper>
          <CarCard data={filteredData} />
        </PageWrapper>
        {!isAtListEnd && <LoadCardsButton>
          <button onClick={() => {
              setItemCount(itemCount + BATCH_SIZE)
              handleScroll()
              }}>
            Načíst další
          </button>
        </LoadCardsButton>}
      </>
  )
}

export const PageWrapper = styled.div`
  margin: 0 5.208333vw;
`

const LoadCardsButton = styled.div`
  text-align: center;
  margin-bottom: var(--default-padding);
  
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    background: var(--green) no-repeat padding-box;
    width: 15.5rem;
    height: 4.8rem;
    color: var(--white);
    font-size: 1.6rem;
    outline: none;
    box-shadow: transparent;
    border: none;
    border-radius: 0.8rem;
    transition: all .05s ease;

    :focus{
      cursor: pointer;
      outline: none !important; 
    }

    :hover{
      background: var(--dark-green);
    }
  }
`
