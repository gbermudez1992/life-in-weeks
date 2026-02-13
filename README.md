# Life in Weeks - Memento Mori

A minimalist, high-contrast visualization of your life in weeks. This application assumes a global average life expectancy of 73 years and maps it onto a 52-column grid, offering a stark perspective on time lived versus time remaining.

> "You act like mortals in all that you fear, and like immortals in all that you desire." — Seneca

## Features

- **Visualizing Time:** A responsive grid representing ~3,800 weeks of life.
- **Paper & Ink Aesthetic:** A clean, high-contrast theme designed to focus the mind.
- **Life Stats:** Instant calculation of weeks lived and weeks remaining based on your birth date.
- **Interactive Tooltips:** Hover over any week to see the date range and your age at that specific time.
- **Data Persistence:** Your birth date is saved locally, so you don't have to re-enter it every time.

## Tech Stack

This project is built with a focus on simplicity, performance, and modern web standards.

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Vanilla CSS (CSS Variables for theming)
- **Deployment:** Netlify (or ready for any static host)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/life-in-boxes.git
    cd life-in-boxes
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm run dev
    # or
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    pnpm run build
    ```

## Philosophy

The design is intentionally stark. The "passed" weeks are filled with heavy, permanent ink `(#1A1A1A)`, while the "current" week pulses with urgency `(#D32F2F)`. The future remains an unwritten, faint outline. This visualization serves as a digital _Memento Mori_—a reminder of the finite nature of our time.
