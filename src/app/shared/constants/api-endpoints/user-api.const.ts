import { environment } from "src/environments/environment";

export const UserAPI = {
    authenticateUser(): string {
        return `${environment.apiBaseUrl}/user/authenticate`;
    }
}