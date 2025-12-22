import { certs, docs } from "./ImageImport.js";

const certifications = [
  {
    id: 1,
    image: certs.cert1,
    title: "Basic Programming Assistant Practicum",
    description:
      "Served as a teaching assistant for the Basic Programming Practicum, guiding a class of 40 students in C++ fundamentals, including syntax, control structures, and basic algorithms.",
    date: "2023",
    docs: ["Experiences/Docs/docs11.jpg"]
  },
  {
    id: 2,
    image: certs.cert2,
    title: "Digital System Assistant Practicum",
    description:
      "Assisted in teaching digital system fundamentals to 40 students, covering logic gates, flip-flops, multiplexers, arithmetic circuits, and circuit simulation using Multisim.",
    date: "2023",
    docs: ["Experiences/Docs/docs11.jpg"]
  },
  {
    id: 3,
    image: certs.cert3,
    title: "Data Structure and Algorithm Assistant Practicum",
    description:
      "Helped deliver practical sessions on data structures and algorithms, including stacks, queues, linked lists, and trees, to a class of 40 students.",
    date: "2024",
    docs: [docs.docs1, docs.docs2,]
  },
  {
    id: 4,
    image: certs.cert4,
    title: "Microprocessor and Microcontroller Assistant Practicum",
    description:
      "Assisted in microcontroller and microprocessor practicals, teaching I/O operations, timers, interrupts, and communication protocols to 40 students.",
    date: "2024",
    docs: [docs.docs3, docs.docs4]
  },
  {
    id: 5,
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
    image: certs.cert6,
    title: "Sustainability Sprint Hackathon – Penang, Malaysia",
    description:
      "Competed in an international hackathon to design future city solutions. Collaborated with a global team to develop a working application prototype within 24 hours.",
    date: "2024",
    docs: [docs.docs6, docs.docs7]
  },
  {
    id: 7,
    image: certs.cert7,
    title: "Embedded System Assistant Practicum",
    description:
      "Assisted in an Embedded Systems practicum for second years students, focusing on real-time systems, FSM, fault tolerance, and low power using Arduino to 40 students.",
    date: "2025",
    docs: [docs.docs8, docs.docs9]
  },
  {
    id: 8,
    image: certs.cert8,
    title: "Workshop Smart Monitoring with NB-IoT: From MQTT to Grafana Visualization",
    description:
      "Participated as a teaching assistant in a workshop focused on IoT systems, developing an energy usage monitoring system by collecting electricity data from PLN, transmitting it to InfluxDB via Telegraf, and visualizing the data in real-time using Grafana. Guiding participants through hands-on projects and real-time integration.",
    date: "2025",
    docs: [docs.docs10, docs.docs11]
  }
];

export default certifications;