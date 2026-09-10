import { certs, docs } from "./ImageImport.js";

const certifications = [
  {
    id: 1,
    category: "campus",
    image: certs.cert1,
    title: "Basic Programming Assistant Practicum",
    description:
      "Served as a teaching assistant for the Basic Programming Practicum, guiding a class of 40 students in C++ fundamentals, including syntax, control structures, and basic algorithms.",
    date: "2023",
    docs: [docs.docs01]
  },
  {
    id: 2,
    category: "campus",
    image: certs.cert2,
    title: "Digital System Assistant Practicum",
    description:
      "Assisted in teaching digital system fundamentals to 40 students, covering logic gates, flip-flops, multiplexers, arithmetic circuits, and circuit simulation using Multisim.",
    date: "2023",
    docs: [docs.docs02]
  },
  {
    id: 3,
    category: "campus",
    image: certs.cert3,
    title: "Data Structure and Algorithm Assistant Practicum",
    description:
      "Helped deliver practical sessions on data structures and algorithms, including stacks, queues, linked lists, and trees, to a class of 40 students.",
    date: "2024",
    docs: [docs.docs1, docs.docs2]
  },
  {
    id: 4,
    category: "campus",
    image: certs.cert4,
    title: "Microprocessor and Microcontroller Assistant Practicum",
    description:
      "Assisted in microcontroller and microprocessor practicals, teaching I/O operations, timers, interrupts, and communication protocols to 40 students.",
    date: "2024",
    docs: [docs.docs3, docs.docs4]
  },
  {
    id: 5,
    category: "campus",
    image: certs.cert5,
    title:
      "Workshop on Embedded Systems and Cyber-Physical Systems Teaching Assistant",
    description:
      "Participated as a teaching assistant in a workshop focused on embedded systems and cyber-physical systems, guiding participants through hands-on projects and real-time integration.",
    date: "2024",
    docs: [docs.docs5]
  },
  {
    id: 6,
    category: "campus",
    image: certs.cert6,
    title: "Sustainability Sprint Hackathon – Penang, Malaysia",
    description:
      "Competed in an international hackathon to design future city solutions. Collaborated with a global team to develop a working application prototype within 24 hours.",
    date: "2024",
    docs: [docs.docs6, docs.docs7]
  },
  {
    id: 7,
    category: "campus",
    image: certs.cert7,
    title: "Embedded System Assistant Practicum",
    description:
      "Assisted in an Embedded Systems practicum for second years students, focusing on real-time systems, FSM, fault tolerance, and low power using Arduino to 40 students.",
    date: "2025",
    docs: [docs.docs8, docs.docs9]
  },
  {
    id: 8,
    category: "campus",
    image: certs.cert8,
    title:
      "Workshop Smart Monitoring with NB-IoT: From MQTT to Grafana Visualization",
    description:
      "Participated as a teaching assistant in a workshop focused on IoT system, developing an energy usage monitoring system by collecting electricity data from PLN, transmitting it to InfluxDB via Telegraf, and visualizing the data in real-time using Grafana. Guiding participants through hands-on projects and real-time integration.",
    date: "2025",
    docs: [docs.docs10, docs.docs11]
  },
  {
    id: 9,
    category: "campus",
    image: certs.cert9,
    title: "Completion Student Employee Robotics and Embedded System Laboratory",
    description:
      "Completed a student employee program at the Robotics and Embedded System Laboratory, assisting in laboratory activities, supporting research and practical sessions, and working on embedded systems and IoT-related projects.",
    date: "2025",
    docs: [docs.docs12, docs.docs13, docs.docs14, docs.docs15]
  },
  {
    id: 10,
    image: certs.cert10,
    title: "Hak Kekayaan Intelektual – Surat Pencatatan Ciptaan",
    description:
      "Obtained a copyright record for a work developed from an undergraduate thesis on real-time arrhythmia monitoring using ECG signal processing. The work was developed as part of a lecturer-led research collaboration with RSSA in 2026.",
    date: "2026",
    category: "professional",
    docs: []
  },
  {
    id: 11,
    image: certs.cert11,
    title: "Belajar Fundamental Analisis Data – Dicoding",
    description:
      "Completed an intermediate data analysis course covering data preparation, exploratory data analysis, data visualization, and extracting insights from datasets using Python.",
    date: "2026",
    category: "course",
    docs: []
  },
  {
    id: 12,
    image: certs.cert12,
    title: "Microsoft Desktop Application – Grade Excellent",
    description:
      "Achieved an Excellent grade in the Microsoft Desktop Application assessment, demonstrating proficiency in using Microsoft Office applications for productivity and document management.",
    date: "2025",
    category: "professional",
    docs: []
  },
  {
    id: 13,
    image: certs.cert13,
    title: "Belajar Machine Learning untuk Pemula – Dicoding",
    description:
      "Completed an introductory machine learning course covering fundamental concepts, supervised and unsupervised learning, data preparation, model development, and basic model evaluation.",
    date: "2026",
    category: "course",
    docs: []
  },
  {
    id: 14,
    image: certs.cert14,
    title: "Belajar Data Science – Dicoding",
    description:
      "Completed a data science course covering the fundamentals of data analysis, data processing, visualization, and the application of data science techniques to extract meaningful insights.",
    date: "2026",
    category: "course",
    docs: []
  },
  {
    id: 15,
    image: certs.cert15,
    title: "Belajar Dasar SQL – Dicoding",
    description:
      "Completed a foundational SQL course covering database concepts, data retrieval, filtering, sorting, aggregation, and querying relational databases.",
    date: "2026",
    category: "course",
    docs: []
  },
  {
    id: 16,
    image: certs.cert16,
    title: "Belajar Pemrograman dengan Python – Dicoding",
    description:
      "Completed a Python programming fundamentals course covering basic syntax, variables, data types, control flow, functions, and fundamental programming concepts.",
    date: "2026",
    category: "course",
    docs: []
  }
];

export default certifications;