// // AudioCall.js
// import React, { useState, useRef } from 'react';
// import Peer from 'simple-peer';

// const AudioCall = () => {
//   const [peer, setPeer] = useState(null);
//   const [callStarted, setCallStarted] = useState(false);
//   const localAudioRef = useRef();
//   const remoteAudioRef = useRef();

//   const startCall = () => {
//     const newPeer = new Peer({ initiator: true, trickle: false });

//     newPeer.on('signal', data => {
//       // Send this signal data to the other peer
//       console.log('Signal generated:', data);
//     });

//     newPeer.on('stream', stream => {
//       remoteAudioRef.current.srcObject = stream;
//     });

//     setPeer(newPeer);
//     setCallStarted(true);

//     // Get access to user's audio
//     navigator.mediaDevices.getUserMedia({ audio: true })
//       .then(stream => {
//         localAudioRef.current.srcObject = stream;
//         newPeer.addStream(stream);
//       })
//       .catch(error => {
//         console.error('Error accessing user audio:', error);
//       });
//   };

//   return (
//     <div>
//       {!callStarted ? (
//         <button onClick={startCall}>Start Call</button>
//       ) : (
//         <div>
//           <audio ref={localAudioRef} autoPlay muted />
//           <audio ref={remoteAudioRef} autoPlay />
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioCall;
