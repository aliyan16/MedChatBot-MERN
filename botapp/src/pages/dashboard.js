// Dashboard.jsx
import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import ProgressSummary from './ProgressSummary';
import RecentSessions from './RecentSessions';
import QuickAccess from './QuickAccess';
import SessionStats from './SessionStats';
import MoodTracking from './MoodTracking';
import MoodTrends from './MoodTrends';
import GoalsProgress from './GoalsProgress';
import SpotlightInsights from './SpotlightInsights';

const Dashboard = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto">
      <WelcomeBanner />
      <ProgressSummary improvement={25} strongestImpact="Mindfulness exercises on Tuesday" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="space-y-5">
          <RecentSessions />
          <QuickAccess />
          <SessionStats />
        </div>
        
        <div className="space-y-5">
          <MoodTrends />
          <GoalsProgress />
          <SpotlightInsights improvement={23} strongestImpact="Mindfulness exercises on Tuesday" />
        </div>
      </div>
      
      <MoodTracking />
    </div>
  );
};

export default Dashboard;