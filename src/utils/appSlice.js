import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        mainContainerStatus: "All"
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeSideBar: (state) => {
            state.isMenuOpen = false
        },
        openSidebar: (state) => {
            state.isMenuOpen = true
        },
        changeTab: (state,action) => {
            state.mainContainerStatus = action.payload
        }




    }
})

export const { toggleSideBar, closeSideBar, openSidebar, changeTab } = appSlice.actions

export default appSlice.reducer