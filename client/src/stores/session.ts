import myFetch from "@/services/myFetch";
import { computed, reactive } from "vue";
import { getUser, getUsers } from "./users";
import router from "../router/index";

const session = reactive({
  user: null as User | null,
  error: null as string | null,
  messages: [] as Message[],
});

export default session;

export function setError(error: string | null) {
  session.error = error;
  if (error) {
    session.messages.push({ type: "danger", text: error });
  }
}


export async function api<T>(url: string, data: any = null, method?: string) {
  setError(null);
  try {
    return await myFetch<T>(url, data, method);
  } catch (error) {
    setError(error as string);
  } 
  return {} as T;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export function login(
  username: string,
  password: string,
  name: string,
  email: string,
  isAdmin: boolean
) {
  session.user = {
    username,
    password,
    name,
    email,
    isAdmin,
  };

  console.log(session.user);
}

export function logout() {
  session.user = null;
  console.log("logged out");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isAdmin() {
  if (session.user === null) {
    return false;
  } else if (session.user.isAdmin === true) {
    return true;
  } else {
    return false;
  }
}

export function isSignedIn() {
  if (session.user === null) {
    router.push({ path: "/login" });
  } else {
    return true;
  }
}

export function who() {
  console.log(session.user);
  return session.user;
}

export function goHome() {
  router.push({ path: "/" });
}

export function goLogin() {
  router.push({ path: "/login" });
}

export function goRegister() {
  router.push({ path: "/register" });
  console.log("go to register");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface User {
  username: string;
  name: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

export interface Message {
  text: string;
  type: "success" | "danger";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
