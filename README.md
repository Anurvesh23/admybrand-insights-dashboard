# ADmyBRAND Insights - AI-Powered Analytics Dashboard

This project is a modern, visually stunning analytics dashboard built to showcase rapid development capabilities using AI-assisted tools. It was created as a submission for the **AI Vibe Coder** internship task.

**Live Demo URL:** (https://admybrand-insights-dashboard.netlify.app/)

-----

## ✨ Features

  * **Modern UI/UX:** A clean and beautiful interface built with **React 19**, **TypeScript**, and **Tailwind CSS** for a professional and intuitive user experience.
  * **Dynamic KPI Cards:** At-a-glance view of essential metrics like Revenue, Users, and Conversions that update in real-time.
  * **Interactive Charts:** Rich data visualizations powered by **Recharts**:
      * Revenue Overview (Line Chart)
      * User Acquisition (Bar Chart)
      * Device Breakdown (Pie Chart)
  * **Advanced Data Table:** A comprehensive table for recent sales, managed by **TanStack Table**, featuring:
      * Client-side **sorting**, **filtering**, and **pagination**.
      * **Export as PDF/CSV** functionality using jsPDF and PapaParse.
  * **Real-time Updates:** The dashboard simulates a live environment by refreshing all data points (KPIs, charts, and table statuses) every 10 seconds.
  * **Responsive Design:** A flawless and fully adaptive experience across desktop, tablet, and mobile devices.
  * **Dark/Light Mode:** Seamless theme switching for optimal user comfort in any lighting condition.
  * **Date Range Filtering:** An advanced filter to select and analyze data from custom date ranges.

-----

## 🚀 Tech Stack

  * **Framework:** React 19
  * **Language:** TypeScript
  * **Styling:** Tailwind CSS
  * **Build Tool:** Vite
  * **UI Components:** Custom components inspired by shadcn/ui
  * **Charting:** Recharts
  * **Table Management:** TanStack Table
  * **Icons:** Lucide React
  * **PDF Export:** jsPDF & jsPDF-AutoTable
  * **CSV Export:** PapaParse

-----

## ⚙️ Getting Started

### Prerequisites

  * Node.js (v16.0 or higher)
  * An npm or yarn package manager

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    cd [repository-folder]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open in browser:** Navigate to `http://localhost:5173` to see the dashboard in action.

### Build for Production

To create a production-ready build of the application, run the following commands:

```bash
# Create the optimized build
npm run build

# Preview the production build locally
npm run preview
```
