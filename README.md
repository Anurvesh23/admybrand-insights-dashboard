# ADmyBRAND Insights - AI-Powered Analytics Dashboard

This project is a modern, visually stunning analytics dashboard built rapidly using AI-assisted development tools.

---

## ✨ Features

-   **Modern UI/UX:** Clean, beautiful interface built with React, TypeScript, and Tailwind CSS.
-   **Key Metric Cards:** At-a-glance view of essential KPIs like Revenue, Users, and Conversions.
-   **Interactive Charts:**
    -   Revenue Overview (Line Chart)
    -   User Acquisition (Bar Chart)
    -   Device Breakdown (Pie Chart)
-   **Responsive Data Table:** A comprehensive table for recent sales with client-side sorting, filtering, and pagination.
-   **Responsive Design:** Flawless experience on desktop, tablet, and mobile devices.
-   **Dark/Light Mode:** Seamless theme switching for user comfort.
-   **Date Range Filtering:** An advanced filter to select custom date ranges for analysis.
-   **Real-time Updates:** Simulated real-time data updates every 10 seconds for dynamic dashboard experience.
-   **Export Functionality:** Export sales data as PDF or CSV files with a single click.

---

## 🚀 Tech Stack

-   **Framework:** React 19
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** Custom components inspired by shadcn/ui
-   **Charting:** Recharts
-   **Icons:** Lucide React
-   **Table Management:** TanStack Table
-   **PDF Export:** jsPDF with jsPDF-AutoTable
-   **CSV Export:** PapaParse
-   **Build Tool:** Vite

---

## ⚙️ Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn package manager

### Running the Application

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    ```bash
    npm run dev
    ```

3.  **Open Browser:** Navigate to `http://localhost:5173` to view the dashboard.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔄 Real-time Updates

The dashboard simulates real-time data updates every 10 seconds, including:
- KPI metric changes
- Revenue chart updates
- User acquisition data fluctuations
- Device breakdown adjustments
- Sales status updates

---

## 📊 Export Features

The Recent Sales table includes export functionality:
- **Export as CSV:** Downloads sales data in CSV format
- **Export as PDF:** Generates a formatted PDF report of sales data

Both export options preserve the current table data and formatting.
