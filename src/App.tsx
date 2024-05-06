import { Outlet } from 'react-router-dom'
// import { MasterInit } from './_metronic/layout/MasterInit'
// import { LayoutProvider } from './_metronic/layout/core'

const App = () => {
  return (
    // <LayoutProvider>
      <Outlet />
      // <MasterInit />
    // </LayoutProvider>
  )
}

export { App }
