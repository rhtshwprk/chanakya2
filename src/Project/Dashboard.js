import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import PersonIcon from '@mui/icons-material/Person'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Home from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
// import Calender from "./Project/calender";
// import 'react-calendar/dist/Calendar.css';

const drawerWidth = 240

const Dashboard = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar className="divider_color" />
      <Divider />
      <List>
        <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon className="icon_color" />
            </ListItemIcon>
            <ListItemText>
              <a
                href="/Home"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '23px'
                }}>
                My Profile
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon className="icon_color" />
            </ListItemIcon>
            <ListItemText>
              <a
                href="/students"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '23px'
                }}>
                Students
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
              <SchoolIcon className="icon_color" />
            </ListItemIcon>
            <ListItemText>
              <a
                href="/Faculty"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '23px'
                }}>
                Faculty
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
              <AnnouncementIcon className="icon_color" />
            </ListItemIcon>
            <ListItemText>
              <a
                href="/Announce"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '23px'
                }}>
                Uploads
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {/* <div> <Calender/> </div> */}

        <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className="icon_color" />
            </ListItemIcon>
            <ListItemText>
              <a
                href="/Search"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '23px'
                }}>
                Search & filter
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding className="divider_color">
          <ListItemButton>
            <ListItemIcon>
            <EmailIcon className="icon_color"/>
            </ListItemIcon>
            <ListItemText>
              <a href='/Contact' style={{ textDecoration: 'none' , color: 'white' , fontSize: '23px'}}>
                Contact me 
            </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        */}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}>
        <Toolbar className="divider_color">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* <a href='/dashboard'>Dashboard</a> */}
            <h1 className="heading_style">NITDGP Chanakya 2.0</h1>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Dashboard
