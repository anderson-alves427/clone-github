import { Container, Stars, Informations, Person } from './style';

import { BiBuilding } from "react-icons/bi";
import { MdLocationOn, MdEmail } from "react-icons/md";

interface PersonalProfileProps {
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

export function PersonalProfile({
    avatar_url,
    name,
    login,
    followers,
    following,
    bio,
    email,
    twitter_username,
    location,
    blog,
    company
}: PersonalProfileProps) {
    return (
        <Container>
            <h1>GitHub</h1>

            <Person>
                <img src={avatar_url} alt="Logo do github" />
                <div>
                    <h1>{name}</h1>
                    <h2>{login}</h2>
                </div>
            </Person>
            

            <Stars>
                <li>
                    <p>{followers}</p>
                    <span>followers</span>
                </li>
                <li>
                    <p>{following}</p>
                    <span>following</span>
                </li>
                <li>
                    <p>06</p>
                    <span>stars</span>
                </li>
            </Stars>

            <button>
                Following
            </button>

            <p>{bio}</p>

            <Informations>
                {company && (<li>
                    <MdLocationOn />
                    <span>{company}</span>
                </li>)}
                {/* <li>
                    <MdEmail />
                    <span>Brasil, Ceará, Caucaia</span>
                </li>
                <li>
                    <BiBuilding />
                    <span>PedroLauro@dev.com.br</span>
                </li> */}
            </Informations>

            <p className='report'>Block or Report</p>

        </Container>
    )
};