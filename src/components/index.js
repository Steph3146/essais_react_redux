import React from 'react';
const redux = require('redux');
const createStore = redux.createStore;


const BUY_CAKE = "BUY_CAKE";

export default function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//(previousState, action) => newState

// ... s'appelle "spread operator". Sert à demander au reducer de faire une copie de l'objet state avant d'ajouter un gâteau au state initial. Certaines des propriétés vont rester inchangées.

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
const store = createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();