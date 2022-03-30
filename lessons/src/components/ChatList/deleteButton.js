import { useCallback } from "react"
import { useDispatch } from "react-redux";
import { deleteChat } from "../../Store/chats/action";


export const DeleteButton = ({ id, onClick }) => {
  const dispatch = useDispatch()

  const handleDeleteChat = () => {
      dispatch(deleteChat(id));
  }
    
    return <div onClick={handleDeleteChat}>X</div>;
  };