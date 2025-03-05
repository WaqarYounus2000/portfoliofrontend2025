import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PersonIcon from '@mui/icons-material/Person';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {anchor === "right" && ( // Ensure this applies only to the "right" navigation
                <>
                    <List>
                        {[
                            { text: 'Add Projects', route: '/dashboard/addurls', icon: <AddLinkIcon /> },
                            { text: 'Add Skills', route: '/dashboard/addskills', icon: <MilitaryTechIcon /> },
                            { text: 'Add Resume', route: '/dashboard/resume', icon: <PersonIcon /> },
                            { text: 'Update Profile', route: '/dashboard/UpdateProfile', icon: <PersonAddIcon /> },
                        ].map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.route}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </>
            )}
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                // this is react.fragment and key that changes only when anchor variable changes
                <React.Fragment key={anchor}>
                    <Button variant="contained" onClick={toggleDrawer(anchor, true)}>Menu</Button>

                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
