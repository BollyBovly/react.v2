import '../../components/style.css';

export const Message = ({ text, myString, onMessageClick }) => {
	return (
		<h3 className="header" onClick={onMessageClick}>
			Message {text} {myString}
		</h3>
	);
};
