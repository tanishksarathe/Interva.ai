# IntervaAI - Interview Preparation Platform

A comprehensive interview preparation and DSA learning platform designed to help candidates ace their technical interviews and coding challenges through mock interviews, real-time assessments, and personalized study materials.

## 🎯 Features

### Interview Preparation
- **Mock Interview Environment** - Realistic interview simulations with timed assessments
- **Interview Gauntlet** - Multi-round interview challenges
- **Rapid-Fire Questions** - Quick-fire Q&A sessions for rapid learning
- **Interview Summary** - Detailed analysis of interview performance

### Technical Assessments
- **Data Structures & Algorithms (DSA)** - Comprehensive DSA examination and practice
- **Aptitude Tests** - Numerical and logical reasoning assessments
- **Machine Coding Challenges** - Real coding problems with live evaluation
- **Communication Skills** - Practice communication and soft skills

### Learning & Development
- **Practice Problems** - Curated problem sets organized by difficulty
- **Study Materials** - Comprehensive study resources and guides
- **Topic-Based Learning** - Structured learning paths for different topics
- **Previous Tests** - Access and review past assessments

### Additional Features
- **Resume Analysis** - AI-powered resume review and suggestions
- **Job/Internship Tracker** - Track job and internship opportunities
- **User Dashboard** - Track progress and performance metrics
- **Premium Features** - Advanced features with premium subscription

## 🛠️ Tech Stack

### Frontend (IntervaAI)
- **React 19** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Recharts** - Data visualization
- **Monaco Editor** - Code editor for problem solving
- **Three.js** - 3D graphics
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend (Server)
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Cloud storage for images
- **OpenAI API** - AI-powered features (resume analysis, etc.)
- **PDF-Parse** - PDF processing

## 📋 Project Structure

```
Interview_Preperation/
├── README.md
├── IntervaAI/                          # Frontend Application
│   ├── src/
│   │   ├── components/                 # Reusable UI components
│   │   │   ├── CardOne.jsx to CardSix.jsx
│   │   │   ├── AssessmentTimer.jsx     # Timer for assessments
│   │   │   ├── InterviewSummary.jsx    # Interview results summary
│   │   │   ├── ProblemCard.jsx         # Problem display
│   │   │   ├── QuestionCard.jsx        # Question display
│   │   │   ├── SkillCard.jsx           # Skills display
│   │   │   ├── TopicPage.jsx           # Topic-based learning
│   │   │   └── modals/                 # Modal components
│   │   ├── pages/                      # Page components
│   │   │   ├── Home.jsx                # Landing page
│   │   │   ├── Dashboard.jsx           # User dashboard
│   │   │   ├── Practice.jsx            # Practice problems
│   │   │   ├── MockInterview.jsx       # Mock interview setup
│   │   │   ├── DataStructures.jsx      # DSA problems
│   │   │   ├── Aptitude.jsx            # Aptitude tests
│   │   │   ├── MachineCoding.jsx       # Machine coding problems
│   │   │   ├── Communication.jsx       # Communication practice
│   │   │   ├── ResumeAnalyze.jsx       # Resume analysis
│   │   │   ├── StudyMaterial.jsx       # Learning resources
│   │   │   ├── Resources.jsx           # External resources
│   │   │   ├── InterviewGauntlet.jsx   # Challenge mode
│   │   │   └── Login&SignUp/           # Authentication pages
│   │   ├── assets/                     # Static data and files
│   │   │   ├── courseArrays.js         # Course data
│   │   │   ├── interviewQuestionsStack.js
│   │   │   ├── study.js                # Study materials
│   │   │   ├── MockDriveContent/
│   │   │   ├── Practice/
│   │   │   ├── resumeAssets/
│   │   │   └── user/
│   │   ├── config/
│   │   │   ├── API.jsx                 # API configuration
│   │   │   └── AuthContext.jsx         # Authentication context
│   │   ├── utils/                      # Utility functions
│   │   ├── workers/                    # Web workers
│   │   ├── App.jsx                     # Main app component
│   │   ├── Layout.jsx                  # Layout wrapper
│   │   └── main.jsx                    # Entry point
│   ├── public/                         # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── Server/                             # Backend Application
│   ├── src/
│   │   ├── config/                     # Database & configurations
│   │   ├── controllers/                # Request handlers
│   │   ├── middlewares/                # Custom middlewares
│   │   ├── models/                     # MongoDB models
│   │   ├── routes/                     # API routes
│   │   ├── seeders/                    # Database seeders
│   │   └── utils/                      # Utility functions
│   ├── uploads/                        # Uploaded files storage
│   ├── index.js                        # Server entry point
│   ├── package.json
│   └── README.md
└── README.md                           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud - MongoDB Atlas)
- Cloudinary account (for image uploads)
- OpenAI API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Interview_Preperation
   ```

2. **Setup Frontend**
   ```bash
   cd IntervaAI
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../Server
   npm install
   ```

### Environment Variables

**Backend (.env file in Server/)**
```
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
OPENAI_API_KEY=<your-openai-api-key>
PORT=5000
```

**Frontend (.env file in IntervaAI/)**
```
VITE_API_URL=http://localhost:5000
```

## 🏃 Running the Project

### Development Mode

**Terminal 1 - Start Backend**
```bash
cd Server
npm run dev
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend**
```bash
cd IntervaAI
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build

**Build Frontend**
```bash
cd IntervaAI
npm run build
```

**Deploy Backend**
```bash
cd Server
npm start
```

## 📝 Available Scripts

### Frontend (IntervaAI)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (Server)
- `npm run dev` - Start with nodemon (auto-reload)
- `npm test` - Run tests (currently not configured)

## 🔑 Key Functionalities

### User Authentication
- Sign up and login functionality
- JWT-based authentication
- Secure password hashing with bcrypt

### Interview Assessments
- Real-time timer for assessments
- Auto-save progress
- Performance metrics and feedback
- Interview summary with detailed analytics

### Code Challenges
- Monaco Editor integration for code writing
- Real-time code execution and validation
- Problem difficulty levels

### Resume Analysis
- PDF upload and parsing
- AI-powered resume suggestions
- Scoring and recommendations

### Progress Tracking
- User dashboard with statistics
- Performance history
- Topic-wise progress tracking

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

**Tanishk Sarathe**

## 📞 Support

For support, email or create an issue in the repository.

## 🙏 Acknowledgments

- React and Vite communities
- MongoDB and Mongoose documentation
- OpenAI API documentation
- All contributors and testers

---

**Happy Coding! 🚀 Good luck with your interview preparations!**
