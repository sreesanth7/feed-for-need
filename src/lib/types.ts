export interface User {
  id: string;
  name: string;
  email: string;
  role: 'donor' | 'recipient';
  location: string;
}

export type DonationStatus = 'available' | 'requested' | 'confirmed' | 'completed' | 'cancelled';

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  foodType: string;
  quantity: string;
  location: string;
  expiresAt: Date;
  imageUrl: string;
  imageHint?: string;
  status: DonationStatus;
  createdAt: Date;
}

export type RequestStatus = 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled';

export interface FoodRequest {
  id: string;
  donationId: string;
  recipientId: string;
  recipientName: string;
  status: RequestStatus;
  requestedAt: Date;
  pickupTime?: Date;
  donation: Donation;
}

export interface MatchSuggestion {
    id: string;
    recipientName: string;
    recipientLocation: string;
    matchScore: number;
    reason: string;
}
