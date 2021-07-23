import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import { Header } from "../components/header/header";
import { Organisation } from "../components/organisation/organisation";
import { Projects } from "../components/projects/projects";

export default function app() {

  return (
    <>
      <Header title='envBucket' />

      <Container maxWidth='lg' style={{backgroundColor: '#f9f9f9'}} >

        <Box mt={4}>
          <Organisation />
        </Box>

        <Box my={4}>
          <Projects />
        </Box>

      </Container>
    </>
  )
}