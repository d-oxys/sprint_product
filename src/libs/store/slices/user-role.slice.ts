import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Module {
  id: number;
  name: string;
  url: string;
}

export interface RoleFunction {
  id: number;
  name: string;
  url: string;
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  module: Module;
}

export interface User {
  id: number | null;
  name: string | null;
  nip: string | null;
}

export interface Role {
  id: number;
  name: string;
  status: string;
  role_functions: RoleFunction[];
  role_users: User[];
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface RoleState {
  roles: Role[];
  roleDetail: Role | null;
  loading: boolean;
  error: unknown;
  pagination: Pagination;
}

const initialState: RoleState = {
  roles: [],
  roleDetail: null,
  loading: false,
  error: null,
  pagination: {
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    from: 1,
    to: 1,
  },
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<unknown>) {
      state.error = action.payload;
    },
    setRoles(state, action: PayloadAction<Role[]>) {
      state.roles = action.payload;
    },
    setRoleDetail(state, action: PayloadAction<Role>) {
      state.roleDetail = action.payload;
    },
    setRoleStatus(state, action: PayloadAction<{ id: number; status: string }>) {
      const { id, status } = action.payload;
      const roleItem = state.roles.find((role) => role.id === id);
      if (roleItem) {
        roleItem.status = status;
      }
    },
    setPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
  },
});

// Ekspor actions dan reducer
export const { setLoading, setError, setRoles, setRoleDetail, setRoleStatus, setPagination } = roleSlice.actions;

export default roleSlice.reducer;
