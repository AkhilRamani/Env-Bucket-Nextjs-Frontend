import { Box, makeStyles, Typography, withStyles } from "@material-ui/core";
import { coverColors } from "../../utils/constants";
import { FileChip } from "../fileChip";

const Container = withStyles({
    root: {
        height: 80,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eaeaea',
        cursor: 'pointer',
        '&>img': {
            flexShrink: 0,
        },

        "&:hover": {
            backgroundColor: "#f1f1f1"
        }
    }
})(Box)

const useStyles = makeStyles({
    text: {
        opacity: 0.85
    }
})

export const ProjectCard = ({name, cover, files, onClick}) => {
    const classes = useStyles()

    return (
        <Container px={3} onClick={onClick}>
            {/* <img src='./assets/demo-cover.png' className='round-border' width='50px' height='40px' /> */}
            <Box width='50px' height='40px' className='round-border' style={{backgroundColor: coverColors[cover]}} />

            <Box display='flex' justifyContent='space-between' flexGrow='1' alignItems='center' ml={3} >
                <Typography className={classes.text} variant='h5'>{name}</Typography>

                <Box display='flex' gridGap={10} >
                    {
                        files.map(file => (
                            <FileChip 
                                key={file.id} 
                                type={file.type}
                                name={file.name} 
                            />
                        ))
                    }
                </Box>
            </Box>
        </Container>
    )
}