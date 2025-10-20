import { groq } from "next-sanity";
import { Skill } from "../typings";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == 'skill']
`;

export const fetchSkills = async() => {
    const res = await sanityClient.fetch(query)

    const skills: Skill[] = await sanityClient.fetch(query);

    return skills

    // console.log('fetching', skills);

}