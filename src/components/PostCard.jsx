function PostCard({ title, body, isFavorite, onToggleFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
        position: "relative" // เพิ่มเพื่อให้จัดตำแหน่งปุ่มได้ง่ายขึ้น
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", color: "#1e40af" }}>{title}</h3>
      <p style={{ margin: "0 0 1rem", color: "#4a5568", lineHeight: 1.6 }}>
        {body}
      </p>

      {/* ปุ่มถูกใจ */}
      <button
        onClick={onToggleFavorite}
        style={{
          background: "none",
          border: "1px solid " + (isFavorite ? "#e53e3e" : "#cbd5e0"),
          cursor: "pointer",
          fontSize: "0.9rem",
          padding: "0.4rem 0.8rem",
          borderRadius: "20px",
          color: isFavorite ? "#e53e3e" : "#718096",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "all 0.2s"
        }}
      >
        <span>{isFavorite ? "❤️" : "🤍"}</span>
        {isFavorite ? "ถูกใจแล้ว" : "ถูกใจ"}
      </button>
    </div>
  );
}

export default PostCard;