export async function getSanityContent({ query, variables = {} }) {
    const { data } = await fetch(
       process.env.SANITY_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      },
    ).then((response) => response.json());
  
    return data;
  }