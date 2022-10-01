import { useParams } from 'react-router';
import { useWebRtc, LOCAL_VIDEO } from '../hooks/useWebRTC';

export const Room = () => {
	const { id: roomID } = useParams();
	const { clients, provideMediaRef } = useWebRtc(roomID);
	console.log(clients);

	console.log(roomID);

	return (
		<ul>
			{clients.map(clientID => {
				return (
					<li key={clientID}>
						<video
							ref={instance => {
								provideMediaRef(clientID, instance);
							}}
							autoPlay
							playsInline
							muted={clientID === LOCAL_VIDEO}
						></video>
					</li>
				);
			})}
		</ul>
	);
};
