import http from "./http.js";

function getAllGames() {
    return http.get("/v1/1958025f").then(result => {
    });
}

const GamesServices = {
    getAllGames: getAllGames()
}

export default GamesServices;



