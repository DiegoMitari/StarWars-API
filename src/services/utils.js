const API_URL = 'https://swapi.dev/api/people/';

export async function getAllPeople() {
  try {
    const response = await fetch(API_URL);
    const data     = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}