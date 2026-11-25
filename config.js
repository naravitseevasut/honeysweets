// แก้ค่าตรงนี้ที่เดียว (ใช้ทั้งหน้าร้านและหน้าแอดมิน)
const CONFIG = {
  API_URL: "PASTE_APPS_SCRIPT_WEB_APP_URL_HERE", // URL ของ Apps Script หลัง Deploy
  ADMIN_KEY: "change-me-123",                     // ต้องตรงกับ ADMIN_KEY ใน Code.gs
  SENDER: { name: "ร้านน้ำผึ้งบ้านสวน", phone: "08x-xxx-xxxx", address: "123 ม.4 ต.ตัวอย่าง อ.เมือง จ.เชียงใหม่ 50000" },
  PRODUCTS: [
    { sku: "HNY-LONGAN-500", name: "น้ำผึ้งดอกลำไย", size: "500 กรัม", price: 250, image: "images/honey-longan.svg",
      desc: "หวามนุ่ม กลิ่นหอมอ่อน สีอำพันเข้ม เหมาะกับชาและโยเกิร์ต" },
    { sku: "HNY-WILD-500", name: "น้ำผึ้งป่าดอกไม้ป่า", size: "500 กรัม", price: 290, image: "images/honey-wild.svg",
      desc: "รสเข้มข้น กลิ่นดอกไม้หลายชนิด เก็บจากรังผึ้งโพรงในป่า" }
  ]
};
