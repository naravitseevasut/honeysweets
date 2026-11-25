# ร้านน้ำผึ้ง (Landing page + Google Sheet + Vercel)

โครงสร้าง
- index.html  หน้าร้าน (2 SKUs) + ฟอร์มสั่งซื้อ
- admin.html  หน้าหยิบสินค้า / รายการแพ็ค / ใบจ่าหน้าพัสดุ (พิมพ์ได้)
- config.js   ตั้งค่า URL, สินค้า, ผู้ส่ง
- images/     รูปสินค้า (แยกโฟลเดอร์)
- apps-script/Code.gs  โค้ดฝั่ง Google Sheet

## ขั้นตอน
1. สร้าง Google Sheet ใหม่ > Extensions > Apps Script > วางโค้ดจาก Code.gs
2. Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone > คัดลอก URL
3. วาง URL ใน config.js (API_URL) และตั้ง ADMIN_KEY ให้ตรงกันทั้ง config.js และ Code.gs
4. เปลี่ยนรูปใน images/ เป็นรูปจริง (ชื่อไฟล์ตรงกับ config.js)
5. สร้าง repo ใน GitHub แล้วอัปโหลดไฟล์ทั้งหมด
6. vercel.com > Add New Project > Import repo > Deploy (ไม่ต้องตั้ง Build command)
7. ทดสอบสั่งซื้อที่หน้าเว็บ > ดูแถวใน Sheet > เปิด /admin.html กด "โหลดออเดอร์ใหม่" แล้วพิมพ์
