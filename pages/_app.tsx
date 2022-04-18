import '../styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { ReactNode } from 'react'

library.add(fas)

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
