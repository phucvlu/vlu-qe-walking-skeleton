/**
 * Hàm kiểm tra thông tin đăng nhập
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean} true nếu đúng tài khoản, ngược lại false
 */
function login(username, password) {
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = login;
}
