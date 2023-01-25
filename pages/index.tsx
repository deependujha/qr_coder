import React, { useEffect } from 'react';
import QRCode from 'qrcode';

const Index = () => {
	useEffect(() => {
		QRCode.toCanvas(document.getElementById('qrcode'), 'hello world', {
			width: 400,
			color: {
				dark: '#0000ff',
				light: '#ffffff',
			},
			errorCorrectionLevel: 'H',
		});
	}, []);

	return (
		<div>
			<canvas id="qrcode"></canvas>
		</div>
	);
};

export default Index;
