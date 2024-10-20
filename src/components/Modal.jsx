/* eslint-disable react/prop-types */
export default function Modal({ score, onClose }) {
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <h2>Your Score is: {score}</h2>
          <button onClick={onClose}>Play Again</button>
        </div>
      </div>
    );
  }
  
  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      color: "black"
    },
  };