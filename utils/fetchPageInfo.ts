import { groq } from "next-sanity";
import { PageInfo } from "../typings";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == 'pageInfo'][0]
`;


export const fetchPageInfo = async() => {
    const res = await sanityClient.fetch(query)

    const pageInfo: PageInfo = await sanityClient.fetch(query);

    return pageInfo 

    // console.log('fetching', pageInfo);
}