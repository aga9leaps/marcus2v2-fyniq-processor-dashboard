'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  getLoanById,
  formatStage,
  getTaskPriorityColor,
  getDocumentStatusColor,
  type ProcessorLoan,
} from '@/lib/mock-data';
import {
  ArrowLeft,
  Phone,
  Mail,
  Building,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Upload,
  FileText,
  Plus,
  CheckSquare,
  Square,
} from 'lucide-react';

export default function LoanDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const loan = getLoanById(id);

  if (!loan) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-status-critical mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-primary mb-2">Loan Not Found</h2>
        <p className="text-text-secondary mb-4">The loan you're looking for doesn't exist.</p>
        <Button onClick={() => router.push('/dashboard')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const getDaysColor = (days: number) => {
    if (days <= 1) return 'text-status-critical';
    if (days <= 3) return 'text-status-warning';
    return 'text-text-secondary';
  };

  const getDaysBgColor = (days: number) => {
    if (days <= 1) return 'bg-status-critical-light border-status-critical';
    if (days <= 3) return 'bg-status-warning-light border-status-warning';
    return 'bg-status-neutral-light border-status-neutral';
  };

  return (
    <div>
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-4 text-text-secondary hover:text-text-primary"
        onClick={() => router.push('/dashboard')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Pipeline
      </Button>

      {/* Loan Header */}
      <Card className="p-6 mb-6 border-border-subtle">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {loan.riskLevel === 'critical' && (
              <AlertCircle className="w-6 h-6 text-status-critical mt-1" />
            )}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {loan.riskLevel === 'critical' && (
                  <Badge className="bg-status-critical text-white font-bold">URGENT</Badge>
                )}
                {loan.riskLevel === 'high' && (
                  <Badge className="bg-status-warning text-white font-bold">HIGH</Badge>
                )}
                <Badge variant="outline" className="text-text-secondary">
                  {formatStage(loan.stage)}
                </Badge>
                {loan.riskReasons.length > 0 && (
                  <Badge className="bg-status-critical-light text-status-critical border-status-critical">
                    At Risk
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold text-text-primary mb-1">
                {loan.borrowerName} - {loan.propertyType}
              </h1>
              <p className="text-text-secondary">Application #{loan.applicationId}</p>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-lg border font-bold ${getDaysBgColor(loan.daysToClosing)}`}>
            <span className={`text-lg ${getDaysColor(loan.daysToClosing)}`}>
              {loan.daysToClosing === 0 ? 'CLOSING TODAY' : `${loan.daysToClosing} DAYS`}
            </span>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="bg-surface border border-border-subtle">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks ({loan.tasksPending})</TabsTrigger>
          <TabsTrigger value="documents">Documents ({loan.documentsUploaded}/{loan.documentsRequired})</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="calls">Calls</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT COLUMN - Loan Information (30%) */}
            <div className="lg:col-span-4 space-y-4">
              {/* Borrower Details */}
              <Card className="p-4 border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
                  Borrower Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Name</p>
                    <p className="text-text-primary font-medium">{loan.borrowerName}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Phone</p>
                    <div className="flex items-center gap-2">
                      <p className="text-text-primary">{loan.borrowerPhone}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-xs"
                        onClick={() => alert(`📞 Calling ${loan.borrowerName}...\n\nClick-to-call coming in Phase 2`)}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-text-primary text-xs">{loan.borrowerEmail}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-xs"
                        onClick={() => alert(`✉️ Sending email to ${loan.borrowerName}...\n\nEmail functionality coming in Phase 2`)}
                      >
                        <Mail className="w-3 h-3 mr-1" />
                        Send
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Company</p>
                    <p className="text-text-primary">{loan.borrowerCompany}</p>
                  </div>
                </div>
              </Card>

              {/* Property Details */}
              <Card className="p-4 border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
                  Property Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Address</p>
                    <p className="text-text-primary">{loan.propertyAddress}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Property Type</p>
                    <p className="text-text-primary font-medium">{loan.propertyType}</p>
                  </div>
                  {loan.propertyUnits && (
                    <div>
                      <p className="text-text-tertiary text-xs mb-1">Units</p>
                      <p className="text-text-primary">{loan.propertyUnits} units</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Loan Details */}
              <Card className="p-4 border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
                  Loan Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Amount</p>
                    <p className="text-text-primary font-semibold text-lg">{loan.loanAmount}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Type</p>
                    <p className="text-text-primary">{loan.loanType}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Term</p>
                    <p className="text-text-primary">{loan.loanTerm}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Interest Rate</p>
                    <p className="text-text-primary">{loan.interestRate}</p>
                  </div>
                </div>
              </Card>

              {/* Key Dates */}
              <Card className="p-4 border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
                  Key Dates
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Applied</p>
                    <p className="text-text-primary">{new Date(loan.appliedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Closing Date</p>
                    <p className="text-text-primary font-medium">{new Date(loan.closingDate).toLocaleDateString()}</p>
                  </div>
                  <div className={`p-2 rounded ${getDaysBgColor(loan.daysToClosing)}`}>
                    <p className={`font-bold ${getDaysColor(loan.daysToClosing)}`}>
                      ⏰ {loan.daysToClosing} days remaining
                    </p>
                  </div>
                </div>
              </Card>

              {/* Team */}
              <Card className="p-4 border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
                  Assigned To
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Processor</p>
                    <p className="text-text-primary font-medium">{loan.processorAssigned}</p>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-xs mb-1">Loan Officer</p>
                    <p className="text-text-primary">{loan.loanOfficer}</p>
                  </div>
                </div>
              </Card>

              {/* Risk Assessment */}
              {loan.riskReasons.length > 0 && (
                <Card className="p-4 border-l-4 border-l-status-critical bg-status-critical-light/30">
                  <h3 className="font-semibold text-status-critical mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Critical Risk Assessment
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-text-secondary text-xs">Reasons:</p>
                    <ul className="space-y-1">
                      {loan.riskReasons.map((reason, idx) => (
                        <li key={idx} className="text-text-primary text-xs flex items-start gap-2">
                          <span className="text-status-critical mt-0.5">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full mt-3 border-status-critical text-status-critical hover:bg-status-critical hover:text-white"
                      onClick={() => alert('✅ Mark as Resolved\n\nAre you sure this loan is no longer at risk?\n\nFunctionality coming in Phase 2')}
                    >
                      Mark as Resolved
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* CENTER COLUMN - Pending Tasks (40%) */}
            <div className="lg:col-span-5">
              <Card className="p-4 border-border-subtle">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-subtle">
                  <h3 className="font-semibold text-text-primary text-lg">
                    Pending Tasks ({loan.tasksPending})
                  </h3>
                  <Button
                    size="sm"
                    className="bg-accent-primary hover:bg-accent-hover text-white"
                    onClick={() => alert('➕ Add New Task\n\nTask creation modal will open with fields:\n• Task type (Call, Email, Review Doc, etc.)\n• Title\n• Description\n• Due date/time\n• Priority\n• Assign to\n\nComing in Phase 2')}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Task
                  </Button>
                </div>

                <div className="space-y-3">
                  {loan.tasks.length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-status-success mx-auto mb-3" />
                      <p className="text-text-primary font-medium">All Caught Up!</p>
                      <p className="text-text-secondary text-sm">No pending tasks for this loan</p>
                    </div>
                  ) : (
                    loan.tasks.map((task) => {
                      const priorityColor = getTaskPriorityColor(task.priority);
                      const isCompleted = task.status === 'completed';

                      return (
                        <Card key={task.id} className={`p-3 ${isCompleted ? 'opacity-50' : ''}`}>
                          <div className="flex items-start gap-3">
                            <button
                              className="mt-1"
                              onClick={() => alert(`✅ Complete Task\n\n"${task.title}"\n\nTask will be marked as complete.\n\nFunctionality coming in Phase 2`)}
                            >
                              {isCompleted ? (
                                <CheckSquare className="w-5 h-5 text-status-success" />
                              ) : (
                                <Square className="w-5 h-5 text-text-tertiary hover:text-accent-primary" />
                              )}
                            </button>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                  {task.priority === 'urgent' && (
                                    <Badge className={`bg-${priorityColor} text-white text-xxs mb-1`}>
                                      URGENT
                                    </Badge>
                                  )}
                                  {task.priority === 'high' && (
                                    <Badge className={`bg-${priorityColor} text-white text-xxs mb-1`}>
                                      HIGH
                                    </Badge>
                                  )}
                                  <h4 className={`font-medium text-text-primary text-sm ${isCompleted ? 'line-through' : ''}`}>
                                    {task.title}
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs text-text-secondary mb-2">{task.description}</p>
                              <div className="flex items-center gap-4 text-xxs text-text-tertiary">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  Due: {new Date(task.dueDate).toLocaleDateString()} at {new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                <span>Priority: {task.priority.toUpperCase()}</span>
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2 h-7 text-xs"
                                onClick={() => alert(`✅ Complete Task\n\n"${task.title}"\n\nWill be marked as complete.\n\nComing in Phase 2`)}
                              >
                                Complete Task
                              </Button>
                            </div>
                          </div>
                        </Card>
                      );
                    })
                  )}
                </div>
              </Card>
            </div>

            {/* RIGHT COLUMN - Documents (30%) */}
            <div className="lg:col-span-3">
              <Card className="p-4 border-border-subtle">
                <div className="mb-4 pb-3 border-b border-border-subtle">
                  <h3 className="font-semibold text-text-primary mb-3">
                    Documents ({loan.documentsUploaded}/{loan.documentsRequired})
                  </h3>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-text-secondary">Progress</span>
                      <span className="text-xs font-semibold text-accent-primary">
                        {loan.completionPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-bg-secondary rounded-full h-2">
                      <div
                        className="bg-accent-primary h-2 rounded-full transition-all"
                        style={{ width: `${loan.completionPercentage}%` }}
                      />
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-accent-primary hover:bg-accent-hover text-white mt-3"
                    onClick={() => alert('📤 Upload New Document\n\nFile upload dialog will open.\n\nComing in Phase 2')}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                </div>

                <div className="space-y-2">
                  {loan.documents.length === 0 ? (
                    <div className="text-center py-6">
                      <FileText className="w-10 h-10 text-text-tertiary mx-auto mb-2" />
                      <p className="text-text-secondary text-sm">No documents yet</p>
                    </div>
                  ) : (
                    loan.documents.slice(0, 5).map((doc) => {
                      const statusColor = getDocumentStatusColor(doc.status);
                      const statusText = doc.status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                      return (
                        <Card key={doc.id} className="p-3 text-xs">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              {doc.status === 'approved' && <CheckCircle className="w-4 h-4 text-status-success flex-shrink-0" />}
                              {doc.status === 'rejected' && <AlertCircle className="w-4 h-4 text-status-critical flex-shrink-0" />}
                              {doc.status === 'pending' && <AlertCircle className="w-4 h-4 text-status-warning flex-shrink-0" />}
                              <span className="font-medium text-text-primary truncate">{doc.name}</span>
                            </div>
                            <Badge className={`bg-${statusColor}-light text-${statusColor} text-xxs flex-shrink-0`}>
                              {doc.status === 'approved' && '✓'}
                              {doc.status === 'rejected' && '✗'}
                              {doc.status === 'pending' && '⚠️'}
                              {' '}{statusText}
                            </Badge>
                          </div>
                          {doc.uploadedDate && (
                            <p className="text-xxs text-text-tertiary mb-1">
                              Uploaded: {new Date(doc.uploadedDate).toLocaleDateString()}
                              {doc.fileSize && ` • ${doc.fileSize}`}
                            </p>
                          )}
                          {doc.status === 'pending' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full mt-2 h-6 text-xxs"
                              onClick={() => alert(`📧 Request from Borrower\n\n"${doc.name}"\n\nEmail will be sent to borrower.\n\nComing in Phase 2`)}
                            >
                              Request from Borrower
                            </Button>
                          )}
                          {doc.reviewNotes && (
                            <p className="text-xxs text-status-critical mt-2 p-2 bg-status-critical-light/50 rounded">
                              {doc.reviewNotes}
                            </p>
                          )}
                        </Card>
                      );
                    })
                  )}
                  {loan.documents.length > 5 && (
                    <Button variant="ghost" className="w-full text-xs text-accent-primary">
                      Show All Documents ({loan.documents.length})
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <Card className="p-6">
            <p className="text-text-secondary">All tasks view coming soon...</p>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card className="p-6">
            <p className="text-text-secondary">All documents view coming soon...</p>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6">
            <p className="text-text-secondary">Activity timeline coming soon...</p>
          </Card>
        </TabsContent>

        <TabsContent value="calls">
          <Card className="p-6">
            <p className="text-text-secondary">Call history coming soon...</p>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card className="p-6">
            <p className="text-text-secondary">Notes section coming soon...</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
