import { USERS_QUERY_KEY } from "@/constants/query-key.constants";
import { queryClient } from "@/lib/react-query";
import { loginByGoogle } from "@/repository/users.repository";
import { useMutation } from "@tanstack/react-query";
import Cookies from 'js-cookie';

export const loginByGoogleMutation = () => {
  return useMutation({
    mutationFn: loginByGoogle,
    onSuccess: (res) => {
      Cookies.set('refresh_token', String(res.refreshToken), {
        sameSite: 'Strict',
        expires: 1,
        secure: true,
      })
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY] })
    }
  })
}