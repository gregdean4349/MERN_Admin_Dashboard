import { Box, Divider, Typography, useTheme } from "@mui/material"

const Header = ({ title, subtitle, dashboard }) => {
  const theme = useTheme()

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{
          marginBottom: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
      {dashboard ? undefined : <Divider sx={{ my: "1rem" }} />}
    </Box>
  )
}

export default Header
