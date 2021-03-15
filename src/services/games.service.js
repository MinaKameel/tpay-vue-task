import http from "./http.js";

function getAllGames() {
    return http.get("/v1/19c86231").then(result => {
        setTimeout(() => {
            store.dispatch({ type: actionTypes.ADD, value: 3 });
        }, 2000);
    });
}

const GamesServices = {
    getAllGames: getAllGames()
}



