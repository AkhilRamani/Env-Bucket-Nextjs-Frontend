import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import clsx from "clsx";

const useStyles = makeStyles({
    root: {
        border: '2px solid',
        borderRadius: 12,
        position: 'relative',
        borderColor: '#fff',

        '&:hover': {
            '& $saveBox': {
                display: 'flex'
            }
        }
    },
    yellow: {
        backgroundColor: '#ffe9ab',
        // borderColor: '#dba100'
    },
    red: {
        backgroundColor: '#ffd0cc',
        // borderColor: '#ff7366'
    },
    green: {
        backgroundColor: '#d0f2e6',
        // borderColor: '#57c99f',
        color: '#266e54'
    },
    saveBox: {
        display: 'none',
        borderRadius: 12,
        '&>svg': {
            margin: 'auto'
        }
    }
})

export const FileChip = ({name, type}) => {
    const classes = useStyles()

    const getClassName = () => {
        switch(type){
            case 0: return classes.green
            case 1: return classes.yellow
            case 2: return classes.red
            default: return classes.green
        }
    }
    
    return (
        <Paper className={clsx(classes.root, getClassName())} elevation={0} >
            <Box px={2} py={0.4} >
                <Typography variant='subtitle2' >{name}</Typography>
            </Box>
            <Box
                className={clsx(classes.saveBox, getClassName())}
                position='absolute'
                width='100%'
                height='100%'
                top='0'
                left='0'
                display='flex'
             >
                <SaveAltIcon />
            </Box>
        </Paper>
    )
}