// import {createContext,useReducer,useEffect} from "react"
// import Reducer from "./reducer";

// const INITIAL_STATE={
//   // user:JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null,
//   user:null,
//   isFetching:false,
//   error:false,
// }

// export const Context=createContext(INITIAL_STATE);

// export const ContextProvider=({children})=>{
//   const [state,dispatch]=useReducer(Reducer,INITIAL_STATE);
//    console.log("state is: ",state.user);
//   useEffect(()=>{
//     localStorage.setItem("user",JSON.stringify(state));
//   },[state.user])
//   return(
//     <Context.Provider value={
//       {
//         user:state.user,
//         isFetching:state.isFetching,
//         error:state.error,
//         dispatch,
//       }
//     }>
//      {children} 
//     </Context.Provider>
//   );
// };


import { createContext, useEffect, useReducer } from "react";

// const userLs = localStorage.getItem("user");
// console.log(userLs);
console.log("Initial state  :  ",localStorage.getItem("user"))
const INITIAL_STATE={
  user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,
  // user:null,
  loading:false,
  error:null,
}
export const Context = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  console.log("sate of user :",state.user,JSON.stringify(state.user));
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};