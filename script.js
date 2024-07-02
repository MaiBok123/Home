var unlockedWeeks = [];

function toggleContent(id, week) {
    if (!unlockedWeeks.includes(week)) {
        alert('คุณยังไม่สามารถเปิดดูเนื้อหาของสัปดาห์นี้ได้');
        return;
    }
    
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// ฟังก์ชัน unlockWeek และ lockWeek ถูกเรียกในตอนท้ายของ script.js เพื่อปลดล็อกและล็อกสัปดาห์ตามที่ต้องการ
unlockWeek(1);
unlockWeek(2);

lockWeek(3);
lockWeek(4);

function unlockWeek(week) {
    if (!unlockedWeeks.includes(week)) {
        unlockedWeeks.push(week);
        alert('คุณได้ปลดล็อกเนื้อหาสำหรับสัปดาห์ที่ ' + week);
    } else {
        alert('เนื้อหาสำหรับสัปดาห์ที่ ' + week + ' ได้ถูกปลดล็อกแล้ว');
    }
}

function lockWeek(week) {
    var index = unlockedWeeks.indexOf(week);
    if (index !== -1) {
        unlockedWeeks.splice(index, 1);
        alert('คุณได้ล็อกเนื้อหาสำหรับสัปดาห์ที่ ' + week);
    } else {
        alert('เนื้อหาสำหรับสัปดาห์ที่ ' + week + ' ถูกล็อกอยู่แล้ว');
    }
}
