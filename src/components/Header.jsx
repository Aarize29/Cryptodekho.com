import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth).then(() => {
        navigate('/')
    }).catch((error) => {
        alert(error.message)
    })
}
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} onClick={handleSignout}>Logout</Button>

    </HStack>
  );
};

export default Header;
