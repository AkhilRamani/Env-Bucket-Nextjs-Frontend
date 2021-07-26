import { Box, Divider, Paper, Typography, withStyles } from "@material-ui/core"
import { projectsData } from "../../../dummy-data/projects"
import { CustomButton } from "../button/button"
import { ProjectCard } from "./projectCard"

const Container = withStyles({
    root: {
        borderRadius: 15
    }
})(Paper)

export const Projects = ({onProjectClick}) => {
    return (
        <Container variant='outlined' >
            <Box pt={3} borderRadius={15} overflow='hidden' >
                <Box px={3} display='flex' alignItems='center' justifyContent='space-between' >
                    <Typography variant='h4'>All Projects</Typography>
                    <CustomButton>Create project</CustomButton>
                </Box>
                <Divider style={{marginTop: 20, marginLeft: 25, marginRight: 25}} />

                <Box mt={2} width='100%' display='flex' flexDirection='column'>
                    {projectsData.map(project => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            cover={project.cover}
                            files={project.files}
                            onClick={onProjectClick}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    )
}