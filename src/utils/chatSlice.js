import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants"

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatList: []
    },
    reducers: {
        addChat: (state, action) => {
            state.chatList.splice(LIVE_CHAT_COUNT, 1)
            state.chatList.unshift(action.payload)
        }
    }
})

export const {addChat} = chatSlice.actions

export default chatSlice.reducer