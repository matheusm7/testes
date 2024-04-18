import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import "./App.css"
import "@aws-amplify/ui-react/styles.css"

function AuthPage() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <p>Ei {user.username}, bem vindo ao site</p>
            <button className='custom-button' onClick={signOut} style={{backgroundColor: "red"}}>Sair</button>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default AuthPage;
