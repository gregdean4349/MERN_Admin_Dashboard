import { Box, useMediaQuery } from '@mui/material'
import { Navbar, Sidebar } from 'components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useGetUserQuery } from 'state/api'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const isNonMobile = useMediaQuery('(min-Width: 600px)')

  //* USER ID FROM REDUX
  const userId = useSelector((state) => state.global.userId)

  //* REDUX/TOOLKIT API HOOK RETRIEVES data from DB
  const { data } = useGetUserQuery(userId)

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth='250px'
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
