import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import profileImage from 'assets/profile.jpeg'
import { FlexBetween } from 'components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  const handleClick = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <header>
      <AppBar
        sx={{
          position: 'static',
          background: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* LEFT SIDE */}
          <nav>
            <FlexBetween gap='1.5rem'>
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon sx={{ fontSize: '25px' }} />
              </IconButton>
              <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius='9px'
                gap='0.3rem'
                p='0.1rem 1.5rem'
              >
                <InputBase placeholder='Search...' />
                <IconButton>
                  <Search sx={{ fontSize: '25px' }} />
                </IconButton>
              </FlexBetween>
            </FlexBetween>
          </nav>

          {/* RIGHT SIDE */}
          <section>
            <FlexBetween gap='1.5rem'>
              {/* DARK/LIGHT MODE */}
              <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === 'dark' ? (
                  <DarkModeOutlined sx={{ fontSize: '25px' }} />
                ) : (
                  <LightModeOutlined sx={{ fontSize: '25px' }} />
                )}
              </IconButton>

              <IconButton>
                <SettingsOutlined sx={{ fontSize: '25px' }} />
              </IconButton>

              <FlexBetween>
                <Button
                  onClick={handleClick}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textTransform: 'none',
                    gap: '1rem',
                  }}
                >
                  <Box
                    component='img'
                    sx={{ objectFit: 'cover' }}
                    alt='profile'
                    src={profileImage}
                    height='32px'
                    width='32px'
                    borderRadius='50%'
                  />
                  <Box textAlign='left'>
                    <Typography
                      fontWeight='bold'
                      fontSize='0.85rem'
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      fontSize='0.75rem'
                      sx={{ color: theme.palette.secondary[200] }}
                    >
                      {user.occupation}
                    </Typography>
                  </Box>
                  <ArrowDropDownOutlined
                    sx={{
                      color: theme.palette.secondary[300],
                      fontSize: '25px',
                    }}
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <MenuItem onClick={handleClose}>Log Out</MenuItem>
                </Menu>
              </FlexBetween>
            </FlexBetween>
          </section>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Navbar
