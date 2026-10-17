# Break Free Candy | Inventory Management & Sales Automation

### Project Overview

Developed an inventory management and sales automation system to support Break Free Candy's production tracking, inventory monitoring, and multi-channel sales operations.

The project combines Google AppSheet, Google Apps Script, and Google Sheets to streamline data processing and provide an interactive inventory dashboard.

### Technologies Used

- **Google Apps Script (JavaScript):** Webhook processing and workflow automation
- **Google AppSheet:** Inventory management application
- **Google Sheets:** Data storage and sales records
- **Shopify & Faire:** E-commerce sales channels

### Key Features

**1. Automated Sales Data Processing**

- Processes incoming sales data through Google Apps Script webhook handlers.
- Extracts order information from JSON payloads.
- Updates Google Sheets with structured sales records.
- Uses unique transaction identifiers to help prevent duplicate records.

**2. Multi-Channel Sales Integration**

- Handles sales information associated with Shopify retail, Shopify wholesale, and Faire.
- Categorizes transactions by sales channel.
- Applies data transformation logic to standardize sales records.

**3. Inventory Management Dashboard**

- Displays inventory quantities and stock status.
- Tracks production and sales records.
- Visualizes weekly sales and inventory trends.

### System Architecture

```text
Shopify / Faire
      |
      v
Google Apps Script
  (Webhook Processing)
      |
      v
Google Sheets
  (Sales & Inventory Data)
      |
      v
Google AppSheet
  (Inventory Dashboard)
```

*The diagram summarizes the intended data flow; individual integration paths may differ.*

### My Contributions

- Developed Google Apps Script logic for automated sales data processing.
- Implemented JSON parsing, transaction identification, and duplicate detection.
- Worked on multi-channel sales workflows and inventory data integration.
- Built inventory management and reporting components using AppSheet.

### Source Code

See [`scripts/inventory-automation.gs`](scripts/inventory-automation.gs) for the sales automation implementation.

### Project Status

Portfolio documentation of a previously developed business application. The live application is managed separately and may not reflect the original implementation.

### Note

This repository is intended to demonstrate technical skills and project architecture. Any shared examples or screenshots should be approved for public distribution and exclude confidential business information.
