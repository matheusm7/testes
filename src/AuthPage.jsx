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
            <button onClick={signOut}>Sair</button>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Authenticator(AuthPage);
