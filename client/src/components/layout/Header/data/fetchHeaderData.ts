import { GET_HEADER_QUERY } from './queries';
import { GetGlobalDataQuery } from '@/gql/graphql';

export const fetchHeaderData = async (): Promise<NonNullable<GetGlobalDataQuery['global']>['header']> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GET_HEADER_QUERY }),
    next: { revalidate: 60 },
  });

  const { data } = await res.json();
  return data.global.header;
};