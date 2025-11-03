'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MOCK_LOANS,
  getAtRiskLoans,
  getLoansClosingToday,
  getRiskLevelColor,
  formatStage,
  type ProcessorLoan,
  type RiskLevel,
  type LoanStage,
} from '@/lib/mock-data';
import {
  AlertCircle,
  Clock,
  Phone,
  Mail,
  Eye,
  ChevronDown,
  ChevronUp,
  List,
  LayoutGrid,
  Filter,
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState({
    atRisk: false,
    closingToday: false,
    allOther: false,
  });
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');
  const [filterStage, setFilterStage] = useState<LoanStage | 'all'>('all');
  const [filterRisk, setFilterRisk] = useState<RiskLevel | 'all'>('all');

  const atRiskLoans = getAtRiskLoans();
  const closingTodayLoans = getLoansClosingToday();
  const allOtherLoans = MOCK_LOANS.filter(
    loan => !atRiskLoans.includes(loan) && !closingTodayLoans.includes(loan)
  );

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const getDaysColor = (days: number) => {
    if (days <= 1) return 'text-status-critical';
    return 'text-text-primary';
  };

  const getDaysBgColor = (days: number) => {
    if (days <= 1) return 'bg-status-critical text-white font-bold';
    if (days <= 3) return 'bg-text-primary text-white font-bold';
    return 'bg-bg-secondary text-text-secondary font-semibold';
  };

  const LoanCard = ({ loan }: { loan: ProcessorLoan }) => {
    const riskColor = getRiskLevelColor(loan.riskLevel);
    const isCritical = loan.riskLevel === 'critical';

    return (
      <Card
        className={`p-4 cursor-pointer transition-all hover:shadow-lg border ${
          isCritical ? 'border-l-4 border-l-status-critical bg-red-50/50' : 'border-border-subtle hover:border-accent-primary/30'
        }`}
        onClick={() => router.push(`/dashboard/loans/${loan.id}`)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {isCritical && (
                  <Badge className="bg-status-critical text-white text-xxs px-2 py-0.5 font-bold uppercase">
                    Critical
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-text-primary text-base leading-tight">
                {loan.borrowerName}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">{loan.loanAmount} • {loan.propertyAddress}</p>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded text-sm whitespace-nowrap ${getDaysBgColor(loan.daysToClosing)}`}>
            {loan.daysToClosing === 0 ? 'Closing Today' : `${loan.daysToClosing} days`}
          </div>
        </div>

        {/* Risk Reasons (if critical only) */}
        {isCritical && loan.riskReasons.length > 0 && (
          <div className="mb-3 p-3 bg-white border-l-2 border-status-critical rounded text-xs">
            <p className="font-semibold text-text-primary mb-1.5">⚠️ Why Critical:</p>
            <ul className="space-y-1">
              {loan.riskReasons.map((reason, idx) => (
                <li key={idx} className="text-text-secondary">• {reason}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Action */}
        <div className="mb-3">
          <p className="text-xs text-text-tertiary mb-1">Next Action</p>
          <p className="text-sm text-text-primary font-medium">{loan.nextAction}</p>
        </div>

        {/* Document Progress */}
        <div className="mb-3 pb-3 border-b border-border-subtle">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-text-tertiary">Documents</span>
            <span className="text-xs text-text-secondary">
              {loan.documentsApproved}/{loan.documentsRequired} approved
            </span>
          </div>
          <div className="w-full bg-bg-secondary rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all ${
                loan.completionPercentage === 100 ? 'bg-green-500' : 'bg-text-primary'
              }`}
              style={{ width: `${loan.completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Footer: Last Activity + Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xxs text-text-tertiary">
            <Clock className="w-3 h-3" />
            <span>{loan.lastActivityHoursAgo}h ago</span>
          </div>
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2.5 text-xs text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
              onClick={() => alert(`📞 Call ${loan.borrowerName}\n\nPhone: ${loan.borrowerPhone}\n\nClick-to-call functionality coming in Phase 2 with Twilio integration.`)}
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              Call
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2.5 text-xs text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
              onClick={() => alert(`✉️ Email ${loan.borrowerName}\n\nTo: ${loan.borrowerEmail}\n\nEmail functionality coming in Phase 2.`)}
            >
              <Mail className="w-3.5 h-3.5 mr-1" />
              Email
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2.5 text-xs text-accent-primary hover:bg-accent-light font-medium"
              onClick={() => router.push(`/dashboard/loans/${loan.id}`)}
            >
              View Details →
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              My Pipeline
            </h1>
            <p className="text-text-secondary">
              {MOCK_LOANS.length} active loans • {atRiskLoans.length} at risk • {closingTodayLoans.length} closing today
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-surface border border-border-subtle rounded-lg p-1">
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                className={`h-8 px-3 ${viewMode === 'list' ? 'bg-accent-primary text-white' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4 mr-1" />
                List
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'kanban' ? 'default' : 'ghost'}
                className={`h-8 px-3 ${viewMode === 'kanban' ? 'bg-accent-primary text-white' : ''}`}
                onClick={() => setViewMode('kanban')}
              >
                <LayoutGrid className="w-4 h-4 mr-1" />
                Kanban
              </Button>
            </div>

            {/* Filters */}
            <Button
              variant="outline"
              className="border-border-medium"
              onClick={() => alert('🔍 Filters\n\nFilter loans by:\n• Stage (Collection, Underwriting, etc.)\n• Risk Level (Critical, High, Normal)\n• Closing Date Range\n• Processor Assignment\n• Document Status\n\nComing in Phase 2')}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* KANBAN VIEW */}
      {viewMode === 'kanban' && (
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {['document_collection', 'underwriting', 'approval', 'pre_closing', 'funded'].map((stage) => {
              const stageLoans = MOCK_LOANS.filter(loan => loan.stage === stage);
              const stageName = formatStage(stage as any);
              const stageColor = stage === 'document_collection' ? 'bg-purple-100 border-purple-300' :
                                stage === 'underwriting' ? 'bg-blue-100 border-blue-300' :
                                stage === 'approval' ? 'bg-yellow-100 border-yellow-300' :
                                stage === 'pre_closing' ? 'bg-green-100 border-green-300' :
                                'bg-gray-100 border-gray-300';

              return (
                <Card key={stage} className={`w-80 flex-shrink-0 border-2 ${stageColor}`}>
                  <div className="p-4 border-b border-border-subtle bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-text-primary">{stageName}</h3>
                      <Badge variant="outline" className="text-xs">{stageLoans.length}</Badge>
                    </div>
                  </div>
                  <div className="p-3 space-y-3 max-h-[70vh] overflow-y-auto">
                    {stageLoans.length === 0 ? (
                      <div className="text-center py-8 text-text-tertiary text-sm">
                        No loans in this stage
                      </div>
                    ) : (
                      stageLoans.map(loan => (
                        <Card
                          key={loan.id}
                          className={`p-3 cursor-pointer hover:shadow-md transition-all ${
                            loan.riskLevel === 'critical' ? 'border-l-4 border-l-status-critical bg-red-50' : ''
                          }`}
                          onClick={() => router.push(`/dashboard/loans/${loan.id}`)}
                        >
                          <div className="mb-2">
                            {loan.riskLevel === 'critical' && (
                              <Badge className="bg-status-critical text-white text-xxs mb-1">Critical</Badge>
                            )}
                            <h4 className="font-semibold text-text-primary text-sm leading-tight">
                              {loan.borrowerName}
                            </h4>
                            <p className="text-xs text-text-secondary mt-0.5">{loan.loanAmount}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-text-tertiary">Closing</span>
                              <span className={`font-semibold ${
                                loan.daysToClosing <= 1 ? 'text-status-critical' : 'text-text-secondary'
                              }`}>
                                {loan.daysToClosing === 0 ? 'Today' : `${loan.daysToClosing} days`}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-text-tertiary">Documents</span>
                              <span className="text-text-secondary">{loan.documentsApproved}/{loan.documentsRequired}</span>
                            </div>
                            <div className="w-full bg-bg-secondary rounded-full h-1">
                              <div
                                className={`h-1 rounded-full ${
                                  loan.completionPercentage === 100 ? 'bg-green-500' : 'bg-text-primary'
                                }`}
                                style={{ width: `${loan.completionPercentage}%` }}
                              />
                            </div>
                          </div>
                        </Card>
                      ))
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-accent-light rounded-lg border border-accent-border">
            <p className="text-sm text-text-secondary">
              <strong>💡 Kanban Feature:</strong> Visual pipeline showing loans across stages.
              In Phase 2, you'll be able to drag-and-drop cards to move loans between stages,
              with automatic status updates and notifications.
            </p>
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <>
          {/* AT RISK LOANS SECTION */}
          {atRiskLoans.length > 0 && (
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-4 cursor-pointer"
            onClick={() => toggleSection('atRisk')}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-status-critical rounded-full"></div>
              <h2 className="text-lg font-bold text-text-primary">
                Critical Attention Required <span className="text-text-tertiary font-normal">({atRiskLoans.length})</span>
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="text-text-tertiary">
              {expandedSections.atRisk ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </div>
          {expandedSections.atRisk && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {atRiskLoans.map(loan => (
                <LoanCard key={loan.id} loan={loan} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* CLOSING TODAY SECTION */}
      {closingTodayLoans.length > 0 && (
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-4 cursor-pointer"
            onClick={() => toggleSection('closingToday')}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-text-primary rounded-full"></div>
              <h2 className="text-lg font-bold text-text-primary">
                Closing Today <span className="text-text-tertiary font-normal">({closingTodayLoans.length})</span>
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="text-text-tertiary">
              {expandedSections.closingToday ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </div>
          {expandedSections.closingToday && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {closingTodayLoans.map(loan => (
                <LoanCard key={loan.id} loan={loan} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ALL OTHER LOANS SECTION */}
      <div>
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => toggleSection('allOther')}
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-border-medium rounded-full"></div>
            <h2 className="text-lg font-bold text-text-primary">
              All Other Loans <span className="text-text-tertiary font-normal">({allOtherLoans.length})</span>
            </h2>
          </div>
          <Button variant="ghost" size="sm" className="text-text-tertiary">
            {expandedSections.allOther ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </Button>
        </div>
        {expandedSections.allOther && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {allOtherLoans.map(loan => (
              <LoanCard key={loan.id} loan={loan} />
            ))}
          </div>
        )}
      </div>

          {/* Empty State */}
          {MOCK_LOANS.length === 0 && (
        <div className="text-center py-12">
          <LayoutGrid className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            No Loans Assigned Yet
          </h3>
          <p className="text-text-secondary">
            You don't have any active loans in your pipeline
          </p>
        </div>
          )}
        </>
      )}
    </div>
  );
}
