import { sanityClient } from "@/sanity";
import { Experience, Project } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(query)

    const projects: Project[] = await sanityClient.fetch(query);

    return projects 

    // console.log('fetching', projects);

    return projects;
}