export function setCookie(name: string, value: string, expireSeconds: number) {
  const expires = new Date(expireSeconds * 1000).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}`;
}

export function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}