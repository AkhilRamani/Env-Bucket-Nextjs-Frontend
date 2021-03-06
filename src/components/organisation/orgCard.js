import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Ima, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { coverColors } from "../../utils/constants";

export const OrgCard = ({item}) => (
  <Card style={{ maxWidth: 250, minWidth: 250 }} variant='outlined' className='round-border' >
    <CardActionArea>
      {/* <CardMedia
        component='img'
        alt='org cover'
        height='80'
        src='/assets/demo-cover.png'
        title='test title'
      /> */}
      <Box height="80px" style={{backgroundColor: coverColors[item.cover]}} />
      <CardContent>
        <Typography variant='h3' gutterBottom>{item.name}</Typography>
        <Box display='flex' justifyContent='space-between' mt={3} >
          <AvatarGroup max={5} spacing='medium' style={{ marginLeft: 'auto' }} >
            {['AR', 'JA', 'ME', 'OT', 'XS'].map(t => <Avatar style={{width: 35, height: 35, fontSize: 15}} key={t}>{t}</Avatar>)}
          </AvatarGroup>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
)