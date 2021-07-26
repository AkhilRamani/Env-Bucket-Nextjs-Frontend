import { useState } from "react";
import { Box, useTheme, Drawer, makeStyles, Typography, IconButton, Divider, AppBar, Tab, Tabs, Paper, } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import dynamic from 'next/dynamic'
import SwipeableViews from 'react-swipeable-views';

import { TabPanel } from '../tabPanel'
import { coverColors } from "../../utils/constants";
import { BottomTabBar } from "./bottomTabBar";

const CodeView = dynamic(() => import('../codeView/codeView'), { ssr: false })

const useStyle = makeStyles(theme => ({
    drawer: {
        // width: 600,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    drawerPaper: {
        // display: 'flex',
        width: 600
    }
}))

export const ProjectDrwaer = ({ open, onClose }) => {
    const classes = useStyle()
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue)
    const handleChangeIndex = (index) => setValue(index)

    

    return (
        <Drawer
            variant='persistent'
            anchor='right'
            open={open}
            style={{ width: open ? 600 : 0, display: 'flex', flexDirection: 'column' }}
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Box display='flex' px={2} height={65} alignItems='center' className={classes.drawerHeader}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant='h4' style={{ marginLeft: 20 }}>Project</Typography>
            </Box>
            <Divider />

            <Box p={3} flexGrow='1' overflow='scroll' >
                <Typography variant='h3' >Match my makeup</Typography>

                {/* <Box  >
                    <Typography>Total 3 environments</Typography>
                    <Box>
                        <Box style={{ backgroundColor: coverColors[1], borderRadius: 15 }} p={3}>
                            <Typography variant='h5'>Cover color</Typography>
                        </Box>
                    </Box>
                </Box> */}

                <Box mt={5}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction} >
                            <Paper>
                                <CodeView />
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction} >
                            <CodeView />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction} >
                            <CodeView />
                        </TabPanel>
                    </SwipeableViews>
                </Box>
                {/* <CodeView /> */}
                {/* <Box mt={4} className='round-border' style={{backgroundColor: '#f6f6f6'}} height="100%" ></Box> */}
            </Box>

            <Box>
                <AppBar position='static' color="default" variant='outlined' >
                    <BottomTabBar value={value} onChange={handleChange} />
                </AppBar>
            </Box>

        </Drawer>
    )
}