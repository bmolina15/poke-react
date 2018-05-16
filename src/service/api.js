

const Api={
    rootURL:"https://pokeapi.co/api/v2",



    getPokemonById(pokeid){
        return fetch (`${this.rootURL}/pokemon/${pokeid}/`) 

    }


};
export default Api;