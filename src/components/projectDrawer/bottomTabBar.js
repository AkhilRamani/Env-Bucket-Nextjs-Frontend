import { Tabs, Tab, makeStyles, useTheme } from "@material-ui/core"

const useStyle = makeStyles({
    root: {
        '&>..Mui-selected': {
            
        }
    },
    tab: {
        textTransform: 'capitalize',
        fontSize: 16,
        position: 'relative',
        zIndex: 2,
        fontWeight: '600'
    },
    selected: {
        color: '#fff',
        transitionDelay: '0.13s'
    }
})

export const BottomTabBar = ({ value, onChange, children }) => {
    const classes = useStyle()

    const a11yProps = index => ({
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    })

    return (
        <Tabs
            value={value}
            onChange={onChange}
            indicatorColor="primary"
            variant="scrollable"
            TabIndicatorProps={{
                style: {
                    top: 0,
                    height: '100%',
                    // borderRadius: 15,
                    margin: 'auto',
                    zIndex: 1,
                }
            }}
            TabScrollButtonProps={{
                style: { backgroundColor: '#e6e6e6' }
            }}
        >
            <Tab className={classes.tab} classes={{selected: classes.selected}} label='Developmemt' {...a11yProps(0)} />
            <Tab className={classes.tab} classes={{selected: classes.selected}} label='Staging' {...a11yProps(1)} />
            <Tab className={classes.tab} classes={{selected: classes.selected}} label='Production' {...a11yProps(2)} />
            <Tab className={classes.tab} classes={{selected: classes.selected}} label='Create new' {...a11yProps(3)} />
        </Tabs>
    )
}