import { Box, Container, CssBaseline } from "@material-ui/core";
import { useState } from "react";
import { Header } from "../components/header/header";
import { Organisation } from "../components/organisation/organisation";
import { ProjectDrwaer } from "../components/projectDrawer/projectDrawer";
import { Projects } from "../components/projects/projects";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const _handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <Header title='envBucket' />

      <Box display='flex' width='100%' >
        <Container maxWidth='lg' style={{ backgroundColor: '#f9f9f9', overflowX: 'hidden' }}  >
          <Box mt={4}>
            <Organisation />
          </Box>
          <Box my={4}>
            <Projects onProjectClick={handleDrawerOpen} />
          </Box>
        </Container>
        <ProjectDrwaer open={open} onClose={_handleDrawerClose} />
      </Box>
    </div>
  );
}
