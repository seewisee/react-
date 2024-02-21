import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john' + state
        },
    }

})

export let {changeName} = user.actions

/*
Redux의 state 변경하는 법
- state 수정해주는 함수 만들고
원할 때 그 함수 실행해달라고 store.js에 요청


*/

export default configureStore({
    reducer : {
        user : user.reducer
    }
})