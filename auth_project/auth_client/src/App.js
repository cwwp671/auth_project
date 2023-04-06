import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE_URL = "http://localhost:8000/api/";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");

    const register = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/register/", {
                user: {
                    username: username,
                    password: password,
                },
                bio: bio,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert("Error registering user");
        }
    };

    const login = async () => {
        try {
            const response = await axios.post(API_BASE_URL + "login/", {
                username,
                password,
            });
            localStorage.setItem("access_token", response.data.access);
        } catch (error) {
            alert("Error logging in.");
        }
    };

    const getProfile = async () => {
        try {
            const response = await axios.get(API_BASE_URL + "profile/", {
                headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
            });
            alert(`Your bio: ${response.data.bio}`);
        } catch (error) {
            alert("Error fetching profile.");
        }
    };

    return (
        <div className="App">
            <h1>Authentication Client</h1>
            <div className="form-container">
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <button onClick={register}>Register</button>
            </div>
            <div className="form-container">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login}>Login</button>
            </div>
            <div className="form-container">
                <h2>Get Profile</h2>
                <button onClick={getProfile}>Get Profile</button>
            </div>
        </div>
    );
}

export default App;
