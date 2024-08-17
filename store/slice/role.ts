import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the possible roles as a union type
export type Role = 'user' | 'client' | null;

interface RoleState {
  value: Role;
}

const initialState: RoleState = {
  value: null, // initial role is null
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.value = action.payload;
    },
    clearRole: (state) => {
      state.value = null;
    },
  },
});

export const { setRole, clearRole } = roleSlice.actions;

export const selectRole = (state: { role: RoleState }) => state.role.value;

export default roleSlice.reducer;
