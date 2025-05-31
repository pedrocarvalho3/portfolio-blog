export const GET_HEADER_QUERY = `
  query GetGlobalData {
    global {
      header {
        logo {
          image {
            url
          }
          logoText
        }
        navigation {
          href
          id
          isExternal
          label
        }
      }
    }
  }
`;
