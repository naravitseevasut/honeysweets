// วางใน Google Sheet > Extensions > Apps Script แล้ว Deploy เป็น Web app
// Execute as: Me | Who has access: Anyone
const ADMIN_KEY = "change-me-123"; // ต้องตรงกับ config.js
const SHEET = "Orders";
const HEADERS = ["OrderID","Timestamp","SKU","Product","Qty","Total","Name","Phone","Address","Subdistrict","District","Province","Zip","Note","Status"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  return sh;
}

// รับออเดอร์จากหน้าเว็บ
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const sh = sheet_();
    const id = "HN" + Utilities.formatDate(new Date(), "Asia/Bangkok", "yyMMddHHmmss");
    (d.items || []).forEach(it => {
      sh.appendRow([id, new Date(), it.sku, it.name, it.qty, it.qty * it.price,
        d.name, "'" + d.phone, d.address, d.subdistrict, d.district, d.province, "'" + d.zip, d.note || "", "NEW"]);
    });
    return json_({ ok: true, orderId: id });
  } catch (err) { return json_({ ok: false, error: String(err) }); }
}

// ให้หน้า admin ดึงออเดอร์ (ต้องมี key)
function doGet(e) {
  if (e.parameter.key !== ADMIN_KEY) return json_({ ok: false, error: "unauthorized" });
  const v = sheet_().getDataRange().getValues();
  const h = v.shift();
  const rows = v.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]])));
  return json_({ ok: true, rows });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
