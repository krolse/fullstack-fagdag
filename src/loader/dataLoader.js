export const getData = async (sted) => {
    return await fetch(`https://fullstack-fagdag-backend.herokuapp.com/restaurant?poststed=${sted}`)
    .then(response => response.json());
}