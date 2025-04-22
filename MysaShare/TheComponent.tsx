import { IonApp, IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './TheStyle.css';


export const Title: React.FC<{ text: string }> = ({ text }) => (
   <h1 style={{ fontFamily: "MainFont", color: 'purple', fontSize: '3rem', textAlign: 'center' }}>
       {text}
   </h1>
);

export const Subtitle: React.FC<{ text: string }> = ({ text }) => (
   <h2 style={{ fontFamily: "MainFont", color: 'purple', fontSize: '2rem', textAlign: 'center' }}>
       {text}
   </h2>
);

export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <IonApp>
        <IonPage>
            <IonContent fullscreen>
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', textAlign: 'center', placeContent: 'center'
                }}>
                    {children}
                </div>
            </IonContent>
        </IonPage>
    </IonApp>
);