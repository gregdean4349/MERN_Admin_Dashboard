import { Box } from "@mui/material"
import { BreakdownChart, Header } from "components"

const Breakdown = () => {
  return (
    <Box m="1rem 2rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales by Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  )
}

export default Breakdown
