//import default from "./node_modules/axios/index";
import { FETCH_WEATHER } from '../actions/index';
//import { start } from 'repl';

export default function(state = [],action){
    switch(action.type){
        case FETCH_WEATHER:
            //return [action.payload.data]; *** return this will replace the array of state 
            // but we need it to addon it not replacing it.
            //return start.push(action.payload.data); we don't direcly manipulate state
            //return state.concat([action.payload.data]);  return new version of state
            return [action.payload.data, ...state]; // es6 syntax result in [city, city, city] not [city, [city, city]]
            // mean create new array that have action.payload.data and all old data inside array of state
    }
    //console.log('Action received',action);
    return state;
} 