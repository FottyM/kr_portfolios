import jwtDecode from 'jwt-decode'

const getToken = () => {
  let token
  try {
    token = localStorage.getItem('access_token')
    const { user_id, exp } = jwtDecode(token)
    return {
      user_id,
      token,
      exp
    }
  } catch (error) {
    return {
      error: error,
      user_id: null,
      token: null,
      exp: null
    }
  }
}

export default getToken