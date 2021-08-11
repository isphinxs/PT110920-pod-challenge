import React from 'react'

function PodChallenge() {
    return (
        <div>
            <h1>Pod Challenge</h1>
            <hr></hr>
            <h2>GOAL: Create a fully functioning react app with state and props using someones javascript project. Practicing creating components in react and implementing both state and props into the components. Start by running `yarn start`</h2>
            <hr></hr>
            <h3>Suggested Steps:</h3>
            <ol>
                <li>Decide who is going to Drive.</li>
                <br/><input />
                <li>Whose Backend are you going to use?</li>
                GITHUB BACKEND <br/><input />
                <li>Or if you can't decide let me know!!! We can work on using json-server instead. (This will not use a rails backend but it will be similar)</li>
                <li>Create Three Components:</li>
                <ol>
                    <li>
                        NavBar (Toggles through Pod Challenge and Container Component)
                    </li>
                    <li>
                        Container Component (that maps through all your singular components)
                        <br/><input />
                    </li>
                    <li>
                        Child Component ( The that has information of the singular json object)
                        <br/><input />
                    </li>
                </ol>
                <li> Set Up your state: Which components should <i>STORE</i> state?</li>
                <li> Set Up proper LifeCycle Methods to Fetch Data</li>
                <li> Send down props to appropriate components </li>
                <li> Make sure you can view the Individual Singular Components:</li>
                <li> Switch Between Pages using NavBar</li>
            </ol>
        </div>
    )
}

export default PodChallenge
