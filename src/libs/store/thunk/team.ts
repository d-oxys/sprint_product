import Http from "@root/libs/http";
import { message } from "antd";
import { AxiosError } from "axios";
import { AppDispatch } from "..";
import { teamActions } from "../slices/team.slice";

export const getTeamList = (section_id?: string, page?: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamActions.setError(null));
    dispatch(teamActions.setLoading(true));

    try {
      const resp = await new Http().get(`/api/v1/teams?section_id=${section_id}&page=${page}`);
      dispatch(teamActions.setTeam(resp.data.data));
      dispatch(teamActions.setLoading(false));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        dispatch(teamActions.setError(err.response?.data?.message));
        dispatch(teamActions.setLoading(false));
      }
    }
  };
};

export const getTeamById = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamActions.setError(null));
    dispatch(teamActions.setLoading(true));

    try {
      const resp = await new Http().get(`/api/v1/team/${id}`);
      dispatch(teamActions.setTeamDetail(resp.data.data));
      dispatch(teamActions.setLoading(false));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        dispatch(teamActions.setError(err.response?.data?.message));
        dispatch(teamActions.setLoading(false));
      }
    }
  };
};

export const createTeam = (data: { name: string; section_id: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamActions.setError(null));
    dispatch(teamActions.setLoading(true));

    try {
      await new Http().post(`/api/v1/team`, data);
      message.success("Create team success!");
      dispatch(teamActions.setLoading(false));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        dispatch(teamActions.setError(err.response?.data?.message));
        dispatch(teamActions.setLoading(false));
      }
    }
  };
};

export const updateTeam = (data: { name: string; id: string; section_id: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamActions.setError(null));
    dispatch(teamActions.setLoading(true));

    try {
      await new Http().put(`/api/v1/team/${data.id}`, { name: data.name });
      message.success("Update team success!");
      dispatch(teamActions.setLoading(false));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        dispatch(teamActions.setError(err.response?.data?.message));
        dispatch(teamActions.setLoading(false));
      }
    }
  };
};

export const deleteTeam = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamActions.setError(null));
    dispatch(teamActions.setLoading(true));

    try {
      await new Http().remove(`/api/v1/team/${id}`);
      message.success("Team has been deleted!");
      dispatch(teamActions.setLoading(false));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        dispatch(teamActions.setError(err.response?.data?.message));
        dispatch(teamActions.setLoading(false));
      }
    }
  };
};
