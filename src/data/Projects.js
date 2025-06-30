const projects = [
  {
    id: 1,
    name: "Website - Portfolio",
    shortDescription:
      "A responsive personal website developed using React. Styled with custom CSS and includes image carousels and modals.",
    description:
      "This personal landing page was built using React to showcase my profile, portfolio, and achievements in a clean, responsive layout. The project incorporates dynamic UI elements like carousels (Swiper.js), modals for enlarged image previews, and smooth scroll-triggered animations. It follows a dark theme aesthetic and emphasizes clarity and modern web practices. The site also features routing for each section and is optimized for various screen sizes.",
    date: "January 2023",
    images: [
      "WebPortfolio/personalWeb.png",
      "WebPortfolio/personalWeb3.png",
      "WebPortfolio/personalWeb2.png"
    ],
    github: "https://github.com/yourrepo1",
    demo: "https://yourvideo.com/demo1",
    features: [
      "Responsive design with smooth navigation",
      "Project and certificate gallery using Swiper.js",
      "Modal preview for enlarged views",
      "Scroll-triggered animations",
      "Dark theme aesthetic"
    ],
    tech: [
      "React.js",
      "CSS3",
      "Bootstrap",
      "Swiper.js",
      "React Router"
    ]
  },
  {
    id: 2,
    name: "Wearable Device - Fatiguard",
    shortDescription: "A wearable device for early fatigue detection using ECG and temperature sensors, integrated with an AI model running on ESP32.",
    description:
      "Fatiguard is a wearable monitoring system designed to detect early signs of fatigue in workers, especially in high-risk environments like construction sites. The device collects physiological data such as heart rate (via ECG sensor) and body temperature, processes it using a lightweight AI model deployed on an ESP32 microcontroller, and gives real-time feedback. The goal is to prevent overexertion-related accidents. I was responsible for system integration, model deployment, and communication between edge devices and the gateway.",
    date: "June 2025",
    images: [
      "Fatiguard/fatiguard1.png",
      "Fatiguard/fatiguard2.png",
      "Fatiguard/fatiguard3.png",
      "Fatiguard/fatiguard4.png",
      "Fatiguard/fatiguard5.png",
      "Fatiguard/fatiguard6.png",
    ],
    github: "https://github.com/NurFattahh/fatigue_detection", // ubah jika kamu punya repo khusus
    demo: "#", // bisa ganti dengan video atau demo link jika tersedia
    features: [
      "Real-time fatigue classification using ECG and temperature input",
      "Lightweight AI model running directly on ESP32",
      "MQTT communication between edge device and gateway",
      "Edge computing to reduce latency and power usage",
      "Wearable form factor with minimal interference"
    ],
    tech: [
      "ESP32",
      "TinyML / TensorFlow Lite",
      "ECG Analog Sensor",
      "Infrared Temperature Sensor",
      "MQTT Protocol",
      "PlatformIO",
      "Python (for model training)"
    ]
  },  
  {
    id: 3,
    name: "Automation - DB Cluster",
    shortDescription: "Automation of high-availability database clusters using Ansible and Terraform to simplify infrastructure deployment.",
    description:
      "This project focuses on automating the provisioning and configuration of a high-availability (HA) database cluster. By leveraging Terraform for infrastructure as code (IaC) and Ansible for configuration management, it allows seamless deployment of a scalable and resilient DB cluster on cloud environments. The automation ensures that multiple database nodes are provisioned with correct replication, security configurations, and monitoring tools. I was responsible for writing the playbooks, managing infrastructure modules, and testing deployment flows.",
    date: "March 2023",
    images: [
      "Automation/db2.png",
      "Automation/db1.png",
      "Automation/db3.png",
      "Automation/db4.png"
    ],
    github: "https://github.com/nurFattahh/HA-web-db-automation",
    demo: "#", // Placeholder if no live demo
    features: [
      "Infrastructure provisioning with Terraform",
      "Automated DB cluster configuration using Ansible",
      "High-availability setup with replication and failover",
      "Modular and reusable infrastructure codebase",
      "Logs and monitoring integrated into the deployment"
    ],
    tech: [
      "Terraform",
      "Ansible",
      "PostgreSQL Cluster",
      "Linux (Ubuntu/CentOS)",
      "Cloud Virtual Machines",
      "Shell Script"
    ]
  }, 
  {
    id: 4,
    name: "Computer Vision - People Counter",
    shortDescription: "A real-time people counting system using a camera and object detection model to monitor foot traffic in specific areas.",
    description: "This project implements a real-time people counting system using computer vision techniques. A camera captures video input, and a YOLO-based object detection model processes each frame to detect and count the number of people passing through predefined zones. It is designed to help analyze foot traffic in locations such as malls, offices, or events. The counter updates dynamically and can be extended to include data analytics or notifications. The system focuses on efficiency, low latency, and easy deployment using lightweight frameworks.",
    date: "February 2025",
    images: [
      "PeopleCounter/pc1.png",
      "PeopleCounter/pc2.png",
      "PeopleCounter/pc3.png",
      "PeopleCounter/pc4.png",
      "PeopleCounter/pc5.png"
    ],
    github: "https://github.com/nurFattahh/people-counter-cv",
    demo: "https://yourvideo.com/people-counter-demo",  // Ganti jika ada video
    features: [
      "Real-time video processing for people detection",
      "YOLO-based object detection model",
      "Customizable detection zones",
      "Live counter and visual overlay",
      "Scalable for various public environments"
    ],
    tech: [
      "Python",
      "OpenCV",
      "YOLOv5",
      "NumPy",
      "Tkinter / Streamlit (for interface)"
    ]
  },  
  {
    id: 5,
    name: "Embedded System - Accident Detection",
    shortDescription: "A safety monitoring system that uses ESP32 to detect accidents and automatically send alerts to Telegram via HTTP, ensuring quick emergency response.",
    description: "This project is a real-time accident detection system developed using ESP32. It monitors acceleration data from an onboard accelerometer to detect abnormal motion patterns that may indicate a collision or accident. When an incident is detected, the device immediately sends a notification to a designated Telegram chat via a bot using HTTP API calls. This allows family members or emergency responders to be promptly informed. The system is designed to be compact, cost-effective, and easily integrated into personal vehicles or wearables for workers in hazardous environments.",
    date: "May 2024",
    images: [
      "AccidentDetection/accident1.png",
      "AccidentDetection/accident2.png",
      "AccidentDetection/accident3.png",
      "AccidentDetection/accident4.png"
    ],
    github: "https://github.com/nurFattahh/esp32-accident-detection",
    demo: "https://yourvideo.com/accident-demo",  // bisa diganti jika ada video
    features: [
      "Real-time accident detection using accelerometer",
      "Notification system via Telegram bot",
      "Low-cost ESP32 implementation",
      "Compact and portable design",
      "HTTP integration with third-party services"
    ],
    tech: [
      "ESP32",
      "C++ (Arduino)",
      "Telegram Bot API",
      "HTTP Protocol",
      "Accelerometer Sensor (e.g., ADXL335)"
    ]
  },   
  {
    id: 6,
    name: "Mobile Apps - Ecoplants",
    shortDescription: "A mobile app for buying and selling plants, featuring a community and donation system to promote environmental awareness.",
    description: "Ecoplants is a mobile application designed to facilitate online buying and selling of plants. Beyond just a marketplace, Ecoplants includes a community feature where plant enthusiasts can interact, and a donation system to support environmental conservation activities. In this project, I was responsible for backend development—building and integrating RESTful APIs using Golang, Supabase as the backend service, and SQL for database management. The frontend was developed using Flutter to ensure cross-platform compatibility and a modern user experience.",
    date: "March 2023",
    images: [
      "Ecoplants/ecoplants1.png",
      "Ecoplants/ecoplants3.png",
      "Ecoplants/ecoplants4.png",
      "Ecoplants/ecoplants5.png",
      "Ecoplants/ecoplants6.png",
      "Ecoplants/ecoplants8.png",
    ],
    github: "https://github.com/nurFattahh/ecoplants",
    demo: "https://example.com/demo-ecoplants", // Replace with actual video/demo link
    features: [
      "Modern UI marketplace for plants",
      "Community feature for user interaction",
      "Plant donation system for social impact",
      "User authentication and profile management",
      "Scalable backend using Supabase and Golang APIs"
    ],
    tech: [
      "Flutter",
      "Golang",
      "Supabase",
      "SQL"
    ]
  },  
  {
    id: 7,
    name: "IoT - Monitoring System Design",
    description: "This is a description of Project 4. It was developed using Django.",
    date: "April 2023",
    images: ["GasMonitoring/monitoring (1).png", "GasMonitoring/monitoring (2).png", "GasMonitoring/monitoring (3).png", "GasMonitoring/monitoring (4).png"],
    github: "https://github.com/yourrepo1",
    demo: "https://yourvideo.com/demo1"
  },
];

export default projects;