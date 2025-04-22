import React from 'react';
import './style.css';


const Title: React.FC<{ text: string }> = ({ text }: { text: string }) => (
    <h1 style={{fontFamily: "'Fontdiner Swanky', cursive", color:'purple', fontSize: '3rem', textAlign: 'center'}}>
        {text}
    </h1>);

const Subtitle: React.FC<{ text: string }> = ({ text }: { text: string }) => (
    <h1 style={{fontFamily: "'Fontdiner Swanky', cursive", color:'purple', fontSize: '2rem', textAlign: 'center'}}>
        {text}
    </h1>);


export default {Title, Subtitle};