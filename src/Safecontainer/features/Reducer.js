import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({

  name: "users",
  initialState: { value: [], currentid: "", },
  

  reducers: {
    setcurrentid: (state, action) => {
      state.currentid = action.payload;
    },

    addUser: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },
   
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      
    },

    editSafe: (state, action) => {
      state.value.forEach((users, index) => {

        if (users.id === action.payload.id) {
          state.value.splice(index, 1, action.payload);
        }
      });
    },

    remove: (state, action) => {
      state.value.forEach((secrets) => {
        secrets.secretbox.forEach((value, index) => {
          
          if (value === action.payload.id) {
            secrets.secretbox.splice(index, 1);
          }
          
        });
      });
    },

    addUser2: (state, action) => {
      state.value.forEach((users) => {
        if (users.id === action.payload.currentid) {
          users.secretbox.push(action.payload.secretbox);
          
        }
      });
    },
    
  },
});


export const { addUser, deleteUser, addUser2, editSafe,setcurrentid,remove } = userSlice.actions;
export default userSlice.reducer;
