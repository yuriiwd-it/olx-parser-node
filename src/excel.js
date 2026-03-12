import ExcelJS from "exceljs";

export async function createWorkbook() {
    const workbook = new ExcelJS.Workbook();
    const ws = workbook.addWorksheet("OLX");

    const headers = ["ID","Title","URL","Description","Price","Currency","Bargain","City","Region","Date","Photo","Salesman","Business"];
    const headerRow = ws.addRow(headers);

    headerRow.eachCell(cell => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "4F81BD" } };
        cell.alignment = { horizontal: "center", wrapText: true };
    });

    ws.views = [{ state: 'frozen', ySplit: 1 }];
    ws.columns = headers.map(() => ({ width: 35 }));

    return { workbook, worksheet: ws };
}

export async function saveWorkbook(workbook, filename) {
    await workbook.xlsx.writeFile(`output/${filename}`);
}