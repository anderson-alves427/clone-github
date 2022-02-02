import { useEffect, useState } from "react";
import { PersonalProfile } from "../../components/PersonalProfile";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import { Container} from './styles';

interface ProfilePros {
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

export function Profile () {
    const [repositories, setRepositories] = useState<ProfilePros>({} as ProfilePros)
    const [search, setSearch] = useState<string>('diego3g');

    function handleSearch(user: string) {
        setSearch(user);
        console.log(user);
      }

    useEffect(() =>{
        api.get(search)
        .then(response => setRepositories(response.data));
        
    }, [search]);

    return (
        <Container>
            <PersonalProfile 
                avatar_url={repositories.avatar_url} 
                name={repositories.name} 
                login={repositories.login}
                followers={repositories.followers}
                following={repositories.following}
                bio={repositories.bio}
                email={repositories.email}
                twitter_username={repositories.twitter_username}
                location={repositories.location}
                blog={repositories.blog}
                company={repositories.company}  
            />

            <Header searchInput={handleSearch}/>

        </Container>
        
        
        
    )
}