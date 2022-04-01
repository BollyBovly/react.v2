import { ListItem } from "@mui/material"
import { Link } from "react-router-dom";
import { DeleteButton } from "./deleteButton";

export const ChatItem = ({ chat, name }) => (
    <ListItem key={chat.id}>
      <Link to={`/chats/${chat.id}`}>{name}</Link>
      <DeleteButton id={chat.id} />
    </ListItem>
);