import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import ACTIONS from '../socket/actions';
import socket from '../socket/index';
import { v4 } from 'uuid';

export const Main = () => {
	const navigate = useNavigate();
	const [rooms, updateRooms] = useState([]);
	const rootNode = useRef(null);

	useEffect(() => {
		socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
			if (rootNode.current) {
				updateRooms(rooms);
			}
		});
	}, []);
	return (
		<div ref={rootNode}>
			<h1>Avialable Rooms</h1>

			<ul>
				{rooms.map(roomID => (
					<li key={roomID}>
						{roomID}
						<button
							onClick={() => {
								navigate(`/room/${roomID}`);
							}}
						>
							JOIN ROOM
						</button>
					</li>
				))}
			</ul>

			<button
				onClick={() => {
					navigate(`/room/${v4()}`);
				}}
			>
				Create New Room
			</button>
		</div>
	);
};
