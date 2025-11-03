# PROJECT BRIEF - Loan Processor Pipeline Dashboard

**Version:** 1.0
**Date:** November 3, 2025
**Purpose:** Visual UI/UX mockup dashboard for internal loan processors to manage their pipeline

---

## PROJECT OVERVIEW

### Project Name
**Loan Processor Pipeline Dashboard** (Internal Operations Tool)

### Project Description

The Processor Dashboard is a **data-dense, professional internal tool** for loan processors to efficiently manage their loan pipeline. This is a **UI/UX mockup only** (no backend functionality) designed to visualize the workflow and get stakeholder approval before full development.

**Problem it solves:** Loan processors currently juggle spreadsheets, email, and multiple systems to track 20+ active loans. They lose track of urgent items, miss critical deadlines, and waste time searching for information.

**Solution:** A centralized, color-coded dashboard that shows:
- At-risk loans prominently (red badges, countdown timers)
- All tasks and next actions in one view
- Document status at a glance
- Quick action buttons (call, email, view) without navigation

**Design Philosophy:**
- ⚡ **Efficiency Over Beauty** - Function first, form second
- 📊 **Information Density** - More data visible = less clicking
- 🎯 **Instant Clarity** - See priorities and next actions immediately
- ⌨️ **Keyboard-Friendly** - Power users need shortcuts

### Target Users

**Primary Users:** Loan processors and underwriters (internal staff)
- Process 15-25 active loans simultaneously
- Work 8 hours/day in this tool (power users)
- Age range: 25-55, professional office workers
- Desktop-primary (dual monitors common)
- User motivation: Process loans faster, hit deadlines, reduce stress
- Pain points: Information overload, missed urgent items, too much clicking

**Secondary Users:** Loan processing managers
- Oversee 3-6 processors (60-150 loans total)
- Need team performance analytics
- Identify bottlenecks and at-risk loans across team

---

## TECH STACK

### Selected Stack: Next.js Full-Stack (UI Mockup Only)

**Frontend:**
- Framework: Next.js 14 (App Router), React 18, TypeScript
- Styling: Tailwind CSS 3.4+ (data-dense custom config)
- Components: shadcn/ui (Radix UI primitives)
- Icons: lucide-react
- State: React useState (no complex state for mockup)
- Deployment: Vercel or GitHub Pages

**Design System:**
- **6px spacing grid** (tighter than customer portal's 8px)
- **14px base font** (smaller than customer portal's 16px)
- **Status colors prominent**: Red/Yellow/Green badges everywhere
- Inspired by: Salesforce CRM, Linear, Monday.com, Airtable

**Phase 1 (Current): UI/UX Mockup**
- Static pages with mock data
- Clickable buttons with alert() placeholders
- No authentication (skip to dashboard)
- No API calls
- Purpose: Get stakeholder approval on design

**Phase 2 (Future): Backend Integration**
- Node.js + Express API
- PostgreSQL database
- JWT authentication
- Twilio integration for click-to-call
- Real-time updates (WebSockets or polling)

---

## CORE FEATURES (Mockup)

### 1. Login Screen
- **Simple, professional** (no marketing copy)
- Email + password fields
- "Remember me" checkbox
- Security notice at bottom
- Click "Sign In" → Skip to dashboard

### 2. Main Dashboard - Pipeline View
**Layout:**
- Top nav: Logo, Dashboard, Calendar, Analytics (managers only), Search, Notifications, Profile
- Left sidebar (260px): Filters (views, status, risk level, closing date)
- Main content: Loan cards in prioritized sections

**Sections:**
1. **At-Risk Loans** (red section, always top)
   - Shows loans with: <3 days to closing, missing docs, no activity >24hrs
   - Countdown badges (pulsing red for <2 days)
   - Clear risk reason displayed

2. **Closing Today/This Week** (orange section)
   - Sorted by closing time
   - Green checkmarks for ready-to-close

3. **All Other Loans** (white section, collapsible)
   - Sorted by closing date (soonest first)
   - Can paginate if >10 loans

**Loan Card (Compact):**
```
[🔴 URGENT] Wilson Property - $2.5M  [2 DAYS] ⚠️ At Risk
Risk: Closing in 2 days, 3 critical documents missing
Next Action: Call borrower ASAP - Request appraisal report
Documents: 7 of 10 uploaded ███████░░░ 70%
Last Activity: 6 hours ago
[📞 Call] [✉️ Email] [👁 View Details]
```

### 3. Loan Detail View (CRM-Style)
**3-column layout (30% / 40% / 30%):**

**Left Column - Loan Information:**
- Borrower details (name, phone, email) with quick-call buttons
- Property details (address, type, units)
- Loan details (amount, type, term, rate)
- Key dates (applied, closing, days remaining)
- Assigned processor and loan officer
- Risk assessment (score + reasons)

**Center Column - Pending Tasks (PRIMARY FOCUS):**
- Task list with checkboxes
- Priority badges (URGENT/HIGH in red/orange)
- Due date/time
- Task descriptions
- [Complete Task] buttons
- [+ Add Task] button at bottom

**Right Column - Documents:**
- Document list with status badges
  - ✓ Approved (green)
  - ⚠️ Missing (red)
  - 📄 Uploaded (blue)
  - ❌ Rejected (red with notes)
- Progress bar: "7 of 10 uploaded (70%)"
- [Request from Borrower] buttons for missing docs
- [Upload New Document] button

**Tabs at top:** Overview | Tasks | Documents | Activity | Calls | Notes

### 4. Kanban Board View
**5 columns (swimlanes):**
- Document Collection (8 loans)
- Underwriting (5 loans)
- Approval (3 loans)
- Pre-Closing (2 loans)
- Funded (1 loan - grayed out)

**Compact loan cards:**
```
┌──────────────┐
│🔴 Wilson     │
│ $2.5M        │
│ [2 DAYS]     │
│ 70% complete │
└──────────────┘
```

Visual drag-drop indicator (no actual drag functionality in mockup)

### 5. Manager Analytics Dashboard
**KPI Cards (top row):**
- Active Loans: 45 (+3 from last week)
- At Risk: 3 🔴 critical
- Closing This Week: 8 ($18.5M total)
- On-Time Rate: 92% ↑ 5%

**Charts:**
- Loan funnel (bar chart)
- Processor performance table (name, # loans, on-time %, avg days)
- Closings by week (line chart, 3 months)
- At-risk loans table with [Reassign] [View] buttons

### 6. Modals
**Task Creation Modal:**
- Task type dropdown (Call, Email, Review Doc, etc.)
- Title (required)
- Description (optional)
- Due date + time (date/time pickers)
- Priority (radio buttons: Urgent/High/Normal/Low)
- Assign to (dropdown)
- [Cancel] [Create Task] buttons

**Call Logging Modal:**
- Auto-populated: Contact name, phone, duration, time
- Call outcome (radio: Reached, Voicemail, No Answer, etc.)
- Call notes (textarea, required)
- Optional: Create follow-up task (checkbox expands form)
- [Cancel] [Save Call Log] buttons

**Click-to-Call Interface:**
- Mini modal when clicking phone number
- Choose: Call from browser (WebRTC) or Dial my phone
- In-call interface: Timer, Mute, Hold, End Call buttons
- Quick notes field (type while talking)
- Auto-opens call log modal when call ends

### 7. Notifications Panel
**Slide-in from right (380px wide):**
- Tabs: All (8) | Unread (3) | Loans | Tasks
- Notification items:
  - Icon (colored by type)
  - Title + message
  - Timestamp
  - Unread indicator (blue dot)
  - [View] button → Navigate to relevant page
- [Mark All as Read] button

### 8. Empty States
- No Loans Assigned: Friendly icon, "Check back soon" message
- All Caught Up: Checkmark icon, "No pending tasks right now"
- No At-Risk Loans: 🎉 "Great Job! Keep up the excellent work"

---

## DESIGN SPECIFICATIONS

### Color System
```css
/* Backgrounds - Slightly darker than customer portal */
--bg-primary: #F5F5F3;        /* Main background */
--bg-secondary: #EBEBEA;      /* Sidebar, table headers */
--surface: #FFFFFF;           /* Cards, modals */

/* Text - High contrast for readability */
--text-primary: #191919;      /* Body text */
--text-secondary: #5A5A57;    /* Secondary info */
--text-tertiary: #8B8B88;     /* Helper text */

/* Accent - Same brand color as customer portal */
--accent-primary: #CC7A3E;    /* Terracotta */
--accent-hover: #B56A33;
--accent-light: #F7E8DC;

/* Status Colors - CRITICAL for dashboard */
--status-critical: #DC2626;   /* Red - Urgent, Overdue */
--status-warning: #F59E0B;    /* Amber - Closing Soon */
--status-success: #10B981;    /* Green - On Track */
--status-info: #3B82F6;       /* Blue - In Progress */
--status-neutral: #6B7280;    /* Gray - Pending */
```

### Typography
```css
/* Smaller fonts for data density */
--font-size-base: 14px;       /* Default (vs 16px customer portal) */
--font-size-sm: 13px;
--font-size-xs: 12px;
--font-size-xxs: 11px;        /* Labels, timestamps */

/* Headings */
--font-size-h1: 24px;
--font-size-h2: 20px;
--font-size-h3: 18px;
```

### Spacing
```css
/* 6px grid (vs 8px customer portal) */
--space-1: 4px;   /* Tight spacing */
--space-2: 6px;   /* Base unit */
--space-3: 12px;
--space-4: 18px;  /* Standard spacing */
--space-6: 24px;  /* Section spacing */
```

### Components
**Compact Button:** 8px 16px padding (vs 10px 20px)
**Status Badge:** 3px 8px padding, 11px font, pill shape
**Table Row:** 48px height (compact)
**Card Padding:** 16px (vs 24px customer portal)
**Sidebar Width:** 260px

---

## USER FLOWS (Mockup)

### Flow 1: Processor Morning Routine
1. Login → Dashboard
2. See "At-Risk Loans (3)" section at top (red background)
3. Click into Wilson Property (2 days to closing)
4. See task: "Call borrower ASAP"
5. Click [📞 Call] → Call modal opens
6. (Mockup: Alert says "Calling James Wilson...")
7. Click complete task checkbox
8. Return to dashboard → Wilson moves down priority

### Flow 2: Manager Checking Team Performance
1. Login → Click "Analytics" in top nav
2. See KPI cards: 45 active loans, 3 at risk
3. Scroll to processor performance table
4. See "Sarah Chen: 18 loans, 95% on-time"
5. Scroll to at-risk table
6. Click [Reassign] on Wilson Property
7. (Mockup: Alert "Reassign functionality coming in Phase 2")

### Flow 3: Quick Task Management
1. Dashboard → Click Wilson Property card
2. Loan detail opens (3-column view)
3. Center column shows 5 pending tasks
4. Check off "Review uploaded rent roll"
5. Click [+ Add Task]
6. Task modal opens
7. Fill: "Follow up with title company", Due: Tomorrow 3pm, Priority: High
8. Click [Create Task]
9. (Mockup: Alert "Task created!")

---

## SUCCESS CRITERIA (Mockup Approval)

### Visual Design
- ✅ Data-dense but not overwhelming
- ✅ Clear visual hierarchy (urgent items stand out)
- ✅ Professional, trustworthy aesthetic
- ✅ Status colors immediately visible

### User Experience
- ✅ Processor can scan dashboard in <10 seconds and identify priorities
- ✅ Next action always visible without clicking
- ✅ Common tasks (call, mark complete) mockup in 1-2 clicks
- ✅ No confusion about where to find information

### Stakeholder Approval
- [ ] Operations Manager approves workflow
- [ ] 2-3 loan processors provide feedback
- [ ] Design team approves visual consistency
- [ ] Ready to proceed to Phase 2 (backend dev)

---

## DEVELOPMENT PHASES

**Phase 1 (Current): UI/UX Mockup - 1 Week**
- ✅ Setup Next.js + Tailwind + shadcn/ui
- ✅ Create mock data (loans, tasks, documents)
- ✅ Build all static pages with clickable alerts
- ✅ Deploy to Vercel for stakeholder review

**Phase 2: Backend Integration - 4 Weeks**
- Authentication (JWT)
- Database schema (PostgreSQL)
- REST API (Node.js + Express)
- Real CRUD operations
- Twilio integration (click-to-call)

**Phase 3: Advanced Features - 2 Weeks**
- Real-time updates
- Advanced filters and search
- Email notifications
- Document preview
- Bulk actions

---

## MARCUS2 V2.0 METHODOLOGY

**Stage:** MVP (UI/UX Mockup for Approval)

**Followed Patterns:**
- ✅ Data-dense design (6px grid, 14px font)
- ✅ Status-color driven UI
- ✅ Next.js 14 + TypeScript
- ✅ Tailwind CSS with custom tokens
- ✅ shadcn/ui component library
- ✅ Professional internal tool aesthetic (Salesforce-inspired)

**Differentiation from Customer Portal:**
- Customer Portal: Beautiful, calm, Anthropic-inspired (8px grid, 16px font)
- Processor Dashboard: Efficient, data-dense, power-user tool (6px grid, 14px font)
- **Both share:** Brand color, tech stack, component library, quality standards

---

**Ready for stakeholder review and feedback!** 🎯
