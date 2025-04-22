import React from 'react';

export const Title: React.FC<{ text: string }> = ({ text }: { text: string }) => (
    <h1 style={{fontFamily: 'Font_A', color:'purple', fontSize: '3rem', textAlign: 'center'}}>
        {text}
    </h1>);

export const SubTitle: React.FC<{ text: string }> = ({ text }: { text: string }) => (
    <h1 style={{fontFamily: 'Font_A', color:'purple', fontSize: '2rem', textAlign: 'center'}}>
        {text}
    </h1>);