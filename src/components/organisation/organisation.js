import { Box, Paper, Typography, Divider } from "@material-ui/core"
import { OrgCard } from "./orgCard"
import AddIcon from '@material-ui/icons/Add';
import { CustomButton } from "../button/button";

export const Organisation = () => {

  return (
    <Paper variant='outlined' className='round-border'>
      <Box pt={3}>
        <Box px={3} display='flex' alignItems='center' justifyContent='space-between' >
          <Typography variant='h4' >My Organisations</Typography>
          <CustomButton>Create organisation</CustomButton>
        </Box>
        <Divider style={{ marginTop: 20, marginLeft: 25, marginRight: 25 }} />

        <Box mt={3} px={3} pb={3} display='flex' maxWidth='100%' overflow='scroll' gridGap={24} >
          {[1, 2, 3, 4, 5].map(i => <OrgCard key={i} />)}
        </Box>

      </Box>
    </Paper>
  )
}