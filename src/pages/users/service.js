import request from '../../utils/request';

export function getList({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}