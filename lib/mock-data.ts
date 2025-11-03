/**
 * MOCK DATA FOR LOAN PROCESSOR DASHBOARD
 * Phase 1: UI/UX mockup with realistic sample data
 * Focus: Internal tool for loan processors (data-dense, status-driven)
 */

export type RiskLevel = 'critical' | 'high' | 'normal' | 'low';
export type LoanStage = 'document_collection' | 'underwriting' | 'approval' | 'pre_closing' | 'funded';
export type TaskPriority = 'urgent' | 'high' | 'normal' | 'low';
export type TaskStatus = 'pending' | 'in_progress' | 'completed';
export type DocumentStatus = 'pending' | 'uploaded' | 'under_review' | 'approved' | 'rejected' | 'resubmit_requested';

export interface Task {
  id: string;
  loanId: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  assignedTo: string;
  createdBy: string;
  createdAt: string;
}

export interface Document {
  id: string;
  name: string;
  category: string;
  status: DocumentStatus;
  uploadedDate?: string;
  reviewedDate?: string;
  fileSize?: string;
  reviewNotes?: string;
  required: boolean;
}

export interface CallLog {
  id: string;
  loanId: string;
  contactName: string;
  phoneNumber: string;
  duration: string;
  outcome: 'reached' | 'voicemail' | 'no_answer' | 'busy';
  notes: string;
  timestamp: string;
  processor: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'document_uploaded' | 'document_approved' | 'document_rejected' | 'status_change' | 'task_completed' | 'call_made' | 'note_added';
  user: string;
  description: string;
}

export interface ProcessorLoan {
  id: string;
  applicationId: string;
  borrowerName: string;
  borrowerPhone: string;
  borrowerEmail: string;
  borrowerCompany: string;
  propertyAddress: string;
  propertyType: string;
  propertyUnits?: number;
  loanAmount: string;
  loanType: 'Purchase' | 'Refinance' | 'Bridge Loan' | 'Construction';
  loanTerm: string;
  interestRate: string;
  stage: LoanStage;
  riskLevel: RiskLevel;
  riskReasons: string[];
  appliedDate: string;
  closingDate: string;
  daysToClosing: number;
  lastActivity: string;
  lastActivityHoursAgo: number;
  processorAssigned: string;
  loanOfficer: string;
  documentsRequired: number;
  documentsUploaded: number;
  documentsApproved: number;
  completionPercentage: number;
  tasksTotal: number;
  tasksOverdue: number;
  tasksPending: number;
  nextAction: string;
  documents: Document[];
  tasks: Task[];
  callLogs: CallLog[];
  activity: ActivityLog[];
  notes: string;
}

export interface Processor {
  id: string;
  name: string;
  email: string;
  phone: string;
  activeLoans: number;
  onTimeRate: number;
  avgDaysToClose: number;
}

// Mock Processors
export const MOCK_PROCESSORS: Processor[] = [
  { id: 'PROC-001', name: 'Sarah Chen', email: 'sarah.chen@fyniq.com', phone: '(555) 100-0001', activeLoans: 18, onTimeRate: 95, avgDaysToClose: 14 },
  { id: 'PROC-002', name: 'Michael Torres', email: 'michael.torres@fyniq.com', phone: '(555) 100-0002', activeLoans: 15, onTimeRate: 88, avgDaysToClose: 16 },
  { id: 'PROC-003', name: 'Jennifer Liu', email: 'jennifer.liu@fyniq.com', phone: '(555) 100-0003', activeLoans: 12, onTimeRate: 92, avgDaysToClose: 13 },
  { id: 'PROC-004', name: 'David Kim', email: 'david.kim@fyniq.com', phone: '(555) 100-0004', activeLoans: 20, onTimeRate: 85, avgDaysToClose: 18 },
];

export const CURRENT_PROCESSOR = MOCK_PROCESSORS[0]; // Sarah Chen

// Mock Loans - Processor-focused data
export const MOCK_LOANS: ProcessorLoan[] = [
  // CRITICAL RISK LOANS (At-Risk Section)
  {
    id: 'LOAN-001',
    applicationId: 'APP-2024-0158',
    borrowerName: 'James Wilson',
    borrowerPhone: '(555) 123-4567',
    borrowerEmail: 'jwilson@wilsonre.com',
    borrowerCompany: 'Wilson Real Estate Holdings',
    propertyAddress: '123 Main Street, Montgomery, AL 36104',
    propertyType: 'Multifamily',
    propertyUnits: 48,
    loanAmount: '$2,500,000',
    loanType: 'Bridge Loan',
    loanTerm: '24 months',
    interestRate: 'SOFR + 5.50%',
    stage: 'document_collection',
    riskLevel: 'critical',
    riskReasons: [
      'Closing in 2 days',
      '3 critical documents missing',
      'No borrower activity in 6 hours'
    ],
    appliedDate: '2025-01-15',
    closingDate: '2025-11-05', // 2 days from now
    daysToClosing: 2,
    lastActivity: '2025-11-03T04:00:00Z',
    lastActivityHoursAgo: 6,
    processorAssigned: 'Sarah Chen',
    loanOfficer: 'Marcus Fieldman',
    documentsRequired: 10,
    documentsUploaded: 7,
    documentsApproved: 5,
    completionPercentage: 70,
    tasksTotal: 5,
    tasksOverdue: 2,
    tasksPending: 5,
    nextAction: 'Call borrower ASAP - Request appraisal report',
    documents: [
      { id: 'DOC-001', name: 'Term Sheet', category: 'Legal', status: 'approved', uploadedDate: '2025-01-16', reviewedDate: '2025-01-17', fileSize: '2.3 MB', required: true },
      { id: 'DOC-002', name: 'Rent Roll', category: 'Financial', status: 'approved', uploadedDate: '2025-01-18', reviewedDate: '2025-01-19', fileSize: '856 KB', required: true },
      { id: 'DOC-003', name: 'Property Appraisal', category: 'Property', status: 'pending', reviewNotes: 'Requested from borrower', required: true },
      { id: 'DOC-004', name: 'Operating Statements', category: 'Financial', status: 'pending', required: true },
      { id: 'DOC-005', name: 'Environmental Report', category: 'Property', status: 'pending', required: true },
    ],
    tasks: [
      { id: 'TASK-001', loanId: 'LOAN-001', title: 'Call borrower to request Property Appraisal Report', description: 'Critical for underwriting', priority: 'urgent', status: 'pending', dueDate: '2025-11-03T17:00:00Z', assignedTo: 'Sarah Chen', createdBy: 'System', createdAt: '2025-11-03T08:00:00Z' },
      { id: 'TASK-002', loanId: 'LOAN-001', title: 'Follow up with environmental consultant', description: 'Report was supposed to be ready yesterday', priority: 'urgent', status: 'pending', dueDate: '2025-11-03T15:00:00Z', assignedTo: 'Sarah Chen', createdBy: 'Sarah Chen', createdAt: '2025-11-02T10:00:00Z' },
    ],
    callLogs: [],
    activity: [
      { id: 'ACT-001', timestamp: '2025-11-03T04:00:00Z', type: 'document_uploaded', user: 'James Wilson', description: 'Uploaded Bank Statements' },
    ],
    notes: 'Borrower is motivated but slow to respond. May need to escalate if docs not received by EOD today.'
  },
  {
    id: 'LOAN-002',
    applicationId: 'APP-2024-0172',
    borrowerName: 'Maria Martinez',
    borrowerPhone: '(555) 234-5678',
    borrowerEmail: 'maria@martinezapts.com',
    borrowerCompany: 'Martinez Apartments LLC',
    propertyAddress: '5678 Oak Avenue, Austin, TX 78701',
    propertyType: 'Multifamily',
    propertyUnits: 120,
    loanAmount: '$4,200,000',
    loanType: 'Purchase',
    loanTerm: '30 years',
    interestRate: '6.25% fixed',
    stage: 'underwriting',
    riskLevel: 'high',
    riskReasons: [
      'Environmental report rejected - revision needed',
      'Closing in 3 days'
    ],
    appliedDate: '2025-01-20',
    closingDate: '2025-11-06', // 3 days
    daysToClosing: 3,
    lastActivity: '2025-11-02T14:00:00Z',
    lastActivityHoursAgo: 18,
    processorAssigned: 'Sarah Chen',
    loanOfficer: 'Lisa Stonegate',
    documentsRequired: 12,
    documentsUploaded: 9,
    documentsApproved: 7,
    completionPercentage: 75,
    tasksTotal: 3,
    tasksOverdue: 0,
    tasksPending: 3,
    nextAction: 'Follow up with environmental consultant',
    documents: [
      { id: 'DOC-101', name: 'Purchase Agreement', category: 'Legal', status: 'approved', uploadedDate: '2025-01-21', reviewedDate: '2025-01-22', fileSize: '3.1 MB', required: true },
      { id: 'DOC-102', name: 'Environmental Report', category: 'Property', status: 'rejected', uploadedDate: '2025-01-25', reviewedDate: '2025-11-02', reviewNotes: 'Missing Phase II assessment. Please revise.', required: true },
    ],
    tasks: [
      { id: 'TASK-101', loanId: 'LOAN-002', title: 'Follow up with environmental consultant', description: 'Phase II assessment needed', priority: 'high', status: 'pending', dueDate: '2025-11-04T12:00:00Z', assignedTo: 'Sarah Chen', createdBy: 'Sarah Chen', createdAt: '2025-11-02T15:00:00Z' },
    ],
    callLogs: [],
    activity: [],
    notes: ''
  },
  {
    id: 'LOAN-003',
    applicationId: 'APP-2024-0165',
    borrowerName: 'Robert Thompson',
    borrowerPhone: '(555) 345-6789',
    borrowerEmail: 'rthompson@thompsonplaza.com',
    borrowerCompany: 'Thompson Plaza Partners',
    propertyAddress: '789 Commerce Blvd, Denver, CO 80202',
    propertyType: 'Retail',
    loanAmount: '$3,100,000',
    loanType: 'Refinance',
    loanTerm: '20 years',
    interestRate: '5.875% fixed',
    stage: 'underwriting',
    riskLevel: 'high',
    riskReasons: [
      'No borrower activity in 3 days',
      'Closing in 3 days'
    ],
    appliedDate: '2025-01-18',
    closingDate: '2025-11-06',
    daysToClosing: 3,
    lastActivity: '2025-10-31T10:00:00Z',
    lastActivityHoursAgo: 72,
    processorAssigned: 'David Kim',
    loanOfficer: 'Marcus Fieldman',
    documentsRequired: 10,
    documentsUploaded: 10,
    documentsApproved: 10,
    completionPercentage: 100,
    tasksTotal: 2,
    tasksOverdue: 1,
    tasksPending: 2,
    nextAction: 'Attempt to contact borrower',
    documents: [],
    tasks: [],
    callLogs: [],
    activity: [],
    notes: 'Borrower not responding to calls or emails. May need loan officer escalation.'
  },

  // CLOSING TODAY
  {
    id: 'LOAN-004',
    applicationId: 'APP-2024-0180',
    borrowerName: 'Lisa Chen',
    borrowerPhone: '(555) 456-7890',
    borrowerEmail: 'lchen@chenportfolio.com',
    borrowerCompany: 'Chen Property Group',
    propertyAddress: '234 Park Avenue, Seattle, WA 98101',
    propertyType: 'Office',
    loanAmount: '$1,800,000',
    loanType: 'Purchase',
    loanTerm: '25 years',
    interestRate: '6.00% fixed',
    stage: 'pre_closing',
    riskLevel: 'normal',
    riskReasons: [],
    appliedDate: '2025-09-15',
    closingDate: '2025-11-03',
    daysToClosing: 0,
    lastActivity: '2025-11-03T08:30:00Z',
    lastActivityHoursAgo: 2,
    processorAssigned: 'Sarah Chen',
    loanOfficer: 'Amy Creditworth',
    documentsRequired: 12,
    documentsUploaded: 12,
    documentsApproved: 12,
    completionPercentage: 100,
    tasksTotal: 1,
    tasksOverdue: 0,
    tasksPending: 1,
    nextAction: 'Confirm closing time with title company',
    documents: [],
    tasks: [
      { id: 'TASK-201', loanId: 'LOAN-004', title: 'Confirm closing time with title company', description: 'Closing at 3:00 PM', priority: 'normal', status: 'pending', dueDate: '2025-11-03T15:00:00Z', assignedTo: 'Sarah Chen', createdBy: 'System', createdAt: '2025-11-03T08:00:00Z' },
    ],
    callLogs: [],
    activity: [],
    notes: 'Ready to close. All docs approved.'
  },

  // REGULAR PIPELINE LOANS
  {
    id: 'LOAN-005',
    applicationId: 'APP-2024-0195',
    borrowerName: 'David Garcia',
    borrowerPhone: '(555) 567-8901',
    borrowerEmail: 'dgarcia@garciaprops.com',
    borrowerCompany: 'Garcia Properties Inc',
    propertyAddress: '456 Industrial Way, Phoenix, AZ 85001',
    propertyType: 'Industrial',
    loanAmount: '$5,600,000',
    loanType: 'Purchase',
    loanTerm: '25 years',
    interestRate: '6.50% fixed',
    stage: 'document_collection',
    riskLevel: 'normal',
    riskReasons: [],
    appliedDate: '2025-10-20',
    closingDate: '2025-11-20',
    daysToClosing: 17,
    lastActivity: '2025-11-02T16:00:00Z',
    lastActivityHoursAgo: 16,
    processorAssigned: 'Jennifer Liu',
    loanOfficer: 'Lisa Stonegate',
    documentsRequired: 12,
    documentsUploaded: 6,
    documentsApproved: 4,
    completionPercentage: 50,
    tasksTotal: 8,
    tasksOverdue: 0,
    tasksPending: 8,
    nextAction: 'Request remaining financial documents',
    documents: [],
    tasks: [],
    callLogs: [],
    activity: [],
    notes: ''
  },
];

// Helper Functions
export function getLoansByRiskLevel(riskLevel: RiskLevel): ProcessorLoan[] {
  return MOCK_LOANS.filter(loan => loan.riskLevel === riskLevel);
}

export function getLoansByStage(stage: LoanStage): ProcessorLoan[] {
  return MOCK_LOANS.filter(loan => loan.stage === stage);
}

export function getLoansClosingToday(): ProcessorLoan[] {
  return MOCK_LOANS.filter(loan => loan.daysToClosing === 0);
}

export function getLoansClosingThisWeek(): ProcessorLoan[] {
  return MOCK_LOANS.filter(loan => loan.daysToClosing > 0 && loan.daysToClosing <= 7);
}

export function getAtRiskLoans(): ProcessorLoan[] {
  return MOCK_LOANS.filter(loan => loan.riskLevel === 'critical' || loan.riskLevel === 'high');
}

export function getLoanById(id: string): ProcessorLoan | undefined {
  return MOCK_LOANS.find(loan => loan.id === id);
}

export function getRiskLevelColor(riskLevel: RiskLevel): string {
  const colorMap: Record<RiskLevel, string> = {
    'critical': 'status-critical',
    'high': 'status-warning',
    'normal': 'status-neutral',
    'low': 'status-success',
  };
  return colorMap[riskLevel];
}

export function getStageColor(stage: LoanStage): string {
  const colorMap: Record<LoanStage, string> = {
    'document_collection': '#8B5CF6',
    'underwriting': '#3B82F6',
    'approval': '#F59E0B',
    'pre_closing': '#10B981',
    'funded': '#6B7280',
  };
  return colorMap[stage];
}

export function formatStage(stage: LoanStage): string {
  const stageMap: Record<LoanStage, string> = {
    'document_collection': 'Document Collection',
    'underwriting': 'Underwriting',
    'approval': 'Approval',
    'pre_closing': 'Pre-Closing',
    'funded': 'Funded',
  };
  return stageMap[stage];
}

export function getTaskPriorityColor(priority: TaskPriority): string {
  const colorMap: Record<TaskPriority, string> = {
    'urgent': 'status-critical',
    'high': 'status-warning',
    'normal': 'status-neutral',
    'low': 'status-success',
  };
  return colorMap[priority];
}

export function getDocumentStatusColor(status: DocumentStatus): string {
  const colorMap: Record<DocumentStatus, string> = {
    'pending': 'status-neutral',
    'uploaded': 'status-info',
    'under_review': 'status-info',
    'approved': 'status-success',
    'rejected': 'status-critical',
    'resubmit_requested': 'status-warning',
  };
  return colorMap[status];
}
