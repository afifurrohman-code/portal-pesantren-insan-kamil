
// Fix: Added React import to resolve React.ReactNode namespace errors
import React from 'react';

export enum Page {
  Dashboard = 'dashboard',
  Academic_Teachers = 'academic_teachers',
  Academic_Students = 'academic_students',
  Gallery_News = 'gallery_news',
  Gallery_Extracurricular = 'gallery_extra',
  Creations_Bio = 'creations_bio',
  Creations_Story = 'creations_story',
  Creations_Essay = 'creations_essay',
  Creations_Opinion = 'creations_opinion',
  Creations_Poetry = 'creations_poetry',
  Creations_Review = 'creations_review',
  Library_Kitab = 'library_kitab',
  Library_Book = 'library_book',
  Library_Journal = 'library_journal',
  Registration = 'registration',
  Settings = 'settings',
  Profile = 'profile'
}

export interface NavItem {
  id: Page;
  label: string;
  // Fix: icon property requires React.ReactNode which is now available via the React import
  icon: React.ReactNode;
  children?: NavItem[];
}

export interface StatItem {
  label: string;
  value: string | number;
  change?: string;
  // Fix: icon property requires React.ReactNode which is now available via the React import
  icon: React.ReactNode;
  color: string;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  status: 'Aktif' | 'Cuti';
  image: string;
}

export interface Student {
  id: number;
  name: string;
  class: string;
  room: string;
  image: string;
}