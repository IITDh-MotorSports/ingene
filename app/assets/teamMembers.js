const teamMembers = [
  // Club Secratary
  {
    id: 1,
    title: "Vansh Yadav",
    paragraph: "Club Secretary, Aerodynamics Team Head",
    image: "/TeamImages/IMG_20220307_183329__01__01 - Yadav Vansh Suresh.jpg",
    team: "secretary",
  },
  // Aerodynamics Team
  {
    id: 2,
    title: "Rudra Rudra",
    paragraph: "Team Member",
    image: "/TeamImages/Rudra - Rudra Rudra.jpg",
    team: "aerodynamics",
  },
  {
    id: 3,
    title: "Ankit Kumar",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20230112_141607 - Ankit Kumar.jpg",
    team: "aerodynamics",
  },
  // Powertrain Team
  {
    id: 4,
    title: "Harsh Vardhan Chowdhary",
    paragraph: "Team Head",
    image: "/TeamImages/IMG_20230520_124748 - Harsh Vardhan Chowdhary.jpg",
    team: "powertrain",
  },
  {
    id: 5,
    title: "Devansh Jandrasupalli",
    paragraph: "Team Member",
    image: "/TeamImages/WhatsApp Image 2023-06-25 at 21.57.35 Devansh.jpg",
    team: "powertrain",
  },
  {
    id: 6,
    title: "Tejas Mhaiskar",
    paragraph: "Team Member",
    image: "/TeamImages/ingene photo - Tejas Ajit Mhaiskar.jpg",
    team: "powertrain",
  },
  // Suspension Team
  {
    id: 7,
    title: "Arindam Thander",
    paragraph: "Team Head",
    image: "/TeamImages/IMG_20230321_192316 - Arindam Thander.jpg",
    team: "suspension",
  },
  {
    id: 8,
    title: "Varun Limaye",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20221126_220957~2 - Varun Shantanu Limaye.jpg",
    team: "suspension",
  },
  {
    id: 9,
    title: "Ratish Sinha",
    paragraph: "Team Member",
    image:
      "/TeamImages/WhatsApp Image 2023-05-17 at 01.33.35 - Ratish Sinha.jpg",
    team: "suspension",
  },
  // Brakes Team
  {
    id: 10,
    title: "Varun Limaye",
    paragraph: "Team ead",
    image: "/TeamImages/IMG_20221126_220957~2 - Varun Shantanu Limaye.jpg",
    team: "brakes",
  },
  {
    id: 11,
    title: "Kute Yash Satish",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20230430_141145 - Kute Yash Satish.jpg",
    team: "brakes",
  },
  {
    id: 12,
    title: "Lokesh B Jogi",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20230513_171551 - Lokesh B Jogi.jpg",
    team: "brakes",
  },
  //Chassis Team
  {
    id: 13,
    title: "Hari Prasad P",
    paragraph: "Team Head",
    image: "/TeamImages/Hari_Prasad_P.jpg",
    team: "chassis",
  },
  {
    id: 14,
    title: "Arindam Thander",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20230321_192316 - Arindam Thander.jpg",
    team: "chassis",
  },
  {
    id: 15,
    title: "Varun Limaye",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20221126_220957~2 - Varun Shantanu Limaye.jpg",
    team: "chassis",
  },
  // Steering Team
  {
    id: 16,
    title: "Anurag Goel",
    paragraph: "Team Head",
    image: "/TeamImages/Screenshot_20230516-093249_Gallery - Anurag Goel.jpg",
    team: "steering",
  },
  {
    id: 17,
    title: "Harsh Vardhan Chowdhary",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20230520_124748 - Harsh Vardhan Chowdhary.jpg",
    team: "steering",
  },
  {
    id: 18,
    title: "Surzith Raj Pandi",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_3720 - S. Surzith Raj Pandi.jpg",
    team: "steering",
  },
  //Electronis Team
  {
    id: 19,
    title: "Ayush Singhi",
    paragraph: "Team Head",
    image: "/TeamImages/singhi.jpg",
    team: "electronics",
  },
  {
    id: 20,
    title: "Upamaka S V B S B Abhinay",
    paragraph: "Team Member",
    image: "/TeamImages/IMG_20221211_105347 - Upamaka S V B S B Abhinay.jpg",
    team: "electronics",
  },
  {
    id: 21,
    title: "Ayush Mallick",
    paragraph: "Team Member",
    image: "/TeamImages/SAVE_20230515_062900 - Ayush Mallick.jpg",
    team: "electronics",
  },
  // Outreach / Media Team
  {
    id: 22,
    title: "Manindra Singh Rathore",
    paragraph: "Team Head",
    image: "/TeamImages/IMG_20230517_163633 - Manindra Singh Rathore.jpg",
    team: "media",
  },
  {
    id: 23,
    title: "Gudapareddy Naganandini",
    paragraph: "Team Member",
    image:
      "/TeamImages/02584B0C-C50E-4205-A4FD-F6D13D5D1215 - Gudapareddy Naganandini.jpeg",
    team: "media",
  },
  {
    id: 24,
    title: "Simoni Tripathi",
    paragraph: "Team Member",
    image: "/TeamImages/20230516_202329 - Simoni Tripathi.jpg",
    team: "media",
  },
  {
    id: 25,
    title: "Bidipta Saha",
    paragraph: "Team Member",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    team: "media",
  },
  //webops
  {
    id: 26,
    title: "Dhiraj Borse",
    paragraph: "Team Member",
    image: "/TeamImages/borse.jpg",
    team: "webops",
  },
  {
    id: 27,
    title: "Saksham Chhimwal",
    paragraph: "Team Member",
    image: "/TeamImages/saks.jpg",
    team: "webops",
  },
  {
    id: 28,
    title: "Sarth Rajain",
    paragraph: "Team Member",
    image: "/TeamImages/sarth.jpg",
    team: "webops",
  },
];

export { teamMembers };