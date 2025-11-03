# Login Credentials

## Processor Dashboard (Internal Tool)

**Purpose:** This is a UI/UX mockup - authentication is bypassed for demonstration purposes.

### Login Access

**Any email/password combination will work** since this is Phase 1 mockup.

Simply enter any email (e.g., `processor@fyniq.com`) and any password, and you'll be redirected to the dashboard.

**In Phase 2 (Backend Integration):**
Real authentication will be implemented with:
- JWT tokens
- Bcrypt password hashing
- Session management
- Role-based access control (Processor vs Manager)

---

## Company Context

**FynIQ** = The Lending Platform (the company)
- Internal tool for loan processors
- This dashboard is for FynIQ employees

**Encore Finance** = A Customer (borrower using FynIQ's services)
- One of many customers in the system
- Uses the Customer Document Portal (separate project)
- Loans from Encore Finance appear in this processor dashboard

### Current Mock Data

The dashboard shows loans from various customers including:
- Encore Finance (customer)
- Wilson Real Estate Holdings (customer)
- Martinez Apartments LLC (customer)
- Thompson Plaza Partners (customer)
- Chen Property Group (customer)
- Garcia Properties Inc (customer)

---

## Quick Start

1. Go to `http://localhost:3000`
2. You'll be redirected to `/login`
3. Enter **any email** (e.g., `sarah.chen@fyniq.com`)
4. Enter **any password** (e.g., `password123`)
5. Click **Sign In →**
6. You'll be redirected to `/dashboard`

**No validation in Phase 1 mockup!**

---

## Test Users (For Phase 2)

When backend is implemented, these will be the test accounts:

### Loan Processors
- sarah.chen@fyniq.com (Sarah Chen) - 18 active loans
- michael.torres@fyniq.com (Michael Torres) - 15 active loans
- jennifer.liu@fyniq.com (Jennifer Liu) - 12 active loans
- david.kim@fyniq.com (David Kim) - 20 active loans

### Managers
- manager@fyniq.com (Operations Manager) - Access to analytics dashboard

**Default password for all test accounts:** `FynIQ2025!`

---

## Customer Portal Credentials (Separate Project)

For the **Customer Document Portal** (borrowers view):

**Email:** jane.borrower@example.com
**Password:** demo123

This is a different application where customers (like Encore Finance) log in to upload documents for their loan applications.
