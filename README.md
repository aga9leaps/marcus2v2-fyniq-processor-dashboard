# Loan Processor Pipeline Dashboard - UI/UX Mockup

**Version:** 1.0 (Phase 1 - UI/UX Mockup)
**Status:** Ready for Stakeholder Review
**Purpose:** Visual mockup of internal operations dashboard for loan processors

---

## 🎯 Project Overview

This is a **data-dense, professional internal tool mockup** designed for loan processors at **FynIQ** to manage their pipeline efficiently. This Phase 1 deliverable focuses on UI/UX visualization with clickable interactions (alerts) to demonstrate workflow before backend development.

**Company Context:**
- **FynIQ** = The lending platform company (this is their internal tool)
- **Encore Finance** = A customer borrower using FynIQ's services
- Processors at FynIQ handle loans from multiple customers (Encore Finance, Wilson RE, Martinez Apts, etc.)

**Design Philosophy:**
- ⚡ **Efficiency Over Beauty** - Function first, form second
- 📊 **Information Density** - 6px grid, 14px font (tighter than customer portal)
- 🎯 **Instant Clarity** - At-risk loans prominently displayed with red badges
- 🚨 **Status-Driven** - Color-coded badges (red/yellow/green) everywhere

**Inspired by:** Salesforce CRM, Linear, Monday.com, Airtable

---

## 🚀 Quick Start

### Development (Local)
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
http://localhost:3000

# Login: ANY email/password works (mockup mode)
# Example: processor@fyniq.com / password123
```

### Build for GitHub Pages
```bash
# Build static export
npm run build:github-pages

# Output in /out directory
# Deploy /out to gh-pages branch
```

---

## 📋 Features Implemented (Phase 1)

### ✅ Pages Completed

1. **Login Page** (`/login`)
   - Simple, professional design
   - Email + password fields
   - Security notice
   - Skip auth → Go to dashboard

2. **Main Dashboard** (`/dashboard`)
   - **At-Risk Loans Section** (red, always top)
     - Critical/high priority loans
     - Countdown badges (days to closing)
     - Risk reasons displayed
   - **Closing Today Section** (orange)
     - Loans closing today
   - **All Other Loans Section** (collapsible)
     - Regular pipeline loans
   - Compact loan cards with:
     - Status badges (URGENT, HIGH)
     - Document progress bars
     - Quick action buttons (Call, Email, View)
     - Last activity timestamps

3. **Loan Detail View** (`/dashboard/loans/[id]`)
   - **3-Column CRM Layout:**
     - **Left (30%):** Loan information
       - Borrower details + quick call button
       - Property details
       - Loan details
       - Key dates
       - Team assignments
       - Risk assessment
     - **Center (40%):** Pending tasks (PRIMARY FOCUS)
       - Task list with checkboxes
       - Priority badges
       - Due dates
       - [Add Task] button
     - **Right (30%):** Documents
       - Document status badges
       - Progress bar
       - Request/upload buttons
   - **Tabs:** Overview | Tasks | Documents | Activity | Calls | Notes

### 🎨 Design System

**Colors:**
- At-Risk: `#DC2626` (red)
- Warning: `#F59E0B` (amber)
- Success: `#10B981` (green)
- Accent: `#CC7A3E` (terracotta - brand)

**Spacing:**
- 6px base grid (tighter than customer portal's 8px)
- Compact padding: 12-16px cards (vs 24px customer portal)

**Typography:**
- 14px base font (vs 16px customer portal)
- 13px small text
- 12px labels/timestamps

**Components:**
- Compact buttons (8px 16px padding)
- Small status badges (3px 8px, 11px font)
- Tight table rows (48px height)

---

## 📁 Project Structure

```
processor_dashboard/
├── app/
│   ├── globals.css              # Tailwind + custom CSS
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Redirect to /login
│   ├── login/
│   │   └── page.tsx             # Login page
│   └── dashboard/
│       ├── layout.tsx           # Dashboard layout with nav
│       ├── page.tsx             # Main pipeline dashboard
│       └── loans/
│           └── [id]/
│               └── page.tsx     # Loan detail view (3-column)
├── components/
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       └── ...
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── mock-data.ts             # Processor-focused mock data
├── tailwind.config.ts           # Processor-specific config
├── next.config.js               # GitHub Pages export config
├── PROJECT_BRIEF.md             # Detailed project documentation
└── README.md                    # This file
```

---

## 🎭 Mock Data Structure

Located in `lib/mock-data.ts`:

```typescript
interface ProcessorLoan {
  id: string;
  borrowerName: string;
  loanAmount: string;
  propertyAddress: string;
  riskLevel: 'critical' | 'high' | 'normal' | 'low';
  riskReasons: string[];
  daysToClosing: number;
  stage: 'document_collection' | 'underwriting' | 'approval' | 'pre_closing' | 'funded';
  documentsRequired: number;
  documentsUploaded: number;
  documentsApproved: number;
  completionPercentage: number;
  tasksOverdue: number;
  tasksPending: number;
  nextAction: string;
  tasks: Task[];
  documents: Document[];
  // ... more fields
}
```

**Sample Loans:**
- Wilson Property: CRITICAL (2 days, missing docs)
- Martinez Apartments: HIGH (3 days, report rejected)
- Chen Portfolio: NORMAL (closing today, all approved)
- Garcia Properties: NORMAL (17 days, in progress)

---

## 🔄 User Flows (Mockup)

### Flow 1: Processor Morning Routine
1. `/login` → Enter credentials → `/dashboard`
2. See **"⚠️ AT RISK LOANS (3)"** section at top (red background)
3. Click **Wilson Property** card
4. `/dashboard/loans/LOAN-001` opens (3-column view)
5. See **"Call borrower ASAP"** task (URGENT badge)
6. Click **[📞 Call]** button
7. Alert: "Calling James Wilson... (Coming in Phase 2)"
8. Click **[Complete Task]** checkbox
9. Alert: "Task completed! (Coming in Phase 2)"

### Flow 2: Quick Pipeline Scan
1. Dashboard shows 3 sections:
   - At-Risk (red) - Expanded by default
   - Closing Today (orange) - Expanded by default
   - All Other (gray) - Collapsed by default
2. Each loan card shows:
   - Borrower + amount
   - Days to closing badge (color-coded)
   - Risk reasons (if at risk)
   - Next action
   - Document progress bar
   - Quick actions (Call, Email, View)
3. Click **[View]** → Go to loan detail

### Flow 3: Loan Detail Investigation
1. Open loan detail view
2. **Left column:** See borrower contact info
3. Click **[📞 Call Now]** → Alert shows click-to-call preview
4. **Center column:** See 5 pending tasks with priority badges
5. **Right column:** See documents with status badges
   - ✓ Approved (green)
   - ⚠️ Missing (red)
   - 📄 Uploaded (blue)
6. Click **[Request from Borrower]** → Alert shows email preview
7. Switch to **Tasks** tab → See all tasks view placeholder

---

## 🎨 Design Differentiation

### vs Customer Portal (External Users)

| Aspect | Customer Portal | Processor Dashboard |
|--------|----------------|---------------------|
| **User Type** | Borrowers (occasional) | Processors (daily) |
| **Philosophy** | Calm, beautiful | Efficient, data-dense |
| **Spacing** | 8px grid | 6px grid |
| **Font Size** | 16px base | 14px base |
| **Layout** | Cards, white space | Tables, compact rows |
| **Colors** | Subtle status | Bold status (red/green) |
| **Aesthetic** | Anthropic-inspired | Salesforce-inspired |

**Shared:**
- ✅ Same accent color (#CC7A3E terracotta)
- ✅ Same tech stack (Next.js + Tailwind)
- ✅ Same component library (shadcn/ui)
- ✅ Same quality standards

---

## 🚧 Coming in Phase 2 (Backend)

Features shown with alert() placeholders:

- [ ] Real authentication (JWT)
- [ ] Database integration (PostgreSQL)
- [ ] REST API (Node.js + Express)
- [ ] Click-to-call (Twilio integration)
- [ ] Email functionality
- [ ] Task management (create, complete, assign)
- [ ] Document upload and review
- [ ] Real-time updates
- [ ] Notifications panel
- [ ] Search and filters
- [ ] Kanban board with drag-and-drop
- [ ] Manager analytics dashboard
- [ ] Call logging
- [ ] Activity timeline

---

## 📦 Tech Stack

**Framework:** Next.js 14 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS 3.4+ (custom config)
**Components:** shadcn/ui (Radix UI primitives)
**Icons:** lucide-react
**Deployment:** Vercel or GitHub Pages (static export)

**Dependencies:**
```json
{
  "next": "14.2.3",
  "react": "^18.2.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "@radix-ui/react-*": "Latest",
  "lucide-react": "^0.344.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.1"
}
```

---

## 🎯 Success Criteria

**Visual Design:**
- ✅ Data-dense but not overwhelming
- ✅ Clear visual hierarchy (urgent items stand out with red)
- ✅ Professional, trustworthy aesthetic
- ✅ Status colors immediately visible

**User Experience:**
- ✅ Processor can scan dashboard in <10 seconds
- ✅ Next action always visible without clicking
- ✅ Common tasks mockup in 1-2 clicks
- ✅ No confusion about information location

**Stakeholder Approval Checklist:**
- [ ] Operations Manager approves workflow
- [ ] 2-3 loan processors provide feedback
- [ ] Design team approves visual consistency
- [ ] Ready to proceed to Phase 2 (backend)

---

## 🚀 Deployment

### Local Development
```bash
npm run dev
# → http://localhost:3000
```

### GitHub Pages
```bash
# 1. Build static export
npm run build:github-pages

# 2. Output generated in /out directory

# 3. Deploy to GitHub Pages
# - Create gh-pages branch
# - Copy /out contents to gh-pages branch
# - Push to GitHub
# - Enable Pages in repo settings

# 4. Access at:
# https://yourusername.github.io/processor_dashboard
```

### Vercel (Alternative)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# → Auto-deploys on push
# → https://processor-dashboard.vercel.app
```

---

## 📝 Notes for Stakeholders

**This is a UI/UX mockup for approval.** All buttons show alerts explaining future functionality.

**To Test:**
1. Go to `/login` (any email/password works)
2. Explore the dashboard with at-risk loans
3. Click a loan card to see detail view
4. Click buttons to see mockup alerts
5. Try different sections and tabs

**Provide Feedback On:**
- Is the data density appropriate?
- Are urgent items clear enough?
- Is the 3-column detail view intuitive?
- Any missing information?
- Color scheme and readability?
- Mobile responsiveness (if needed)?

---

## 🙏 Credits

**Methodology:** MARCUS2 V2.0 (marcus2-v2-beta)
**Design System:** Data-dense professional (Salesforce-inspired)
**Component Library:** shadcn/ui
**Built by:** Claude Code + Anthropic
**Date:** November 3, 2025

---

**Ready for stakeholder review and feedback!** 🎯

