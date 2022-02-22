import React from "react"
import Image from "next/image"
import styled from "styled-components"

export default function Header() {
  return (
      <ImgContainer>
        <Image
            src="/prague-labs-logo.svg"
            alt="Prague Labs Logo"
            width="201px"
            height="35.19px"
        />
      </ImgContainer>
  )
}

const ImgContainer = styled.div`
  padding: var(--default-padding) 0;

  @media screen and (max-width: 644px) {
    text-align: center;
  }
`
