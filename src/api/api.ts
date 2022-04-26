import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://api.github.com/',
//     withCredentials: true,
// })

export const GetUserApi={
    getUsers: (user:string)=>{
        return axios.get<GetUserType>(`https://api.github.com/users/${user}`)   }
}
export const GetRepositoriesApi = {
    gerRepos: (user:string, pageNumber:number) => {
        return axios.get(`https://api.github.com/users/${user}/repos?per_page=4&page=${pageNumber}`)
    }
}


export type GetUserType = {
    login?: string,
    id?: number,
    node_id?: string,
    avatar_url?: string,
    gravatar_id?: string,
    url?: string,
    html_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    starred_url?: string,
    subscriptions_url?: string,
    organizations_url?: string,
    repos_url?: string,
    events_url?: string,
    received_events_url?: string,
    type?: string,
    site_admin?: boolean,
    name?: string,
    company?: null | string,
    blog?: string,
    location?: null | string,
    email?: null | string,
    hireable?: null | string,
    bio?: string,
    twitter_username?: null | string,
    public_repos?: number,
    public_gists?: number,
    followers?: number,
    following?: number,
    created_at?: string,
    updated_at?: string,
}