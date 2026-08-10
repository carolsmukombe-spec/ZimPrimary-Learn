import { Badge } from '../types/curriculum';

export const BADGES: Badge[] = [
  {
    id: 'badge-first-lesson',
    name: 'First Step Scholar',
    titleShona: 'Mufundi Wekutanga',
    titleNdebele: 'Umfundi Wokuqala',
    description: 'Completed your first topic lesson!',
    iconName: 'BookOpen',
    category: 'General',
    requirement: 'Complete 1 lesson'
  },
  {
    id: 'badge-test-master',
    name: 'ZIMSEC Distinction Master',
    titleShona: 'Nyanzvi Yekuedza',
    description: 'Scored 100% on any topic test or mock paper!',
    iconName: 'Award',
    category: 'Mathematics',
    requirement: 'Score 100% on any test'
  },
  {
    id: 'badge-heritage-guardian',
    name: 'Great Zimbabwe Guardian',
    titleShona: 'Muchengeti weNhaka',
    titleNdebele: 'Umlondolozi Wamasiko',
    description: 'Mastered Heritage & Social Studies topics!',
    iconName: 'Shield',
    category: 'Social Science',
    requirement: 'Complete Heritage lessons'
  },
  {
    id: 'badge-science-pioneer',
    name: 'Zambezi Science Pioneer',
    titleShona: 'Sainzi yeZimbabwe',
    description: 'Completed Science & Technology exercises!',
    iconName: 'Zap',
    category: 'Science & Technology',
    requirement: 'Complete Science topic'
  },
  {
    id: 'badge-cala-star',
    name: 'CALA Project Champion',
    titleShona: 'Nyanzvi yePurojekiti',
    description: 'Explored a School-Based Project guide and submitted steps!',
    iconName: 'FolderCheck',
    category: 'General',
    requirement: 'Complete project guide'
  },
  {
    id: 'badge-streak-3',
    name: '3-Day Learning Streak',
    titleShona: 'Mazuva Mairi neMweya',
    description: 'Logged in and studied for 3 consecutive days!',
    iconName: 'Flame',
    category: 'General',
    requirement: 'Maintain 3 day streak'
  }
];
