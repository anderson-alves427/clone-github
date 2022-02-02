import { Container, Form, Menu, Icons, MenuVisivel, MenuEscondido } from './styles';
import React, { useState } from 'react';

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

interface HeaderProps {
    searchInput: (user: string) => void;
}

export function Header( {searchInput}: HeaderProps) {
    const [showMenu, setShowMenu] = useState(false);
    const [search, setSearch] = useState('diego3g');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        searchInput(search);
        console.log(search)
    }

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
                <Form onSubmit={handleSubmit}>
                    <AiOutlineSearch size={22}/>
                    <input type="text" onChange={e => setSearch(e.currentTarget.value)} />
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