import { useState } from "react";
import Header from "../home/HomeAHGS/Header";

const MotorControl = () => {
  const [motorStatus, setMotorStatus] = useState(false);
  const [motorSpeed, setMotorSpeed] = useState(75);

  const toggleMotor = () => {
    setMotorStatus(!motorStatus);
  };

  const handleSpeedChange = (event) => {
    setMotorSpeed(event.target.value);
  };

  return (
    <div style={styles.container}>
      <Header />
      <h2 style={styles.heading}>Motor Control</h2>
      <div style={styles.motorControl}>
        <div style={styles.status}>
          <span>Motor Status:</span>
          <label style={styles.switch}>
            <input type="checkbox" checked={motorStatus} onChange={toggleMotor} />
            <span style={styles.slider}></span>
          </label>
          <span>{motorStatus ? "ON" : "OFF"}</span>
        </div>
        <p>Motor Speed:</p>
        <input
          type="range"
          min="0"
          max="100"
          value={motorSpeed}
          onChange={handleSpeedChange}
          style={styles.sliderRange}
        />
        <p>{motorSpeed}%</p>
      </div>

      <h2 style={styles.heading}>Sensor Data</h2>
      <div style={styles.sensorData}>
        <div style={styles.sensorBox}>
          <span>💧</span>
          <p>Humidity</p>
          <p>65%</p>
        </div>
        <div style={styles.sensorBox}>
          <span>☔</span>
          <p>Rain Sensor</p>
          <p>Dry</p>
        </div>
        <div style={styles.sensorBox}>
          <span>🌡️</span>
          <p>Temperature</p>
          <p>24°C</p>
        </div>
        <div style={styles.sensorBox}>
          <span>🌱</span>
          <p>Soil Moisture</p>
          <p>30%</p>
        </div>
      </div>

      <button style={styles.resetButton} onClick={() => window.location.reload()}>
        Reset
      </button>
    </div>
  );
};


const styles = {
  container: {
    backgroundColor: "#E8F5E9",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    color: "#2E7D32",
    margin: "20px 0",
  },
  motorControl: {
    margin: "20px auto",
  },
  status: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  switch: {
    position: "relative",
    display: "inline-block",
    width: "34px",
    height: "20px",
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    borderRadius: "34px",
    transition: ".4s",
  },
  sliderRange: {
    width: "80%",
    margin: "10px auto",
  },
  sensorData: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "center",
    margin: "20px auto",
  },
  sensorBox: {
    backgroundColor: "#fff",
    border: "1px solid #2E7D32",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: "#2E7D32",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MotorControl;


