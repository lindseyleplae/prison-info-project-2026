import { getFacilityIndex } from '../lib/facility-index';

export const prerender = true;

export async function GET() {
  const facilities = await getFacilityIndex();
  return new Response(JSON.stringify(facilities), {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}
