import { GET_GLOBAL_DATA_QUERY } from './queries';
import { GetGlobalDataQuery } from '@/gql/graphql';

export const fetchGlobalData = async (): Promise<NonNullable<GetGlobalDataQuery['global']>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GET_GLOBAL_DATA_QUERY }),
    next: { revalidate: 60 },
  });

  const { data } = await res.json();
  return data.global;
};