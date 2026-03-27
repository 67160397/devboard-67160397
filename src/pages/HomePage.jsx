import { useState } from "react";
import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

function HomePage() {
  // สร้าง State สำหรับเก็บโพสต์ใหม่ที่ผู้ใช้เพิ่มผ่านหน้าจอ
  const [localPosts, setLocalPosts] = useState([]);

  // ฟังก์ชันจัดการเมื่อมีการกดปุ่ม "เพิ่มโพสต์"
  const handleAddPost = (newPost) => {
    // ใส่ ID แบบสุ่มจำลอง และเพิ่มเข้าไปในรายการ
    const postWithId = { ...newPost, id: Date.now() };
    setLocalPosts([postWithId, ...localPosts]);
    alert("เพิ่มโพสต์สำเร็จ!");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      {/* ส่งฟังก์ชัน handleAddPost ไปให้ฟอร์มใช้งาน */}
      <AddPostForm onAddPost={handleAddPost} />
      
      {/* แสดงโพสต์ใหม่ที่เพิ่มเอง (ถ้ามี) */}
      {localPosts.map(post => (
        <div key={post.id} style={{ border: '2px solid #1e40af', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', background: '#eff6ff' }}>
          <span style={{ color: 'rgb(30, 64, 175)', fontWeight: 'bold' }}>[โพสต์ใหม่ของคุณ]</span>
          <h3 style={{ color: 'rgb(30, 64, 175)', margin: '0.5rem 0' }}>{post.title}</h3>
          <p style={{ color: '#4a5568', margin: 0 }}>{post.body}</p>
        </div>
      ))}

      {/* รายการโพสต์หลักจาก API */}
      <PostList />
    </div>
  );
}

export default HomePage;