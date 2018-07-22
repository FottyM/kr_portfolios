export function logout(push) {
  localStorage.clear()
  push('/')
}