export const getData = async () => {
    return await fetch("https://fullstack-fagdag-backend.herokuapp.com/restaurant")
    .then(response => response.json());
}