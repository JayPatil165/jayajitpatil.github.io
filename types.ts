import React from 'react';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string;
  linkType: 'Link' | 'Private Repo';
  duration: string;
  description: string[];
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  duration: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface DraftingBoardIdea {
  title: string;
  description: string;
  status: 'Concept Phase' | 'Designing' | 'Need Co-founder';
  tech: string[];
  collaborateEmail?: string;
}
