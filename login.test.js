const login = require('./login');

describe('Kiểm tra hàm đăng nhập login()', () => {

  test('Trả về true khi username là "admin" và password là "123"', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
  });

  test('Trả về false khi sai tên đăng nhập', () => {
    const result = login('wrongUser', '123');
    expect(result).toBe(false);
  });

  test('Trả về false khi sai mật khẩu', () => {
    const result = login('admin', 'wrongPass');
    expect(result).toBe(false);
  });

  test('Trả về false khi để trống cả username và password', () => {
    const result = login('', '');
    expect(result).toBe(false);
  });

});
