import fetch from 'node-fetch'

const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;
const secret = process.env.HASURA_ADMIN_SECRET;

export default async (name, token, username, id, url) => {
    const res = await fetch('https://api.github.com/user/emails', {
        headers: {
          'Authorization': `token ${token}`
        }
      })
      const emails = await res.json()
    if (!emails || emails.length === 0) {
        return
    }
    // Sort by primary email - the user may have several emails, but only one of them will be primary
    console.log(emails)
    var email = emails[0].email

    const queryString = `
    mutation upsert_Github {
        insert_users_Github(objects: [{email: "${email}", name: "${name}", url: "${url}", username: "${username}", id: "${id}"}], on_conflict: {constraint: Github_pkey, update_columns: [name, id, username, url]}) {
          returning {
            email
            name
            username
          }
        }
      }
      `
    const data = await fetch(HASURA_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': secret,
        },
        body: JSON.stringify({query: queryString})
    });
    const responseData = await data.json();
    return ({content: responseData})
};