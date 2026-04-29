import React from "react";
import { useState } from "react";

import ReactDOM from "react-dom/client";
import Form from "./Form";

ReactDOM.createRoot(document.getElementById("root")).render(<Form />);
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(e) {
        e.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
