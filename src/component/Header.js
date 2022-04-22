import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [selectTab, setSelectTab] = useState(0);
    return (
        <AppBar position='sticky' sx={{ background: "linear-gradient(132deg, rgba(122,56,166,1) 14%, rgba(208,31,31,1) 51%, rgba(163,111,37,1) 94%);" }} >
            <Toolbar>
                <Typography variant='h4'>Header</Typography>
                <Box>
                    <Tabs value={selectTab} textColor='inherit' onChange={(e, val) => setSelectTab(val)}>
                        <Tab LinkComponent={Link} to ="/"  label="Home" />
                        <Tab LinkComponent={Link} to ="/product" label="product" />
                        <Tab LinkComponent={Link} to ="/about" label="about's" />
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft="auto" gap="5px">
                    <Button sx={{borderRadius:10}} variant='contained' LinkComponent={Link} to = "/login">Login</Button>
                    <Button sx={{borderRadius:10}} variant='contained' LinkComponent={Link} to = "/signin">Sign-in</Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header

