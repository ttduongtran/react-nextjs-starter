import React from 'react'
import { getLayout } from '../src/layouts/SiteLayout'

const Demo = () => {
  return (
    <h1 className="text-3xl font-bold uppercase center 2-100">Hello world!</h1>
  )
}

Demo.getLayout = getLayout
export default Demo
