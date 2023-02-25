import * as React from 'react'
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Messages from "./Messages";
import { contactList } from "../../data/userList";
import { useState } from "react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.14);
  overflow-y: auto;
`;

const LogoInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
  padding: 10px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
`;


const SearchBox = styled.div`
  display: flex;
  background: #fff;
  padding: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #f2f4ff;
  border-radius: 16px;
  width: 300px;
  margin-left: 10px;
  padding: 5px 10px;
`;

const SearchLogo = styled.span`
  width: 28px;
  height: 28px;
`;

const SearchInput = styled.input`
  width: 100%;
  background: #f2f4ff;
  border: none;
  outline: none;
  font-size: 14px;
`;

const options = ["Completed Chats"];

const ContactList = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <LogoInfoDiv>
        <Logo>Chats</Logo>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Completed Chats"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </LogoInfoDiv>

     
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab style={{ marginRight: "65px" }} value="one" label="Active" />
          <Tab value="two" label="Queue" />
            
         
        </Tabs>
      </Box>

      <SearchBox>
        <SearchContainer>
          <SearchLogo>
            <SearchOutlinedIcon style={{ opacity: "0.4" }} />
          </SearchLogo>
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </SearchBox>

      {contactList.map((userData) => (
        <Messages userData={userData} setChat={props.setChat} />
      ))}
     
    </Container>
  );
};

export default ContactList;
