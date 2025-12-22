import { automation, facedetection, fatiguard, gasmonitoring, webportfolio, ecoplants } from "./ImageImport.js";

const projects = [
  {
    id: 1,
    name: "Thesis - Real-Time ECG Signal Processing & R-Peak Detection",
    shortDescription:
      "Undergraduate thesis on real-time ECG signal processing and R-peak detection using the Pan-Tompkins++ algorithm.",
    description:
      "This undergraduate thesis focuses on the development of a real-time ECG signal processing system for accurate R-peak detection using the Pan-Tompkins++ algorithm. ECG data are acquired using a Shimmer ECG sensor configured through Consensys, then streamed and processed in real time using the PyShimmer library. The system implements multiple ECG signal processing stages, including filtering, differentiation, squaring, and adaptive thresholding to detect R-peaks and compute heart rate (BPM). Performance evaluation was conducted using real-time ECG signals and reference datasets to validate detection accuracy and robustness.",
    date: "2025",
    images: [
      "Arrhythmia/aritmia1.png",
      "Arrhythmia/aritmia2.jpg",
      "Arrhythmia/aritmia3.png",
      "Arrhythmia/aritmia4.jpg",
      "Arrhythmia/aritmia5.png"
    ],
    github: "https://github.com/NurFattahh/your-thesis-repo", // ganti jika repo sudah ada
    demo: "#", // bisa diganti video demo sistem
    features: [
      "Real-time ECG acquisition using Shimmer ECG sensor",
      "Device configuration and streaming via Consensys",
      "ECG data streaming and handling using PyShimmer",
      "Multi-stage ECG signal processing pipeline",
      "R-peak detection using Pan-Tompkins++ algorithm",
      "Heart rate (BPM) computation and analysis"
    ],
    tech: [
      "Python",
      "PyShimmer",
      "Consensys",
      "Signal Processing",
      "Pan-Tompkins++ Algorithm",
      "NumPy",
      "SciPy",
      "Matplotlib"
    ]
  },  
  {
    id: 5,
    name: "Website - Portfolio",
    shortDescription:
      "A responsive personal website developed using React. Styled with custom CSS and includes image carousels and modals.",
    description:
      "This personal landing page was built using React to showcase my profile, portfolio, and achievements in a clean, responsive layout. The project incorporates dynamic UI elements like carousels (Swiper.js), modals for enlarged image previews, and smooth scroll-triggered animations. It follows a dark theme aesthetic and emphasizes clarity and modern web practices. The site also features routing for each section and is optimized for various screen sizes.",
    date: "January 2023",
    images: [
      webportfolio.webportfolio1,
      webportfolio.webportfolio2,
      webportfolio.webportfolio3,
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
      fatiguard.fatiguard1,
      fatiguard.fatiguard2,
      fatiguard.fatiguard3,
      fatiguard.fatiguard4,
      fatiguard.fatiguard5,
      fatiguard.fatiguard6
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
      automation.automation1,
      automation.automation2,
      automation.automation3,
      automation.automation4,
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
    name: "Computer Vision - Face Detection",
    shortDescription: "A real-time face detection system using YOLOv5, trained on a custom dataset and deployed on a local machine for live video inference.",
    description: `This project involves developing a real-time face detection system using YOLOv5. A custom face dataset was annotated using Roboflow, then trained using the YOLOv5 framework. The model is capable of performing inference on live video feeds, including CCTV streams and webcam input, directly on a local computer without cloud dependency. This makes the system efficient and privacy-friendly.
  
  Key challenges tackled in this project include optimizing detection speed, ensuring robust accuracy with limited training data, and implementing an interface for live detection. The solution is lightweight and suitable for applications such as surveillance, smart home systems, or event monitoring.`,
    date: "June 2025",
    images: [
      facedetection.facedetection1,
      facedetection.facedetection2,
      facedetection.facedetection3,
      facedetection.facedetection4,
      facedetection.facedetection5
    ],
    github: "https://github.com/nurFattahh/face_detection",
    demo: "https://yourdemo.com/face-detection", // Ganti jika ada video atau demo online
    features: [
      "Real-time face detection with YOLOv5",
      "Custom dataset annotation using Roboflow",
      "Trained on YOLOv5 with custom anchors and augmentation",
      "Inference on local computer from webcam or CCTV",
      "Optimized for lightweight, offline usage"
    ],
    tech: [
      "Python",
      "YOLOv5",
      "OpenCV",
      "Roboflow",
      "PyTorch"
    ]
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    name: "Mobile Apps - Ecoplants",
    shortDescription: "A mobile app for buying and selling plants, featuring a community and donation system to promote environmental awareness.",
    description: "Ecoplants is a mobile application designed to facilitate online buying and selling of plants. Beyond just a marketplace, Ecoplants includes a community feature where plant enthusiasts can interact, and a donation system to support environmental conservation activities. In this project, I was responsible for backend development—building and integrating RESTful APIs using Golang, Supabase as the backend service, and SQL for database management. The frontend was developed using Flutter to ensure cross-platform compatibility and a modern user experience.",
    date: "March 2023",
    images: [
      ecoplants.ecoplants1,
      ecoplants.ecoplants3,
      ecoplants.ecoplants4,
      ecoplants.ecoplants5,
      ecoplants.ecoplants6,
      ecoplants.ecoplants7,
      ecoplants.ecoplants8,
      ecoplants.ecoplants9
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
    id: 9,
    name: "IoT - Monitoring System Design",
    description: "This is a description of Project 4. It was developed using Django.",
    date: "April 2023",
    images: [
      gasmonitoring.gasmonitoring1,
      gasmonitoring.gasmonitoring2,
      gasmonitoring.gasmonitoring3,
      gasmonitoring.gasmonitoring4
    ],
    github: "https://github.com/yourrepo1",
    demo: "https://yourvideo.com/demo1"
  },
];

export default projects;