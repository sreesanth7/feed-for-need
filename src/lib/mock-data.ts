import type { User, Donation, FoodRequest, MatchSuggestion } from './types';

export const mockUsers: User[] = [
  { id: 'user-1', name: 'The Corner Bistro', email: 'donor@example.com', role: 'donor', location: 'New York, NY' },
  { id: 'user-2', name: 'Hope Foundation', email: 'recipient@example.com', role: 'recipient', location: 'New York, NY' },
  { id: 'user-3', name: 'Grand Catering Co.', email: 'donor2@example.com', role: 'donor', location: 'Brooklyn, NY' },
  { id: 'user-4', name: 'Community Shelter', email: 'recipient2@example.com', role: 'recipient', location: 'Brooklyn, NY' },
];

export const mockDonations: Donation[] = [
  {
    id: 'donation-1',
    donorId: 'user-1',
    donorName: 'The Corner Bistro',
    foodType: 'Fresh Bread & Pastries',
    quantity: '5 boxes',
    location: '123 Main St, New York, NY',
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'bread pastries',
    status: 'available',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
  },
  {
    id: 'donation-2',
    donorId: 'user-3',
    donorName: 'Grand Catering Co.',
    foodType: 'Chicken Alfredo Pasta',
    quantity: '20 trays',
    location: '456 Cater Ave, Brooklyn, NY',
    expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'pasta chicken',
    status: 'requested',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 'donation-3',
    donorId: 'user-1',
    donorName: 'The Corner Bistro',
    foodType: 'Vegetable Soup',
    quantity: '1 large pot',
    location: '123 Main St, New York, NY',
    expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'vegetable soup',
    status: 'available',
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: 'donation-4',
    donorId: 'user-3',
    donorName: 'Grand Catering Co.',
    foodType: 'Mixed Green Salad',
    quantity: '15 large bowls',
    location: '456 Cater Ave, Brooklyn, NY',
    expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000),
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'green salad',
    status: 'completed',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
];

export const mockRequests: FoodRequest[] = [
  {
    id: 'req-1',
    donationId: 'donation-2',
    recipientId: 'user-2',
    recipientName: 'Hope Foundation',
    status: 'pending',
    requestedAt: new Date(Date.now() - 30 * 60 * 1000),
    donation: mockDonations[1],
  },
  {
    id: 'req-2',
    donationId: 'donation-4',
    recipientId: 'user-4',
    recipientName: 'Community Shelter',
    status: 'completed',
    requestedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000),
    pickupTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    donation: mockDonations[3],
  },
];

export const mockSuggestions: MatchSuggestion[] = [
    {
        id: 'sug-1',
        recipientName: 'Hope Foundation',
        recipientLocation: 'New York, NY (2.1 miles away)',
        matchScore: 95,
        reason: 'High preference for baked goods and located nearby.'
    },
    {
        id: 'sug-2',
        recipientName: 'City Youth Center',
        recipientLocation: 'New York, NY (3.5 miles away)',
        matchScore: 88,
        reason: 'Frequently accepts similar quantities.'
    },
    {
        id: 'sug-3',
        recipientName: 'The Giving Pantry',
        recipientLocation: 'New York, NY (5.2 miles away)',
        matchScore: 81,
        reason: 'Past positive feedback with bakery donations.'
    }
];
