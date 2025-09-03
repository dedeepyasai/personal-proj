export type UserRole = 'applicant' | 'judge' | 'sponsor' | 'admin';

export type SubmissionStatus = 'draft' | 'submitted' | 'under_review' | 'reviewed' | 'awarded' | 'rejected';

export type SubmissionTier = 'standard' | 'priority' | 'premium';

export type SubmissionTrack = 'patent' | 'project_idea';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  organization_id?: string;
  created_at: string;
  last_login?: string;
}

export interface Organization {
  id: string;
  name: string;
  type: 'sponsor' | 'university' | 'company';
  logo_url?: string;
  description?: string;
  website?: string;
  sectors: string[];
  created_at: string;
}

export interface Submission {
  id: string;
  applicant_id: string;
  track: SubmissionTrack;
  title: string;
  abstract: string;
  patent_status: 'granted' | 'pending' | 'published' | 'none';
  status: SubmissionStatus;
  tier: SubmissionTier;
  budget: number;
  country: string;
  team_members: TeamMember[];
  milestones: Milestone[];
  payment_id?: string;
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  cycle_id: string;
  average_score?: number;
  review_count: number;
  certificate_url?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  bio: string;
}

export interface Milestone {
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface SubmissionFile {
  id: string;
  submission_id: string;
  file_type: 'claims_pdf' | 'presentation' | 'video' | 'other';
  file_name: string;
  file_url: string;
  file_size: number;
  uploaded_at: string;
}

export interface Review {
  id: string;
  submission_id: string;
  judge_id: string;
  scores: ReviewScores;
  comments: string;
  feedback_to_applicant: string;
  is_conflicted: boolean;
  submitted_at?: string;
  created_at: string;
}

export interface ReviewScores {
  novelty: number; // 1-10
  feasibility: number; // 1-10
  impact: number; // 1-10
  commercialization: number; // 1-10
  team: number; // 1-10
}

export interface GrantCycle {
  id: string;
  quarter: string;
  year: number;
  open_date: string;
  close_date: string;
  decision_date: string;
  grants_count: number;
  grant_amount: number;
  status: 'upcoming' | 'open' | 'closed' | 'decided';
  created_at: string;
}

export interface Award {
  id: string;
  submission_id: string;
  cycle_id: string;
  sponsor_id?: string;
  amount: number;
  award_letter_url?: string;
  announced_at?: string;
  created_at: string;
}

export interface Mentorship {
  id: string;
  submission_id: string;
  mentor_id: string;
  status: 'requested' | 'matched' | 'active' | 'completed';
  session_count: number;
  calendly_link?: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  actor_id: string;
  action: string;
  target_type: string;
  target_id: string;
  details: Record<string, any>;
  ip_address: string;
  timestamp: string;
}