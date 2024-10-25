import { AppDispatch } from '..';
import { setLoading, setError, setRoles, setPagination } from '../slices/user-role.slice';
import { AxiosError } from 'axios';
import Http from '@root/libs/http';
import { message } from 'antd';

export const getRoleList = (limit: number = 10, page: number = 1, search?: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));

    try {
      const queryParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
      });

      if (search) {
        queryParams.append('name', search);
      }

      const resp = await new Http().get(`/api/v1/settings/roles/list?${queryParams.toString()}`);

      const roles = resp.data.result.data.map((item: any) => item.role);
      const pagination = resp.data.result.pagination;

      dispatch(setRoles(roles));
      dispatch(
        setPagination({
          total: pagination.total,
          per_page: pagination.per_page,
          current_page: pagination.current_page,
          last_page: pagination.last_page,
          from: pagination.from,
          to: pagination.to,
        })
      );
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data?.meta?.message || 'Failed to fetch roles';
        dispatch(setError(errorMessage));
        message.error(errorMessage);
      } else {
        const errorMessage = 'An unknown error occurred';
        dispatch(setError(errorMessage));
        message.error(errorMessage);
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
};
