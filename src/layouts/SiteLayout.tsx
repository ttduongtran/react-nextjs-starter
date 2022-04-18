import React from 'react'
import Copyright from '../components/general/copyright'
import Topbar from '../components/general/topbar'
interface IProps {
  children: React.ReactElement
}

const SiteLayout = ({ children }: { children: IProps }) => {
  return (
    <>
      <div className="antialiased bg-main text-white font-sans">
        <Topbar />
        <main>
          {children}
        </main>
      </div>
      <Copyright />
    </>
  )
}

export const getLayout = (page: IProps): React.ReactElement => (
  <SiteLayout>{page}</SiteLayout>
)
export { SiteLayout }
