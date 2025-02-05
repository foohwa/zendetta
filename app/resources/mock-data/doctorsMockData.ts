import { Dentist } from "~/types/dentist";

export const dentists: Dentist[] = [
  {
    dentistId: "42",
    firstName: "Jane",
    lastName: "Johnson",
    gender: "Female",
    dateOfBirth: new Date("1982-02-15"),
    phoneNumber: "+1234567890",
    email: "jane.johnson@example.com",
    officeAddress: "123 Dental Street, Smile City, SC 12345",
    specialization: "Orthodontics",
    licenseNumber: "DNT123456",
    qualifications: "DDS, Orthodontics Certification",
    yearsOfExperience: 12,
    clinicAffiliation: "Smile City Dental Clinic",
    consultationHours: "Mon-Fri 9:00 AM - 5:00 PM",
    languagesSpoken: ["English", "Spanish"],
    emergencyContact: "Bob Brown, +1234567891",
    professionalMemberships: "American Association of Orthodontists",
    publications: "Research on Braces Efficiency",
    specialAchievements: "Top Orthodontist 2021",
    notes: "Specializes in braces and aligners",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
  },
  {
    dentistId: "19",
    firstName: "Sam",
    lastName: "Smith",
    gender: "Male",
    dateOfBirth: new Date("1979-11-23"),
    phoneNumber: "+0987654321",
    email: "james.wilson@example.com",
    officeAddress: "456 Dental Avenue, Smile City, SC 12345",
    specialization: "Pediatric Dentistry",
    licenseNumber: "DNT654321",
    qualifications: "DDS, Pediatric Dentistry Certification",
    yearsOfExperience: 15,
    clinicAffiliation: "Smile City Pediatric Dental Clinic",
    consultationHours: "Tue-Sat 10:00 AM - 6:00 PM",
    languagesSpoken: ["English", "French"],
    emergencyContact: "Lisa Wilson, +0987654322",
    professionalMemberships: "American Academy of Pediatric Dentistry",
    publications: "Oral Health in Children",
    specialAchievements: "Best Pediatric Dentist 2020",
    notes: "Specializes in dental care for children",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
  },
  {
    dentistId: "84",
    firstName: "Alex",
    lastName: "Brown",
    gender: "Female",
    dateOfBirth: new Date("1985-07-08"),
    phoneNumber: "+1122334455",
    email: "rachel.miller@example.com",
    officeAddress: "789 Dental Boulevard, Smile City, SC 12345",
    specialization: "Endodontics",
    licenseNumber: "DNT789012",
    qualifications: "DDS, Endodontics Certification",
    yearsOfExperience: 10,
    clinicAffiliation: "Smile City Endodontic Clinic",
    consultationHours: "Mon-Thu 8:00 AM - 4:00 PM",
    languagesSpoken: ["English", "German"],
    emergencyContact: "Mark Miller, +1122334456",
    professionalMemberships: "American Association of Endodontists",
    publications: "Advances in Root Canal Therapy",
    specialAchievements: "Outstanding Endodontist 2022",
    notes: "Expert in root canal treatments",
    avatarUrl: "https://i.pravatar.cc/150?img=28",
  },
];
