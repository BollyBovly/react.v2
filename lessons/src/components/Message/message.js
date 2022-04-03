import '../../components/style.css';
import React, {useContext} from "react";
import { ThemeContext } from '../utils/themeContext';

export const Message = ({ text, author }) => {
	const {messageColor} = useContext(ThemeContext)
	return (
		<span style={{color: messageColor }}>
			{author}: {text}
		</span>
	);
};