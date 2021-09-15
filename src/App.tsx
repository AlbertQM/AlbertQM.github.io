import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.span
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ rotate: [-25, 25, -25] }}
        >
          Work in progress.
        </motion.span>
      </header>
    </div>
  );
}

export default App;
