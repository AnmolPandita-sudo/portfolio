import { groq } from "next-sanity";
import { Social } from "../typings";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == 'social']
`;

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query)

    const socials: Social[] = await sanityClient.fetch(query);

    return socials
};

