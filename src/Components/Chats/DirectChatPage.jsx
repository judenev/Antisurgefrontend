import { Button } from '@mui/material'
import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<Button  onClick={() => createDirectChat(creds)}>
					Create
				</Button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='AntisurgeCustomerSupport'
			userSecret='AntisurgeCustomerSupport'
			projectID='a0f086e6-7204-483f-991d-543460b1b292'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;