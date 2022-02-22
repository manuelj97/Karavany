import React from 'react'
import { FlexRow } from '../LayoutComponents'
import CarType from './CarType'

export default function CarTypeButtons({setCarType}) {
  return (
    <FlexRow>
      <CarType setCarType={setCarType} label="Campervan" carType="Campervan" desc="Obytka s rozměry osobáku, se kterou dojedete všude." />
      <CarType setCarType={setCarType} label="Integrál" carType="Intergrated" desc="Král mezi karavany. Luxus na kolech." />
      <CarType setCarType={setCarType} label="Vestavba" carType="BuiltIn" desc="Celý byt geniálně poskládaný do dodávky." />
      <CarType setCarType={setCarType} label="Přívěs" carType="Alcove" desc="Tažný karavan za vaše auto. Od kapkovitých až po rodinné." />
    </FlexRow>
  )
}

