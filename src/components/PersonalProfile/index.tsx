import { Container, Stars, Informations, Person } from './styles';

import { BiBuilding } from "react-icons/bi";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";

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
    company?: string,
    stars: number
}

export const PersonalProfile = ({
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
    company,
    stars
}: PersonalProfileProps) => {
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
                    <p>{stars}</p>
                    <span>stars</span>
                </li>
            </Stars>

            <button>
                Following
            </button>

            <p>{bio}</p>

            <Informations>
                {company && (<li>
                    <BiBuilding />
                    <span>{company}</span>
                </li>)}

                {location && (<li>
                    <MdLocationOn />
                    <span>{location}</span>
                </li>)}

                {email && (<li>
                    <MdEmail />
                    <span>{email}</span>
                </li>)}

                {twitter_username && (<li>
                    <BsTwitter />
                    <span>{twitter_username}</span>
                </li>)}

                {blog && (<li>
                    <FaBloggerB />
                    <span>{blog}</span>
                </li>)}

            </Informations>

            <p className='report'>Block or Report</p>

        </Container>
    )
};