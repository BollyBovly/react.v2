import { useDispatch } from "react-redux";
import { deleteChat } from "../../Store/chats/action";


export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    dispatch(deleteChat(id));
  };

  return <div onClick={handleDeleteChat}>X</div>;
};