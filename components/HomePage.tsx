'use client';


import React from 'react';
import { Hero } from './Hero';
import { EventsSection } from './EventsSection';
import { LatestResults } from './LatestResults';
import { Calendar } from './Calendar';
import { RecruitmentCTA } from './RecruitmentCTA'; 
import { NewsSection } from './NewsSection';
import { StoreSection } from './StoreSection';
import { HistoryStats } from './HistoryStats';
import { Sponsors } from './Sponsors';
import { Membership } from './Membership';
import { MemberArea } from './MemberArea';
import { SocialFeed } from './SocialFeed'; // Imported
import { Standings } from './Standings';

interface HomePageProps {
  onNavigate: (page: string, id?: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <EventsSection />
      <LatestResults />
      <Calendar />
      <Standings />
      <RecruitmentCTA onNavigate={onNavigate} /> 
      <NewsSection onNavigate={onNavigate} />
      <StoreSection onNavigate={onNavigate} />
      <HistoryStats onNavigate={onNavigate} />
      <Sponsors onNavigate={onNavigate} />
      <Membership onNavigate={onNavigate} />
      <MemberArea />
      <SocialFeed /> {/* Added at the end */}
    </>
  );
};
