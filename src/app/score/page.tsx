'use client';
import DashboardLayout from '@/components/DashboardLayout';
import TrustScore from '@/components/TrustScore';
import Nudges from '@/components/Nudges';

export default function ScorePage() {
  return (
    <DashboardLayout>
      <div style={{ marginBottom: '30px' }}>
        <h1 className="text-gradient" style={{ fontSize: '2rem' }}>Trust Score Details</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Learn how your score is calculated and how to improve it.</p>
      </div>

      <div className="grid-dashboard">
        <TrustScore />
        <Nudges />
      </div>
    </DashboardLayout>
  );
}
