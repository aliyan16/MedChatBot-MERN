// Dashboard.jsx
import React from 'react';
import WelcomeBanner from '../components/dashboardComponents/welcome';
import ProgressSummary from '../components/dashboardComponents/progress';
import RecentSessions from '../components/dashboardComponents/recentSum';
import QuickAccess from '../components/dashboardComponents/quickAccess';
import SessionStats from '../components/dashboardComponents/sessionStat';
import MoodTracking from '../components/dashboardComponents/moodtrack';
import MoodTrends from '../components/dashboardComponents/moodtrend';
import GoalsProgress from '../components/dashboardComponents/goalsProg';
import SpotlightInsights from '../components/dashboardComponents/spotlight';

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