function doPost(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("SalesLog");

  const data = JSON.parse(e.postData.contents);
  const source = e.parameter.source || "shopify";

  const isWholesale = source === "wholesale";

  const skuMap = {
    "1019": "BFC-004",
    "1016": "BFC-003",
    "1027": "BFC-013",
    "1010": "BFC-009",
    "1018": "BFC-001",
    "1028": "BFC-012",
    "1017": "BFC-002",
    "1013": "BFC-010",
    "1029": "BFC-011",
    "1012": "BFC-005",
    "1015": "BFC-007",
    "1011": "BFC-006",
    "1014": "BFC-008"
  };

  const orderId = data.name || data.id;
  const date = data.created_at ? data.created_at.substring(0, 10) : "";

  const existingKeys = sheet
    .getRange(2, 6, Math.max(sheet.getLastRow() - 1, 1), 1)
    .getValues()
    .flat();

  data.line_items.forEach(item => {
    let originalSku = item.sku || "";
    let productId = originalSku;

    const isFaireOrder = skuMap.hasOwnProperty(originalSku);

    if (isFaireOrder) {
      productId = skuMap[originalSku];
    }

    let channel = isFaireOrder
      ? "Faire"
      : isWholesale
        ? "Shopify Wholesale"
        : "Shopify";

    let multiplier = isFaireOrder
      ? 1
      : isWholesale
        ? 12
        : 4;

    if (
      productId === "BFC-011" ||
      productId === "BFC-012" ||
      productId === "BFC-013"
    ) {
      multiplier = isFaireOrder ? 1 : 20;
    }

    const quantitySold = Number(item.quantity || 0) * multiplier;
    const uniqueKey = source + "-" + orderId + "-" + item.id;

    if (!existingKeys.includes(uniqueKey)) {
      sheet.appendRow([
        orderId,
        date,
        productId,
        quantitySold,
        channel,
        uniqueKey
      ]);
    }
  });

  return ContentService.createTextOutput("success");
}
