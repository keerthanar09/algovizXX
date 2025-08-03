import React from "react";
import NavBar from "../components/UI/navbar";


function About() {
  return (
    <div className="container text-white">
        <NavBar />
      <h1 className="text-center mb-4">About Algorithm Visualizer</h1>

      <p className="lead">
        This web application is designed to help users understand how popular
        algorithms work through interactive visualizations. Whether you're a
        beginner or revising for an interview, this tool makes complex logic easy to follow.
      </p>

      <h4 className="mt-5">✨ Key Features:</h4>
      <ul>
        <li>Visualize sorting and pathfinding algorithms in real time</li>
        <li>Adjustable input sizes and speeds</li>
        <li>Responsive design and animations</li>
        <li>Pause/Play and step-by-step controls</li>
      </ul>

      <h4 className="mt-4">🛠️ Built With:</h4>
      <ul>
        <li>React.js (Frontend Framework)</li>
        <li>Bootstrap (Styling)</li>
        <li>Custom CSS Animations</li>
      </ul>

      <h4 className="mt-4">📚 How It Works:</h4>
      <p>
        Select an algorithm from the list and watch it process data in real-time.
        The settings panel allows users to control number of elements and animation.
      </p>

      <h4 className="mt-4">📁 Source Code:</h4>
      <p>
        <a href="https://github.com/keerthanar09/algovizXX" className="text-info" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </p>
    </div>
  );
}

export default About;
