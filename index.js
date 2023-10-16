import { legacy_createStore as createStore } from "redux";

const addButton = document.querySelector('.plus');
const decreaButton = document.querySelector('.minus');
const counter = document.querySelector('.counter');

let initialState = {   
    count: 0,            //инициализируем начальное значение состояния в хранилище
}

function reducer(state = initialState, action) { // создаём редуктор для управления состоянием
    switch(action.type) {
        case 'PLUS': {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case 'MINUS': {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducer);   //создаем хранилище

 addButton.addEventListener('click', () => {
    store.dispatch({
        type: 'PLUS',
    })
});

decreaButton.addEventListener('click', () => {
    store.dispatch({
        type: 'MINUS',
    })
});

store.subscribe(() => {
    console.log(store.getState());
    counter.innerHTML = store.getState().count;
}); 


