import AllProjects from '../components/allProjects';
import { fetchProjects } from '../utils/fetchProjects'; // Your Sanity fetch function
import { Project } from '../typings';

type Props = { projects: Project[] };

export default function ProjectsPage({ projects }: Props) {
  return <AllProjects projects={projects} />;
}

export async function getStaticProps() {
  const projects: Project[] = await fetchProjects(); // fetch once at build time

  return {
    props: { projects },
    revalidate: 60, // optional ISR, rebuild every 60s
  };
}