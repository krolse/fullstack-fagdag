export const getData = async () => {
    return await fetch("https://fullstack-fagdag-backend.herokuapp.com/resautrant")
    .then(response => response.json());

    
}