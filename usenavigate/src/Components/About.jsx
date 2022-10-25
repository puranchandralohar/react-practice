import React from 'react'
import { useLocation } from 'react-router-dom'

export function About() {

    const location = useLocation();


  return (
    <div>Hey, You are now viewing About Page. {location.state.id}</div>
  )
}
