/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StartupProvider, useStartup } from './context/StartupContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';

// Primary Views
import { OverviewDashboard } from './components/modules/OverviewDashboard';
import { StartupProfileView } from './components/modules/StartupProfileView';
import { AiCofounderStudio } from './components/modules/AiCofounderStudio';
import { LifecycleView } from './components/modules/LifecycleView';
import { MarketResearchView } from './components/modules/MarketResearchView';
import { FailureAuditView } from './components/modules/FailureAuditView';
import { ValidationScorecardView } from './components/modules/ValidationScorecardView';
import { TechnologyPlannerView } from './components/modules/TechnologyPlannerView';
import { HardwareOpsView } from './components/modules/HardwareOpsView';
import { FinancialPlannerView } from './components/modules/FinancialPlannerView';
import { ProfitBreakEvenView } from './components/modules/ProfitBreakEvenView';
import { StartupReportGeneratorView } from './components/modules/StartupReportGeneratorView';
import { AcademicPresentationView } from './components/modules/AcademicPresentationView';

// Extended Views
import {
  TimelineMilestonesView,
  ProblemSolutionView,
  TargetCustomersView,
  CompetitorMatrixView,
  AlternativeIdeasView,
  ExploreIdeasView,
  SoloFounderView,
  TeamBuilderView,
  SoftwareLicensesView,
  RevenueModelView,
  BusinessValuationView,
  FundingLoanAdvisorView,
  RiskMatrixView,
  SourcesDocsView,
  AdminSettingsView
} from './components/modules/ExtendedModules';

// Modals & Drawers
import { AuthModal } from './components/auth/AuthModal';
import { AuthPage } from './components/auth/AuthPage';
import { StartupWizard } from './components/onboarding/StartupWizard';
import { NextActionDrawer } from './components/modules/NextActionDrawer';
import { ScenarioSimulatorModal } from './components/modules/ScenarioSimulatorModal';
import { ProjectsManagerModal } from './components/projects/ProjectsManagerModal';
import { EmptyProjectView } from './components/modules/EmptyProjectView';

const MainLayout: React.FC = () => {
  const { activeTab, isAuthenticated, hasConfiguredProject } = useStartup();

  // If not authenticated, render the dedicated Login & SignUp page initially
  if (!isAuthenticated) {
    return <AuthPage />;
  }

  const renderActiveModule = () => {
    // If user has not configured their project yet, show empty state with project intake
    if (!hasConfiguredProject) {
      return <EmptyProjectView />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <OverviewDashboard />;
      case 'profile':
        return <StartupProfileView />;
      case 'ai-cofounder':
        return <AiCofounderStudio />;
      case 'lifecycle':
        return <LifecycleView />;
      case 'timeline':
        return <TimelineMilestonesView />;
      case 'problem-solution':
        return <ProblemSolutionView />;
      case 'target-customers':
        return <TargetCustomersView />;
      case 'market-research':
        return <MarketResearchView />;
      case 'competitors':
        return <CompetitorMatrixView />;
      case 'failure-audit':
        return <FailureAuditView />;
      case 'validation-scorecard':
        return <ValidationScorecardView />;
      case 'alternative-ideas':
        return <AlternativeIdeasView />;
      case 'explore-ideas':
        return <ExploreIdeasView />;
      case 'solo-founder':
        return <SoloFounderView />;
      case 'team-builder':
        return <TeamBuilderView />;
      case 'tech-planner':
        return <TechnologyPlannerView />;
      case 'software-licenses':
        return <SoftwareLicensesView />;
      case 'hardware-ops':
        return <HardwareOpsView />;
      case 'financials':
        return <FinancialPlannerView />;
      case 'revenue-models':
        return <RevenueModelView />;
      case 'break-even':
        return <ProfitBreakEvenView />;
      case 'valuation':
        return <BusinessValuationView />;
      case 'funding-loans':
        return <FundingLoanAdvisorView />;
      case 'risk-matrix':
        return <RiskMatrixView />;
      case 'sources':
        return <SourcesDocsView />;
      case 'report-generator':
        return <StartupReportGeneratorView />;
      case 'academic-presentation':
        return <AcademicPresentationView />;
      case 'admin-settings':
        return <AdminSettingsView />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {renderActiveModule()}
        </main>
      </div>

      {/* Global Modals & Drawers */}
      <AuthModal />
      <StartupWizard />
      <ProjectsManagerModal />
      <NextActionDrawer />
      <ScenarioSimulatorModal />
    </div>
  );
};

export default function App() {
  return (
    <StartupProvider>
      <MainLayout />
    </StartupProvider>
  );
}
