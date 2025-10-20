import { sanityClient } from "@/sanity";
import { Experience } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

export const fetchExperiences = async() => {
    const res = await sanityClient.fetch(query)

    const experiences: Experience[] = await sanityClient.fetch(query);

    return experiences 

    // console.log('fetching', experiences);
}