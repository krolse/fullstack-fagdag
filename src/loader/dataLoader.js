export const getData = async () => {
    return await fetch("https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?")
    .then(response => response.json())
    .then(json => filterData(json.entries));
}

const filterData = (json) => {
    return json.filter(j => j.total_karakter !== "0" && j.total_karakter !== "1");
}