import React, { useState } from 'react';
import QRCode from 'qrcode';

const QrCode = () => {
    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');

    // Function to generate QR code
    const generateQrCode = async () => {
        if (!text.trim()) {
            alert('Please enter text to generate a QR code.');
            return;
        }

        try {
            const qr = await QRCode.toDataURL(text);
            setQrCode(qr);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <div className="flex items-center justify-center m-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Qr-Code Generator</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    {/* Input field for text */}
                    <input
                        type="text"
                        placeholder="Enter text or URL"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* Button to generate QR code */}
                    <button
                        onClick={generateQrCode}
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Generate QR Code
                    </button>
                    {/* Display generated QR code */}
                    {qrCode && (
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <img src={qrCode} alt="Generated QR Code" className="w-64 h-64 object-contain" />
                            <a
                                href={qrCode}
                                download="qrcode.png"
                                className="text-blue-500 underline"
                            >
                                Download QR Code
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QrCode;
