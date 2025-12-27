---

## About the Project

**GearGuard** is a smart, workflow‑driven application designed to help organizations efficiently **track assets**, **manage maintenance teams**, and **handle repair requests**.

It connects three core entities:

* **Equipment** – What is broken
* **Maintenance Teams** – Who fixes it
* **Maintenance Requests** – The work to be done

💡 *In short:*

> "One platform to know which asset needs maintenance, who is responsible, and when the work is done — with full visibility."

---

## Key Features

| Feature                  | Description                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Equipment Registry**   | Centralized database for all assets with ownership, location & warranty info. |
| **Team Management**      | Multiple specialized teams with assigned technicians.                         |
| **Maintenance Requests** | Corrective (Breakdown) & Preventive (Routine) workflows.                      |
| **Auto‑Fill Logic**      | Selecting equipment auto‑assigns category & maintenance team.                 |
| **Kanban Workflow**      | Drag & drop requests across stages (New → In Progress → Repaired).            |
| **Calendar View**        | Visual scheduling of preventive maintenance tasks.                            |
| **Smart Buttons**        | View all maintenance requests linked to specific equipment.                   |
| **Overdue Indicators**   | Visual alerts for delayed maintenance tasks.                                  |
| **Scrap Logic**          | Mark equipment as unusable when scrapped.                                     |

---


---

##  Key Features

| Feature                   | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Equipment Registry**    | Centralized database for all assets with ownership, location & warranty info. |
|  **Team Management**      | Multiple specialized teams with assigned technicians.                         |
|  **Maintenance Requests** | Corrective (Breakdown) & Preventive (Routine) workflows.                      |
|  **Auto‑Fill Logic**      | Selecting equipment auto‑assigns category & maintenance team.                 |
|  **Kanban Workflow**      | Drag & drop requests across stages (New → In Progress → Repaired).            |
|  **Calendar View**        | Visual scheduling of preventive maintenance tasks.                            |
|  **Smart Buttons**        | View all maintenance requests linked to specific equipment.                   |
|  **Overdue Indicators**   | Visual alerts for delayed maintenance tasks.                                  |
|  **Scrap Logic**          | Mark equipment as unusable when scrapped.                                     |

---

##  Tech Stack

---

###  Breakdown

| Layer           | Tools / Frameworks                           |
| --------------- | -------------------------------------------- |
| **Frontend**    | React.js, Vite, Tailwind CSS, Framer Motion  |
| **Backend**     | Node.js, Express.js (REST API)               |
| **Database**    | PostgreSQL                                   |
| **ORM**         | Prisma                                       |
| **Auth**        | JWT                                          |
| **HTTP Client** | Axios                                        |
| **Hosting**     | Vercel (Frontend), Vercel / Render (Backend) |

---

##  Functional Workflows

###  Flow 1: Breakdown (Corrective Maintenance)

1. Any user creates a maintenance request
2. Selecting equipment auto‑fills:
   - Equipment category
   - Assigned maintenance team
3. Request starts in **New** state
4. Technician / Manager assigns the request
5. Status moves to **In Progress**
6. Technician records duration
7. Request is marked **Repaired**

---

### Flow 2: Routine Checkup (Preventive Maintenance)

1. Manager creates a **Preventive** request
2. Sets the scheduled maintenance date
3. Request appears in **Calendar View**
4. Technician completes maintenance on scheduled date

---

##  User Experience Highlights

-  **Kanban Board** with drag & drop stages
-  Technician avatar on request cards
- Overdue requests highlighted visually
-  Interactive calendar scheduling
-  Smart button on equipment form with request count badge

---

## Hosted Links



- **Frontend:** [https://vercel.com/satyansh-mishras-projects/imperium-x-t49d](https://vercel.com/satyansh-mishras-projects/imperium-x-t49d🔗)
- **Backend API:** https\://gear-guard-server.onrender.com/

##

---

##  Summary

This project demonstrates a **real‑world maintenance management workflow** with:

- Smart auto‑assignment logic
- Team‑based responsibility
- Calendar‑driven preventive maintenance
- Clean, modern, Odoo‑inspired UX

