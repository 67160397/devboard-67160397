import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true);
        // ดึงข้อมูลคอมเมนต์ตาม id ของโพสต์ที่ส่งมา
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        if (!res.ok) throw new Error("ดึงความคิดเห็นไม่สำเร็จ");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [postId]); // สำคัญมาก: ถ้า postId เปลี่ยน จะ fetch ข้อมูลใหม่ทันที

  if (loading)
    return <p style={{ color: "#718096", fontSize: "0.85rem" }}>กำลังโหลดความคิดเห็น...</p>;
  if (error) return <p style={{ color: "#c53030", fontSize: "0.85rem" }}>{error}</p>;

  return (
    <div style={{ marginTop: "0.75rem", borderTop: "1px dashed #e2e8f0", paddingTop: "0.5rem" }}>
      <strong style={{ color: "#4a5568", fontSize: "0.85rem" }}>
        ความคิดเห็น ({comments.length})
      </strong>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            background: "#f7fafc",
            borderRadius: "6px",
            padding: "0.5rem 0.75rem",
            marginTop: "0.5rem",
            fontSize: "0.8rem",
          }}
        >
          <div style={{ fontWeight: "bold", color: "#2d3748" }}>{comment.name}</div>
          <div style={{ color: "#718096" }}>{comment.body}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;