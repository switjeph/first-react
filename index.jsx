import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))
root.render(
    <main>
        <img src="react-logo.png" width="40px" alt="React logo" />
        <h1>Fun fact about React by Jeph!</h1>
        <ul>
            <li>was first release in 2013!</li>
            <li>was originally created by Jordan walke</li>
            <li>Has well over 200k stars on GitHub</li>
            <li>Is maintained by Meta </li>
            <li>Powers thousands of enterprice apps, including mobile apps</li>
        </ul>
    </main>
)