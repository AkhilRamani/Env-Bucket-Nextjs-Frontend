import { AppBar, Toolbar, Typography } from "@material-ui/core"

export const Header = ({ title }) => {
    return (
        <AppBar variant='outlined' color='default'>
            <Toolbar>
                <Typography variant='h2'>{title}</Typography>
            </Toolbar>
        </AppBar>
    )
}