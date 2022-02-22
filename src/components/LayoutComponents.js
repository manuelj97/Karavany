import styled from "styled-components";

export const Text = styled.div`
  font-size: 1.6rem;
  padding: ${props => props.filterTitle ? "var(--default-padding) 0;" : "var(--smaller-padding) 0"};
  
  color: ${props => props.filterTitle ? "var(--dark-grey)" : "var(--black)"};
`

export const TextSmaller = styled.div`
  font-size: 1.2rem;
  padding-top: 0.5rem;

  color: ${props => props.vehicleType ? "var(--orange)" : "var(--dark-grey)"};
  text-transform: ${props => props.vehicleType ? "uppercase" : "none"};
  font-weight: ${props => props.vehicleType ? "800" : "400"};
  letter-spacing: ${props => props.vehicleType ? ".1rem" : "0"};
`

export const BorderedContainer = styled.div`
  border: var(--border);
`

export const TextBigger = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  border-bottom: .1rem solid var(--beige);
  padding-bottom: "";
`

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    width: 15.6rem;
    height: 4.8rem;
    border: .1rem solid var(--beige);
    padding-left: 1.2rem;
  }
`
