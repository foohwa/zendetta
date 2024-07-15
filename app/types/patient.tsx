import { ISODate, ISODateTime } from "~/types/date";

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: ISODate;
  gender: "male" | "female" | "other";
  avatarUrl?: string;
  address: Address;
  contactInfo: ContactInfo;
  medicalHistory: MedicalHistory;
  dateOfLastVisit: ISODateTime;
  notes: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export interface MedicalHistory {
  allergies: string[];
  currentMedications: string[];
  pastSurgeries: string[];
  chronicDiseases: string[];
  otherConditions: string[];
}
