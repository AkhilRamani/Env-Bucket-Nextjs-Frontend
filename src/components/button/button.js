import { Button, withStyles } from "@material-ui/core";

const TmpBtn = withStyles({
    root: {
        // border: '2px solid #0053CF!important',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'none',
        padding: '6px 30px',
        borderRadius: '10px!important'
    }
})(Button)

export const CustomButton = ({ children, ...rest }) => (
    <TmpBtn variant='contained' disableElevation color='primary'  {...rest}>
        {children}
    </TmpBtn>
)