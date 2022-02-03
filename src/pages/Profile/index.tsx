import { useEffect, useState } from "react";
import { PersonalProfile } from "../../components/PersonalProfile";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import { Container} from './styles';

interface User {
    avatar_url: string;
    name: string;
    login: string;
    followers: string;
    following: string;
    bio: string;
    email?: string;
    twitter_username?: string;
    location?: string;
    blog?: string;
    company?: string
}

interface Repository {
    name: string;
    stargazers_count: number;
}

export const Profile = () => {
    const [user, setUser] = useState<User>({} as User)
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [search, setSearch] = useState<string>('diego3g');

    function handleSearch(user: string) {
        setSearch(user);
        console.log(user);
      }

    useEffect(() =>{
        api.get(search)
        .then(response => setUser(response.data));

        api.get(`${search}/repos`)
        .then(response => setRepositories(response.data));
        
    }, [search]);

    return (
        <Container>
            <PersonalProfile 
                avatar_url={user.avatar_url} 
                name={user.name} 
                login={user.login}
                followers={user.followers}
                following={user.following}
                stars={repositories.reduce((acumulador, valorAtual) => acumulador + valorAtual.stargazers_count, 0)}
                bio={user.bio}
                email={user.email}
                twitter_username={user.twitter_username}
                location={user.location}
                blog={user.blog}
                company={user.company}  
            />

            <Header searchInput={handleSearch}/>

        </Container>
        
        
        
    )
}