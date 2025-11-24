import React, { useMemo } from 'react';

import Observability from '@launchdarkly/observability';
import SessionReplay from '@launchdarkly/session-replay';
import { initialize, type LDClient } from 'launchdarkly-js-client-sdk';

const context = { // Modify the context here
  kind: 'user',
  key: 'bob',
  email: 'boblistens@devwithgoodpractices.com',
  name: 'Bob Listens'
};
const flagKey = "feedback-demo"; // Add your flag key here

const App: React.FC = () => {
  const client: LDClient = useMemo(() => {
    return initialize(import.meta.env.VITE_LAUNCHDARKLY_CLIENT_SIDE_ID, context, {
      // Comment those lines below if you do NOT have access to LaunchDarkly observability
      // ---------------
      plugins: [
        new Observability(),
        new SessionReplay(),
      ],
      // ---------------
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendEvaluation = async (flagKey: string, variation: boolean) => {
    try {
      await client.identify(context);
      await new Promise(resolve => setTimeout(resolve, 10));
      await client.variation(flagKey, variation);
      await new Promise(resolve => setTimeout(resolve, 1));
    } catch (error) {
      console.error('Evaluations failed:', error);
    }
  }

  return (
    <>
      <div>
        <h1>LaunchDarkly User Feedback</h1>
        <h2>Tutorial App</h2>
        <p>
          To get started, follow the instructions in README.md!
        </p>
      </div>
      <br />
      <div>
        <h2>Send Evaluation</h2>
        <div>
          <button onClick={() => sendEvaluation(flagKey, false)}>Send Evaluation to False</button>
          <br />
          <br />
          <button onClick={() => sendEvaluation(flagKey, true)}>Send Evaluation to True</button>
        </div>
      </div>
      <div>
        <h2>Send Feedback Below</h2>
        <div>
          {/* Add the feedback here */}
        </div>
      </div>
    </>
  );
};

export default App;

