import React from 'react';

import Home from './pages/home/Home';
import World from './pages/world/World';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: {
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function Layout() {
    const classes = useStyles();

    const pageMap = [
        { key: '/', value: 'HOME', name: 'Home', icon: <HomeIcon /> },
        { key: '/world', value: 'WORLD', name: 'World data', icon: <PublicIcon /> }
    ]

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar position="fixed" color="transparent" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} >
                        <Typography variant="h4" align="center">
                            Data-Covid
                        </Typography>
                    </div>
                    <Divider />
                    <List>
                        {pageMap.map((page) => (
                            <Link key={page.value} color="textPrimary" to={page.key}>
                                <ListItem button key={page.name}>
                                    <ListItemIcon>{page.icon}</ListItemIcon>
                                    <ListItemText primary={page.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    {/* <Divider /> */}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/world' component={World} />
                            </Switch>
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div >

    )
}


