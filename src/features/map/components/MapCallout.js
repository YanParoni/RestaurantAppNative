import React from 'react'
import { CalloutComponent } from './CalloutComponent'
export const MapCalloutRestaurant = ({restaurant,isMap}) => {
  return (
    <>
    <CalloutComponent
    isMap
    restaurant={restaurant}
    />
    </>
  )
}
