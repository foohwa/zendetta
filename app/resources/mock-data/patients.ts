import { Patient } from "~/types/patient";

export const patients: Patient[] = [
  {
    id: "001",
    firstName: "Alice",
    lastName: "Tan",
    dateOfBirth: "1985-05-15", // string in YYYY-MM-DD format
    gender: "female",
    avatarUrl: "https://i.pravatar.cc/150?img=25", // Avatar URL
    address: {
      street: "456 Jalan Ampang",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan",
      postalCode: "50450",
      country: "Malaysia",
    },
    contactInfo: {
      email: "alice.tan@example.com",
      phone: "+60-12-345-6789",
      emergencyContactName: "Robert Tan",
      emergencyContactPhone: "+60-12-987-6543",
    },
    medicalHistory: {
      allergies: ["Latex"],
      currentMedications: ["Lisinopril"],
      pastSurgeries: ["Knee Surgery"],
      chronicDiseases: ["Diabetes"],
      otherConditions: ["Hypertension"],
    },
    dateOfLastVisit: "2023-06-15T14:30:00Z", // ISO 8601 date-time string
    notes: "Patient needs a routine check-up in six months.",
  },
  {
    id: "002",
    firstName: "Ahmad",
    lastName: "Abdullah",
    dateOfBirth: "1970-11-25", // string in YYYY-MM-DD format
    gender: "male",
    avatarUrl: "https://i.pravatar.cc/150?img=58", // Avatar URL
    address: {
      street: "789 Jalan Bukit Bintang",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan",
      postalCode: "55100",
      country: "Malaysia",
    },
    contactInfo: {
      email: "ahmad.abdullah@example.com",
      phone: "+60-12-876-5432",
      emergencyContactName: "Laura Abdullah",
      emergencyContactPhone: "+60-12-654-3210",
    },
    medicalHistory: {
      allergies: ["Peanuts"],
      currentMedications: ["Metformin"],
      pastSurgeries: ["Gallbladder Removal"],
      chronicDiseases: ["Heart Disease"],
      otherConditions: ["High Cholesterol"],
    },
    dateOfLastVisit: "2023-05-10T09:00:00Z", // ISO 8601 date-time string
    notes: "Patient reported sensitivity to cold drinks.",
  },
  {
    id: "003",
    firstName: "Siti",
    lastName: "Rahman",
    dateOfBirth: "1995-02-20", // string in YYYY-MM-DD format
    gender: "female",
    avatarUrl: "https://i.pravatar.cc/150?img=47", // Avatar URL
    address: {
      street: "123 Jalan Tun Razak",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan",
      postalCode: "50400",
      country: "Malaysia",
    },
    contactInfo: {
      email: "siti.rahman@example.com",
      phone: "+60-12-555-5555",
      emergencyContactName: "Lucy Rahman",
      emergencyContactPhone: "+60-12-666-7777",
    },
    medicalHistory: {
      allergies: ["Penicillin", "Aspirin"],
      currentMedications: ["Albuterol"],
      pastSurgeries: ["None"],
      chronicDiseases: ["Asthma"],
      otherConditions: ["None"],
    },
    dateOfLastVisit: "2023-07-05T11:15:00Z", // ISO 8601 date-time string
    notes: "Patient advised to use a soft-bristled toothbrush.",
  },
];
