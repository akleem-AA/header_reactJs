import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
  <Box>
      <BottomNavigation>
          <BottomNavigationAction label="privacy"/>
      </BottomNavigation>
  </Box>
  )
}

export default Footer