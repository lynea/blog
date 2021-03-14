import { gql } from "@apollo/client";


export const ALL_POST_QUERY = gql`
      query Test {
        posts(sort: "date:desc", limit: 10, where: { status: "published" }) {
          title
          slug
          excerpt
          date
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `;