// ดึงองค์ประกอบมาจาก HTML
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// เมื่อมีการคลิกที่ปุ่มแฮมเบอร์เกอร์
hamburger.addEventListener("click", () => {
    // เพิ่มหรือลบคลาส "active" เพื่อเปิด/ปิดเมนู
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// ซ่อนเมนูเมื่อผู้ใช้คลิกเลือกลิงก์ใดลิงก์หนึ่ง (สำหรับมือถือ)
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});