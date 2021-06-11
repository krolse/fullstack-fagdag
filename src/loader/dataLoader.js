export const getData = async (sted) => {
    const query = sted ? `poststed=${sted}` : "";
    return await fetch(`https://fullstack-fagdag-backend.herokuapp.com/restaurant?${query}`)
    .then(response => response.json());
}