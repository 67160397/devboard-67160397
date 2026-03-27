import UserList from "../components/UserList";

function ProfilePage() {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}>
      <div style={{ 
        textAlign: "center", 
        marginBottom: "2rem", 
        padding: "2rem", 
        background: "#f8fafc", 
        borderRadius: "12px",
        border: "1px solid #e2e8f0" 
      }}>
        <div style={{ 
          width: "80px", 
          height: "80px", 
          background: "#1e40af", 
          borderRadius: "50%", 
          margin: "0 auto 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem"
        }}>
          👤
        </div>
        <h2 style={{ margin: 0, color: "#1e40af" }}>ทำเนียบสมาชิก</h2>
        <p style={{ color: "#64748b" }}>รายชื่อนักพัฒนาในระบบ DevBoard</p>
      </div>

      {/* เรียกใช้ Component UserList ที่ดึงข้อมูลจาก API มาแสดง */}
      <UserList />
    </div>
  );
}

export default ProfilePage;