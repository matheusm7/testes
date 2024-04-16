import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function AuthPage() {
  return (
    <div className="App">
      <withAuthenticator>
        {({ signOut, user }) => (
          <>
            <p>Ei {user.username}, bem vindo ao site</p>
            <button onClick={signOut}>Sair</button>
          </>
        )}
      </withAuthenticator>
    </div>
  );
}

export default withAuthenticator(AuthPage);
