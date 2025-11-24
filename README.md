# tutorial-user-feedback
Tutorial Project for Adding User Feedback

## Tutorial Steps

### Prerequisites

Having access to LaunchDarkly app.

*Note: If you do NOT have access to LaunchDarkly observability features, comment lines 19 to 24 in `src/app.tsx`.*


### Initialize this application with your project

**1 - Install dependencies:**
```bash
npm i
```

**2 - Add your project information:**
```bash
cp .env.example .env
```

**3 - Add your project Key and client side ID in the .env file**

**4 - Add context & flagKey information in src/app.tsx**

In the file `src/app.tsx`, add your flagKey as well as the context information. This will be the demo user we use to evaluations and feedback.

**5 - Run the application & verify that you are connected to LaunchDarkly**

A - Run the app with this command:
```bash
npm run dev
```

B - Navigate to http://localhost:5174/.

C - You should see here the page loaded and buttons to send evaluations. Hit one of those buttons.

D - To verify the evaluation have been sent, navigate to the LaunchDarkly app. Then, go to the flag you selected, and look at the evaluations. You should see a new one there.

### Add User Feedback

**6 - Add the code to send feedback**

A - From this flag page, navigate to the Feedback tab.

B - In there, click the CTA to configure feedback, this should open a modal.

C - From the "SDK setup" tab of this modal, select the language "typescript". Copy the code provided there. In this repo, add a new file `src/sendFeedback.ts` and paste the code into it.

*Note: You can modify this function at will, but the event sent through the SDK track method should keep the same structure.*

D - Back on the Flag page, navigate to the "React examples" page. You can change the prompt asked to users on this page. From there, copy the code provided, and paste it into a new file `src/feedbackPopover.tsx`.

*Note: You can select another example from the dropdown there and follow the same pattern. You can also modify this component at will*

E - From the application code, in app.tsx, add a HTML tag into the return of the main function. It should look something like:
```tsx
return (
    <>
        ...
        <div>
            <h2>Send Feedback Below</h2>
            <div>
                <FeedbackPopover ldClient={client} />
            </div>
        </div>
    </>
);
```

**7 - Verify that the feedback is being sent**

A - Refresh the app and navigate to http://localhost:5174/.

B - On the page, click the button sendFeedback and send your first feedback event.

C - Navigate to the flag details page in your launchdarkly app. From there, go to the "Feedback" tab, and select the environment you used to retrieve the client-side ID.

D - There, you will see your feedback.

*Note: You might need to wait a few minutes to see the feedback reflected there.*


Bravo! You've successfully added LauchDarkly user feedback to your React app!


## Using this in your production app

To do so, you can follow the steps 6 and 7 in your client side app, and test out the feedback being sent!

Once you have feedback integrated and tested out, you can start making your first feedback campaigns and harvest the fruit of your efforts here! 


## Using this beyond the tutorial

This app can come in handy if you want to try the Feedback feature and populate flags with evaluation and feedback values.

You can play around with the context, evaluation, and feedback to see the User Feedback product in action!

You can also make changes to the feedback component and try it out here!



**Happy development with LaunchDarkly's User Feedback!**

