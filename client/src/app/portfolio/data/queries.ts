export const GET_GLOBAL_DATA_QUERY = `
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
