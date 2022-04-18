import React from 'react'

interface IProps {
  children: React.ReactElement
}

const EmptyLayout = ({ children }: { children: IProps }) => {
  return (
    <div className="empty-layout">
      <main>
        {children}
      </main>
    </div>
  )
}
export const getLayout = (page: IProps): React.ReactElement => (
  <EmptyLayout>{page}</EmptyLayout>
)
export { EmptyLayout }
