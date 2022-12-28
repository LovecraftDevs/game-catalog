import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
class AuthService {
  static instance: AuthService;
  auth?: Auth;
  constructor() {
    AuthService.instance = this;
    this.init();
  }
  private init() {
    this.auth = getAuth(firebaseApp);
    console.log(this.auth);
  }

  async createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth!, email, password);
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth!, email, password);
  }
  isConnected() {
    return !!this.auth?.currentUser;
  }
}

export const useAuthService = () => {
  const auth = AuthService.instance || new AuthService();
  return auth;
};
