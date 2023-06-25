import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { selectUserAuth } from '../../redux/features/userAuthSlice'
import { Button } from 'primereact/button';


const ChatsUser = (props) => {
	let token = useSelector(selectUserAuth)


	const [username, setUsername] = useState('')
	console.log("cred", token.token.data.firstName)
	function handleStartChatClick(creds) {
		createDirectChat(creds);
		setUsername('AntisurgeCustomerSupport');
	}
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: ['AntisurgeCustomerSupport'] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>

				<Button style={{ marginTop: "1%", marginLeft: "2%", marginBottom: "3%" }} label="Start Chat" severity="info" onClick={() => handleStartChatClick(creds)}>

				</Button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName={`${token.token.data.firstName}`}
			userSecret={`${token.token.data.firstName}`}
			projectID='a0f086e6-7204-483f-991d-543460b1b292'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default ChatsUser;