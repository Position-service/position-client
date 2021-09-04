// 영문 대소문자, 숫자를 포함하여 8~16자리인지 확인하는 정규식
export function CheckPassword(password: string) {
  if (!/^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/.test(password)) {
    return false;
  }
  return true;
}
