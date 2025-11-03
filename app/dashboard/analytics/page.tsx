'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, TrendingDown, Users, Clock, CheckCircle, AlertTriangle, DollarSign, Target } from 'lucide-react';
import { MOCK_PROCESSORS, MOCK_LOANS } from '@/lib/mock-data';

export default function AnalyticsPage() {
  // Calculate team metrics
  const totalLoans = MOCK_LOANS.length;
  const atRiskLoans = MOCK_LOANS.filter(l => l.riskLevel === 'critical' || l.riskLevel === 'high').length;
  const closingThisWeek = MOCK_LOANS.filter(l => l.daysToClosing <= 7).length;
  const avgOnTimeRate = Math.round(MOCK_PROCESSORS.reduce((acc, p) => acc + p.onTimeRate, 0) / MOCK_PROCESSORS.length);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Analytics Dashboard</h1>
        <p className="text-text-secondary">
          Team performance, pipeline insights, and operational metrics
        </p>
      </div>

      {/* Feature Explanation Card */}
      <Card className="p-6 mb-6 bg-bg-secondary border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-bg-tertiary rounded-lg flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-6 h-6 text-text-secondary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-2">Analytics Features (Phase 2)</h2>
            <p className="text-sm text-text-secondary mb-3">
              The Analytics dashboard provides operations managers with deep insights into team performance and pipeline health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">📈 Team Performance Metrics:</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• <strong>On-Time Closing Rate:</strong> % of loans closed by target date</li>
                  <li>• <strong>Average Days to Close:</strong> Processing speed per processor</li>
                  <li>• <strong>Document Approval Rate:</strong> First-time approval percentage</li>
                  <li>• <strong>Active Loan Load:</strong> How many loans per processor</li>
                  <li>• <strong>Bottleneck Detection:</strong> Where loans get stuck</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">💰 Pipeline Insights:</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• <strong>Pipeline Value:</strong> Total $ amount in each stage</li>
                  <li>• <strong>Conversion Funnel:</strong> Application → Funded rates</li>
                  <li>• <strong>Risk Trends:</strong> Are at-risk loans increasing?</li>
                  <li>• <strong>Loan Type Analysis:</strong> Purchase vs Refi vs Bridge</li>
                  <li>• <strong>Time-in-Stage:</strong> How long loans stay in each phase</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-bg-tertiary rounded-lg border border-border-subtle">
                <p className="text-xs text-text-tertiary mb-2"><strong>Manager View:</strong></p>
                <p className="text-sm text-text-secondary">
                  Operations managers can compare processor performance, identify training needs, and reallocate workload.
                  Charts show trends over time (weekly/monthly/quarterly).
                </p>
              </div>
              <div className="p-4 bg-bg-tertiary rounded-lg border border-border-subtle">
                <p className="text-xs text-text-tertiary mb-2"><strong>Goal Tracking:</strong></p>
                <p className="text-sm text-text-secondary">
                  Set team goals (e.g., "95% on-time rate", "14 days avg close") and track progress.
                  Visual indicators show if team is on track or needs intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-text-secondary" />
            </div>
            <TrendingUp className="w-4 h-4 text-text-tertiary" />
          </div>
          <p className="text-2xl font-bold text-text-primary">{totalLoans}</p>
          <p className="text-sm text-text-secondary">Active Loans</p>
          <p className="text-xs text-text-tertiary mt-1">+3 from last week</p>
        </Card>

        <Card className="p-4 border-l-4 border-l-status-critical">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-status-critical" />
            </div>
            <TrendingDown className="w-4 h-4 text-status-critical" />
          </div>
          <p className="text-2xl font-bold text-text-primary">{atRiskLoans}</p>
          <p className="text-sm text-text-secondary">At Risk Loans</p>
          <p className="text-xs text-status-critical mt-1">Critical attention needed</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-text-secondary" />
            </div>
            <TrendingUp className="w-4 h-4 text-text-tertiary" />
          </div>
          <p className="text-2xl font-bold text-text-primary">{avgOnTimeRate}%</p>
          <p className="text-sm text-text-secondary">On-Time Rate</p>
          <p className="text-xs text-text-tertiary mt-1">+5% from last month</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-text-secondary" />
            </div>
            <TrendingUp className="w-4 h-4 text-text-tertiary" />
          </div>
          <p className="text-2xl font-bold text-text-primary">$18.5M</p>
          <p className="text-sm text-text-secondary">Closing This Week</p>
          <p className="text-xs text-text-tertiary mt-1">{closingThisWeek} loans</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Loan Funnel */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Pipeline Funnel</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Document Collection</span>
                <span className="text-sm font-semibold text-text-primary">2 loans</span>
              </div>
              <div className="w-full bg-bg-secondary rounded-full h-3">
                <div className="bg-text-primary h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Underwriting</span>
                <span className="text-sm font-semibold text-text-primary">2 loans</span>
              </div>
              <div className="w-full bg-bg-secondary rounded-full h-3">
                <div className="bg-text-primary h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Pre-Closing</span>
                <span className="text-sm font-semibold text-text-primary">1 loan</span>
              </div>
              <div className="w-full bg-bg-secondary rounded-full h-3">
                <div className="bg-text-primary h-3 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-text-tertiary mt-4">
            Phase 2: Interactive funnel with drill-down to see individual loans in each stage
          </p>
        </Card>

        {/* Processor Performance */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Processor Performance</h3>
          <div className="space-y-3">
            {MOCK_PROCESSORS.map((processor) => (
              <div key={processor.id} className="flex items-center justify-between p-3 bg-bg-secondary rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {processor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{processor.name}</p>
                    <p className="text-xs text-text-tertiary">{processor.activeLoans} active loans</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-text-primary">
                    {processor.onTimeRate}%
                  </p>
                  <p className="text-xs text-text-tertiary">On-time</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-tertiary mt-4">
            Phase 2: Click processor to see detailed performance history and loan breakdown
          </p>
        </Card>
      </div>

      {/* Additional Features Preview */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Additional Analytics (Phase 2)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-bg-secondary rounded-lg">
            <Clock className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <h4 className="font-semibold text-text-primary mb-1">Time-in-Stage Analysis</h4>
            <p className="text-xs text-text-secondary">
              See how long loans spend in each stage. Identify bottlenecks and optimize workflow.
            </p>
          </div>
          <div className="text-center p-4 bg-bg-secondary rounded-lg">
            <TrendingUp className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <h4 className="font-semibold text-text-primary mb-1">Trend Analysis</h4>
            <p className="text-xs text-text-secondary">
              Track key metrics over time (weekly, monthly, quarterly). Spot patterns and seasonal trends.
            </p>
          </div>
          <div className="text-center p-4 bg-bg-secondary rounded-lg">
            <Users className="w-8 h-8 text-text-tertiary mx-auto mb-2" />
            <h4 className="font-semibold text-text-primary mb-1">Team Benchmarking</h4>
            <p className="text-xs text-text-secondary">
              Compare performance across processors. Identify top performers and training opportunities.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
