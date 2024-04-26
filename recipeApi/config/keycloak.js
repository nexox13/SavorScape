var session = require('express-session');
var Keycloak = require('keycloak-connect');

let keycloak;
let memoryStore;

function initKeycloak() {
    if (keycloak) {      
        return keycloak;
    } 
    else {        
        memoryStore = new session.MemoryStore();
        keycloak = new Keycloak({ store: memoryStore });
        return keycloak;
    }
}

function getKeycloak() {     
    if (keycloak) {        
        return keycloak;
    }  
}

function getMemoryStore() {    
    if (memoryStore) {         
        return memoryStore;
    } 
}

module.exports = {
    initKeycloak,
    getMemoryStore,
    getKeycloak
};