import { client } from './client';

export async function getBeer() {
  const response = await client.from('beer').select('*');
  return response.body;
}

export async function getCandies() {
  const response = await client.from('candies').select('*');
  return response.body;
}

export async function getPets() {
  const response = await client.from('pets').select('*');
  return response.body;
}

export async function getSushi() {
  const response = await client.from('sushi').select('*');
  return response.body;
}