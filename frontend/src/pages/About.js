import React from "react";
import NavBar from "../components/UI/navbar";


function About() {
  return (
    <div className="container text-white">
      <NavBar />
      <h1 className="text-center mb-4">About Algorithm Visualizer</h1>

      <p className="lead">
        The Algorithm Visualizer Application (AVA) is a web application that is
        designed to help users understand how various algorithms work through
        interactive visualizations. This application was initially a college
        group project created using React and p5.js for the frontend and Django
        as the backend, but I figured that I can make better visualizations
        using SVG, and make them faster than I can create a p5 animation. So
        this project is an attempt at creating beautiful and interactive
        visualizations using React and SVG to make the process of learning new
        algorithms a lot easier! You can still find the code for the older
        version using p5 by clicking{" "}
        <a href="https://github.com/keerthanar09/algorithm_visualizer">here.</a>
        <br />
        <br />
        This website is only an MVP as of 05-08-2025. Improvements are
        continuously being made to this application, so any <a href ="https://forms.gle/THpSf3cjAFJSGyxV6">feedback</a> on the
        application (bugs, expected functionalities, new algorithms, etc) is
        welcome!
      </p>

      <h4 className="mt-5">✨ Key Features:</h4>
      <ul>
        <li>
          Visualize sorting and pathfinding algorithms using SVG components
        </li>
        <li>Adjustable input sizes</li>
        <li>Responsive design and animations</li>
        <li>Pause/Play controls</li>
      </ul>

      <h4 className="mt-4">🛠️ Built With:</h4>
      <ul>
        <li>React.js (Frontend Framework)</li>
        <li>SVG</li>
        <li>Django (Backend Framework)</li>
        <li>Bootstrap (Styling)</li>
        <li>CSS Animations using animate.css</li>
      </ul>

      <h4 className="mt-4">📚 How It Works:</h4>
      <p>
        Select an algorithm from the list and watch it process data in
        real-time. The settings panel allows users to control number of elements
        used for input for the given algorithm.
      </p>

      <h4 className="mt-4">✨ Future Features(what to expect)</h4>
      <ul>
        <li>
          Speed of visualizations, autoplay/prev-next controls for all
          algorithms.
        </li>
        <li>Custom user input for algorithms.</li>
        <li>
          Open compiler to see which step of the algorithm is being executed.
        </li>
        <li>
          More detailed visualizations with variable labels and explanations.{" "}
        </li>
        <li>
          Various new varieties of algorithms!
        </li>
        <li>
          <b>Complexity analysis and comparison for algorithms with same functionalities</b>
        </li>
      </ul>

      <h4 className="mt-4">🪄 Available Algorithms:</h4>
      <ol>
        <h5>Sorting Algorithms:</h5>
        <li>Bubble sort</li>
        <li>Selection sort</li>
        <li>Insertion sort</li>
        <li>Merge sort</li>
        <li>Quick sort</li>
      </ol>
      <ol>
        <h5>Path-Finding Algorithms:</h5>
        <li>Dijkstra's Algorithm</li>
        <li>Depth First Search</li>
        <li>Breath First Search</li>
        <li>Bellman-Ford's Algorithm</li>
      </ol>
      <ol>
        <h5>Search Algorithms:</h5>
        <li>Linear Search</li>
        <li>Binary Search</li>
      </ol>

      <h4 className="mt-4">📁 Source Code:</h4>
      <p>
        Here's the ~
        <a
          href="https://github.com/keerthanar09/algovizXX"
          className="text-info"
          target="_blank"
          rel="noreferrer"
        >
          source code and full documentation
        </a>
        ~ for the Algorithm Visualization Application!
      </p>
      <h4 className="mt-4">💌 Feedback: </h4>
      Your feedback is highly valued! It'll help with updating and adding new features to the application 
      so that you have an even seamless experience!<br/><a href ="https://forms.gle/THpSf3cjAFJSGyxV6">~ Feedback form ~</a> <br/><br/>
    </div>
  );
}

export default About;
