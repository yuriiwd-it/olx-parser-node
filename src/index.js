import { fetchPage, BASE_URL } from "./fetcher.js";
import { parsePage } from "./parser.js";
import { createWorkbook, saveWorkbook } from "./excel.js";

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function main() {
    const { workbook, worksheet } = await createWorkbook();

    let url = `${BASE_URL}?offset=0`;
    let pageNum = 1;

    while (url) {
        const data = await fetchPage(url);
        if (!data) break;

        url = await parsePage(data, worksheet);
        console.log(`\x1b[32mPage ${pageNum} processed\x1b[0m`);

        if (url) {
            const delay = Math.random() * (6 - 3) + 3;
            console.log(` → \x1b[33mDelay ${delay.toFixed(1)}с\x1b[0m`);
            await sleep(delay * 1000);
        }

        pageNum += 1;
    }

    await saveWorkbook(workbook, "olx_offers.xlsx");
    console.log("\x1b[32mDone! The Excel file is created in the output folder.\x1b[0m");
}

main();