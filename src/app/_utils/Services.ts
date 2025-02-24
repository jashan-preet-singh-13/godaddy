import { API_URL } from "./Contants";

export const fetchRepos = async () => {
    try {
        const response = await fetch(`${API_URL}/orgs/godaddy/repos`);
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error,null];
    }
}

export const fetchReposByName = async (repo:string) => {
    try {
        const response = await fetch(`${API_URL}/repos/godaddy/${repo}`);
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error,null];
    }
}