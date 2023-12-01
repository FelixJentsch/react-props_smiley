import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

const Smiley = ({ isHappy }) => (
  <span className="smiley">{isHappy ? "😁" : "😢"}</span>
);
