const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const accountNumber = document.getElementById('account-number').innerText;
        navigator.clipboard.writeText(accountNumber).then(() => {
            const copyMsg = document.getElementById('copy-msg');
            if(copyMsg) {
                copyMsg.classList.add('show');
                setTimeout(() => { copyMsg.classList.remove('show'); }, 2500);
            }
        }).catch(err => {
            console.error('ไม่สามารถคัดลอกได้:', err);
            alert('เบราว์เซอร์ไม่รองรับการคัดลอกอัตโนมัติ กรุณาคัดลอกด้วยตนเองครับ');
        });
    });
}