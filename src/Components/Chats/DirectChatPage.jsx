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
			projectID='aa9f48c4-f721-45da-904d-95a34af2b3cb'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;