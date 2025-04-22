import React from 'react';

export const Title: React.FC<{ text: string }> = ({ text }) => (
   <h1 style={{ fontFamily: "Font_B", color: 'purple', fontSize: '3rem', textAlign: 'center' }}>
       {text}
   </h1>
);

export const Subtitle: React.FC<{ text: string }> = ({ text }) => (
   <h2 style={{ fontFamily: "Font_B", color: 'purple', fontSize: '2rem', textAlign: 'center' }}>
       {text}
   </h2>
);