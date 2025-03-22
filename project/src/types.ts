export interface Appointment {
  id: string;
  parentId: string;
  childName: string;
  childAge: number;
  date: Date;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Parent {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  content: string;
  date: Date;
  approved: boolean;
}

