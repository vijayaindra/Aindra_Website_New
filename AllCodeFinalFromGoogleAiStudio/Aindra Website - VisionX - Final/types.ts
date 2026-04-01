export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}