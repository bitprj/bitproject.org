import fetch from 'node-fetch'
import { useSession } from 'next-auth/client'

const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT;
const secret = process.env.HASURA_ADMIN_SECRET;
const [ session, loading ] = useSession()

export default async (req, res) => {
    const queryString = `
    mutation upsert_Github {
        insert_users_Github(objects: [{email: "${session.user.email}", name: "${session.user.name}"}], on_conflict: {constraint: Github_pkey, update_columns: [name]}) {
          returning {
            email
            name
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
    res.send({content: responseData})
};