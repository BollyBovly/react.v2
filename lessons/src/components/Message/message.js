import '../../components/style.css';
import React from "react";

export const Message = ({text, author, }) => {
	return (
		<span>
			{author}: { text}
		</span>
	);
};

// export class Message extends React.Component {
// 	render() {
// 		const {text, author, onMessageClick} = this.props;
// 		return (
// 			<div>
// 				<span onClick={onMessageClick}> {author}: {text}</span> 
// 			</div>
// 		)
// 	}
// }
