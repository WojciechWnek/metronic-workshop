import { Route, Routes } from 'react-router-dom'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route >
        <Route path={'*'} element={<p></p>} />
      </Route>
    </Routes>
  )
}

export { PrivateRoutes }
