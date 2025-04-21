import React from 'react';


export const Title: React.FC<{ text: string }> = ({ text }: { text: string }) => (<h1>{text}</h1>);