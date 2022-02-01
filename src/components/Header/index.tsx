import { Container, Form, Menu, Icons, MenuVisivel, MenuEscondido } from './styles';
import { useState } from 'react';

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Container>
            <MenuVisivel openMenu={showMenu}>
                <AiOutlineMenu 
                    size={30} 
                    color={(showMenu) ? 'white': 'black'} 
                    onClick={() => setShowMenu((showMenu) ? false: true)} 
                    className='invisibilty-menu'
                /> 
                <Icons>
                    <IoMdNotificationsOutline size={22} color={(showMenu) ? 'white': 'black'}/>
                    <HiOutlineUserCircle size={22} color={(showMenu) ? 'white': 'black'}/>
                </Icons>
            </MenuVisivel>

            <MenuEscondido openMenu={showMenu}>
                <Form>
                    <AiOutlineSearch size={22}/>
                    <input type="text" />
                </Form>

                <Menu>
                    <li><a href="#">Pull Request</a></li>
                    <li><a href="#">Issues</a></li>
                    <li><a href="#">MarketPlace</a></li>
                    <li><a href="#">Explore</a></li>
                </Menu>
            </MenuEscondido>
        </Container>
    );
}