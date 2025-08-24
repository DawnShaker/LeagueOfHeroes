import type { APIRoute } from 'astro';
import { items } from '../../data/items';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};