import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Ima, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

export const OrgCard = () => (
  <Card style={{ minWidth: 250 }} variant='outlined' className='round-border' >
    <CardActionArea>
      <CardMedia
        component='img'
        alt='org cover'
        height='80'
        src='/assets/demo-cover.png'
        title='test title'
      />
      <CardContent>
        <Typography variant='h3' gutterBottom>Fusion Labs</Typography>
        <Box display='flex' justifyContent='space-between' mt={3} >
          <AvatarGroup max={5} spacing='small' style={{ marginLeft: 'auto' }} >
            {['AR', 'JA', 'ME', 'OT', 'XS'].map(t => <Avatar style={{width: 35, height: 35, fontSize: 15}} key={t}>{t}</Avatar>)}
          </AvatarGroup>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
)