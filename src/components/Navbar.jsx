import React, { useState } from 'react';
import { AppBar , Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})


const Search = styled("div")(({theme}) =>({
  backgroundColor:'white',
  padding:'0px 10px',
  borderRadius:theme.shape.borderRadius,
  width:'40%'
}))

const Icons = styled(Box)(({theme}) =>({
  display:'flex',
  alignItems:'center',
  gap:'20px' 
}))

const UserBox = styled(Box)(({theme}) => ({
  display:'flex',
  gap:'10px',
  alignItems:'center'
}))

const Navbar = () => {


  const [open , setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>LAMA DEV</Typography>
      <Pets sx={{display:{xs:'block', sm:'none'}}} />
      <Search><InputBase placeholder='Search...'/></Search>
      <Icons>
        <Badge badgeContent={4} color='error'>
          <Mail />
        </Badge>
        <Badge badgeContent={2} color='error'>
          <Notifications />
        </Badge>
        <Avatar  onClick={(e) => setOpen(true)} sx={{width:30, height:30}} src='https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar;
