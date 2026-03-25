# 🎯 Interva.AI – AI-Powered Interview Preparation Platform

> A Full-Stack AI-Powered Mock Interview, DSA Assessment & Career Readiness System

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Team Members](#team-members)
3. [Available Features](#available-features)
4. [Tech Stack](#tech-stack)
5. [Missing/Required Features](#missingrequired-features)
6. [Installation & Setup](#installation--setup)
7. [API Endpoints](#api-endpoints)
8. [Database Models](#database-models)
9. [Project Structure](#project-structure)

---

## 🎯 Project Overview

**Interva.AI** is a web-based AI-powered interview preparation platform that simulates real technical interview environments, evaluates DSA and aptitude performance, analyzes resumes against job descriptions, and provides personalized career-readiness coaching through structured learning paths.

### 🔁 Preparation Loop Model

> **Profile → Practice → Assess → Evaluate → Analyze → Improve → Repeat**

Interva.AI is not a static question bank.
It is a comprehensive, AI-driven interview simulation system that adapts to the user's career stage and target role.

### 🎯 Problem Statement

Most interview prep platforms fail to simulate real interview conditions:
- They lack multi-round structured mock tests (Aptitude → DSA → HR)
- They don't evaluate code quality or provide AI-backed feedback
- They offer no resume analysis against actual job descriptions
- They have no personalized study paths or progress tracking

This leads to under-preparation, lack of confidence, and poor real-world interview performance.

### ✅ Interva.AI Solves This By:
- Simulating real multi-round placement drive environments
- Evaluating DSA code submissions with AI-powered feedback
- Analyzing resumes against custom job descriptions using OpenAI
- Providing topic-wise structured learning paths with study materials
- Tracking performance across sessions with detailed analytics and percentile scores

**Base URL**: `http://localhost:5000` (Backend) | `http://localhost:5173` (Frontend)

---

## 👥 Team Members & Roles

| Name | Role |
|------|------|
| **Tanishk Sarathe** | Team Leader · Full Stack Developer (Frontend + Backend + MERN) |

---

## ✨ Available Features

### 🔐 Authentication & Security

| Feature | Details | Status |
|---------|---------|--------|
| **User Registration** | Register with full name, email, phone, and password | ✅ Working |
| **User Login** | Secure JWT-based authentication | ✅ Working |
| **User Logout** | Clear session and token | ✅ Working |
| **Password Hashing** | BCrypt with salt rounds | ✅ Working |
| **JWT Token Management** | Secure token generation and validation | ✅ Working |
| **Role-Based Access Control** | Student and Admin roles with middleware protection | ✅ Working |
| **Profile Photo Upload** | Cloudinary-based image storage | ✅ Working |

**Endpoints**:
- `POST /auth/register` – Register new user
- `POST /auth/login` – Login user
- `GET /auth/logout` – Logout user

---

### 👤 User Profile & Career Setup

| Feature | Details | Status |
|---------|---------|--------|
| **Profile Update** | Edit full name, career stage, target role, degree, branch, passout year | ✅ Working |
| **Career Stage Setting** | Student / Fresher / Working Professional | ✅ Working |
| **Target Role Selection** | Software Engineer, Data Analyst, etc. | ✅ Working |
| **Competitive Profiles** | GitHub, LeetCode, CodeChef, HackerRank links | ✅ Working |
| **Programming Language Preferences** | Multi-language skill listing | ✅ Working |
| **Resume Score Tracking** | AI-evaluated resume score stored on profile | ✅ Working |
| **Profile Photo Management** | Upload and update avatar via Cloudinary | ✅ Working |

**Endpoints**:
- `PUT /user/update` – Update user profile
- `PATCH /user/update-profile-photo` – Upload and update profile photo

---

### 🧪 Mock Interview & Assessment System

| Feature | Details | Status |
|---------|---------|--------|
| **Mock Test Generator** | AI-generated multi-round tests based on topics and difficulty | ✅ Working |
| **Multi-Round Test Structure** | Aptitude → DSA → HR sequential rounds | ✅ Working |
| **Difficulty Levels** | Easy / Medium / Hard per round | ✅ Working |
| **Active Round Tracking** | Round state persisted across sessions (0=Apti, 1=DSA, 2=HR) | ✅ Working |
| **Timed Assessments** | Per-round time limits configured at test creation | ✅ Working |
| **Aptitude Evaluation** | MCQ-based apti scoring with answer evaluation | ✅ Working |
| **DSA Code Submission** | Submit code per problem with evaluation engine | ✅ Working |
| **HR Round Handling** | HR question set with scoring | ✅ Working |
| **Live Test Retrieval** | Fetch active test with populated questions | ✅ Working |
| **Previous Tests Access** | View all past mock tests by user | ✅ Working |
| **Interview Reports** | Retrieve all completed interview summaries | ✅ Working |

**Endpoints**:
- `POST /interview/test-generator` – Generate a new mock test
- `GET /interview/interview-report` – Get all interview reports
- `GET /user/get-live-test/:id` – Fetch live test by ID
- `POST /user/get-live-questions` – Get questions for active round
- `POST /user/evaluate-answers` – Evaluate aptitude answers
- `PATCH /user/update-round-after-dsa/:testId` – Progress to next round after DSA
- `GET /user/all-previous-tests` – Fetch all previous tests for user

---

### 📊 Interview Performance Analytics

| Feature | Details | Status |
|---------|---------|--------|
| **Interview Summary Generation** | AI-powered full summary with scores and feedback | ✅ Working |
| **Score Breakdown** | DSA / Aptitude / HR scores tracked separately | ✅ Working |
| **Overall Percentile Calculation** | Relative performance percentile score | ✅ Working |
| **Per-Round Accuracy Tracking** | Correct / wrong / total per round | ✅ Working |
| **Time Analysis** | Total time, per-round time, and average time per section | ✅ Working |
| **Improvement Tracking** | Score diff between attempts across DSA, Apti, HR | ✅ Working |
| **Code Submission History** | Stores submitted code per DSA question per test | ✅ Working |
| **AI Feedback Generation** | Personalized textual feedback on overall performance | ✅ Working |

**Endpoints**:
- `PATCH /user/interview-summary` – Create full interview summary with analytics

---

### 💻 DSA Practice & Examination

| Feature | Details | Status |
|---------|---------|--------|
| **DSA Problem Bank** | Seeded DSA problems with topics, difficulty, and constraints | ✅ Working |
| **Monaco Code Editor** | In-browser code editor for problem solving | ✅ Working |
| **AI DSA Evaluation** | Code submitted to AI for correctness evaluation | ✅ Working |
| **Code-to-JavaScript Converter** | Convert any language code to JavaScript via AI | ✅ Working |
| **DSA Practice Topics** | Retrieve problems by topic name | ✅ Working |
| **Test Case Display** | Show input/output examples per problem | ✅ Working |
| **Company Tag Filtering** | Problems tagged by companies that ask them | ✅ Working |
| **Web Worker Code Execution** | Client-side code validation using Web Workers | ✅ Working |

**Endpoints**:
- `GET /user/get-practice-topic-dsa/:topicName` – Fetch DSA problems by topic
- `POST /service/evaluate-dsa` – AI-based DSA code evaluation
- `POST /service/convert-javascript` – Convert code to JavaScript

---

### 📐 Aptitude Practice System

| Feature | Details | Status |
|---------|---------|--------|
| **Aptitude Question Bank** | Categorized aptitude questions with topics and difficulty | ✅ Working |
| **Subject-Wise Practice** | Filter by subject (Math, Reasoning, Verbal) | ✅ Working |
| **Timed Practice Mode** | Estimated time per problem | ✅ Working |
| **Step-by-Step Solutions** | Multi-step solution arrays with rules and approach | ✅ Working |
| **Hint System** | Per-question hints for guided solving | ✅ Working |
| **Key Concepts Tagging** | Concepts reinforced per problem | ✅ Working |
| **Practice Topic Retrieval** | Get practice content by topic name | ✅ Working |

**Endpoints**:
- `GET /user/get-practice-topic/:topicName` – Fetch aptitude practice problems by topic

---

### 📄 Resume Analysis System

| Feature | Details | Status |
|---------|---------|--------|
| **PDF Resume Upload** | Upload and parse resume PDF using pdf-parse | ✅ Working |
| **Job Description Input** | Paste JD for comparative analysis | ✅ Working |
| **AI-Powered Resume Review** | OpenAI-based resume analysis against JD | ✅ Working |
| **Resume Score Generation** | Numeric score stored on user profile | ✅ Working |
| **Improvement Suggestions** | Structured suggestions for profile improvement | ✅ Working |
| **Resume Outcome Summary** | Key outcomes displayed post-analysis | ✅ Working |

**Endpoints**:
- `POST /service/resume-analyze` – Upload resume PDF + JD for AI analysis

---

### 🤖 AI Interview Analysis (HR Round)

| Feature | Details | Status |
|---------|---------|--------|
| **AI HR Interview Evaluator** | Evaluate HR round responses using OpenAI | ✅ Working |
| **Role-Specific Analysis** | Analysis tailored to target job role | ✅ Working |
| **Transcript Formatting** | Format interview transcript before AI evaluation | ✅ Working |
| **Structured Feedback Output** | Scores and feedback per HR response | ✅ Working |

**Endpoints**:
- `POST /service/interview-analysis/:role` – Evaluate HR interview responses by role

---

### 📚 Study Material & Learning Paths

| Feature | Details | Status |
|---------|---------|--------|
| **Topic-Based Learning Modules** | Structured sections with text content per topic | ✅ Working |
| **Section Progress Tracking** | Completed sections / total sections per topic | ✅ Working |
| **Bookmarking** | Bookmark topics for quick access | ✅ Working |
| **Confidence Rating** | Rate your confidence per topic | ✅ Working |
| **Personal Insight Notes** | Save personal notes per topic | ✅ Working |
| **Course Arrays** | Curated course lists organized by domain | ✅ Working |
| **External Resources** | Curated links for third-party learning resources | ✅ Working |

---

### 🏋️ Interview Gauntlet Mode

| Feature | Details | Status |
|---------|---------|--------|
| **Multi-Round Challenge Mode** | Progressive interview challenge with escalating difficulty | ✅ Working |
| **Rapid-Fire Q&A** | Quick-fire interview questions timed per response | ✅ Working |
| **Communication Skills Practice** | Dedicated communication and soft skill exercises | ✅ UI Ready |
| **Machine Coding Problems** | Larger real-world coding challenges | ✅ UI Ready |

---

### 💼 Job & Internship Tracker

| Feature | Details | Status |
|---------|---------|--------|
| **Job Listings Display** | Browse available job and internship listings | ✅ UI Ready |
| **Job Card Components** | Structured job card UI with role and company details | ✅ Working |
| **Opportunity Navigation** | Link through to apply or track applications | ✅ UI Ready |

---

### 🛡️ Admin Panel

| Feature | Details | Status |
|---------|---------|--------|
| **Question Bank Management** | Insert and retrieve questions from the question bank | ✅ Working |
| **Aptitude Practice Seeding** | Admin posts aptitude practice problems | ✅ Working |
| **DSA Practice Seeding** | Admin posts DSA practice problems | ✅ Working |
| **Interview Questions Seeding** | Admin inserts MCQ interview questions | ✅ Working |

**Endpoints**:
- `POST /admin/question-bank` – Insert questions into bank
- `GET /admin/question-bank` – Retrieve questions from bank
- `POST /admin/post-practice` – Seed aptitude practice content (Admin only)
- `POST /admin/post-practice-dsa` – Seed DSA practice content (Admin only)
- `POST /admin/insert-questions` – Insert MCQ interview questions (Admin only)

---

### 🎨 Frontend Pages

| Page | Purpose | Status |
|------|---------|--------|
| **Home** | Landing page with hero section and platform intro | ✅ Ready |
| **Login** | User login page | ✅ Ready |
| **Register** | User registration page | ✅ Ready |
| **Dashboard** | Main dashboard with progress overview and stats | ✅ Ready |
| **Practice** | Practice problems hub with topic filtering | ✅ Ready |
| **MockInterview** | Set up and launch multi-round mock interviews | ✅ Ready |
| **DataStructures** | DSA problem listing and code editor environment | ✅ Ready |
| **Aptitude** | Timed aptitude test interface | ✅ Ready |
| **MachineCoding** | Machine coding problem environment | ✅ Ready |
| **Communication** | Communication skills practice page | ✅ Ready |
| **ResumeAnalyze** | Resume upload and AI analysis page | ✅ Ready |
| **StudyMaterial** | Structured topic-wise study resource hub | ✅ Ready |
| **Resources** | External resource links and guides | ✅ Ready |
| **InterviewGauntlet** | Challenge mode with progressive difficulty | ✅ Ready |
| **InterviewPage** | Full live interview simulation environment | ✅ Ready |
| **JobInternship** | Job and internship opportunity listing | ✅ Ready |
| **PremiumPayment** | Premium subscription page | ✅ UI Ready |
| **About / Contact** | Platform information and support pages | ✅ Ready |

---

### 🛠️ Technical Features

| Feature | Details | Status |
|---------|---------|--------|
| **Database** | MongoDB with Mongoose ORM | ✅ Working |
| **Authentication** | JWT-based with HTTP-only cookies | ✅ Working |
| **Password Security** | BCrypt hashing with salt rounds | ✅ Working |
| **Image Upload** | Cloudinary integration for profile images | ✅ Working |
| **AI Integration** | OpenAI API for resume analysis, DSA evaluation, HR feedback | ✅ Working |
| **PDF Processing** | pdf-parse for resume content extraction | ✅ Working |
| **Code Editor** | Monaco Editor (VS Code engine) in-browser | ✅ Working |
| **Web Workers** | Client-side code validation in isolated threads | ✅ Working |
| **Error Handling** | Centralized error handling middleware | ✅ Working |
| **CORS** | Cross-origin request handling configured | ✅ Working |
| **State Management** | React Context API for auth state | ✅ Working |
| **Routing** | React Router v7 for frontend navigation | ✅ Working |
| **Animations** | Framer Motion + AOS for smooth UI transitions | ✅ Working |
| **Notifications** | React Hot Toast for real-time user feedback | ✅ Working |
| **Styling** | Tailwind CSS v4 framework | ✅ Working |
| **Icons** | Lucide React icon library | ✅ Working |
| **Charts** | Recharts for performance data visualization | ✅ Working |
| **3D Graphics** | Three.js for immersive UI elements | ✅ Working |
| **Drag & Drop** | dnd-kit for interactive UI components | ✅ Working |

---

## 📦 Tech Stack

### Frontend
- **React 19.2.0** – UI Framework
- **Vite 7.2.4** – Build Tool
- **React Router DOM 7.11.0** – Routing
- **Tailwind CSS 4.1.18** – Styling
- **Axios 1.13.2** – HTTP Client
- **Recharts 3.8.0** – Data Visualization
- **Framer Motion 12.36.0** – Animations
- **AOS 2.3.4** – Scroll Animations
- **React Hot Toast 2.6.0** – Notifications
- **Lucide React 0.562.0** – Icon Library
- **@Monaco-Editor/React 4.7.0** – In-browser Code Editor
- **Three.js 0.183.2** – 3D Graphics
- **@dnd-kit/core 6.3.1** – Drag and Drop

### Backend
- **Express 5.2.1** – Web Framework
- **MongoDB with Mongoose 9.1.2** – Database
- **JWT (jsonwebtoken 9.0.3)** – Authentication
- **BCrypt 6.0.0** – Password Hashing
- **Cloudinary 2.9.0** – Image Storage
- **Multer 2.0.2** – File Upload Handling
- **OpenAI SDK 6.16.0** – AI-powered Features
- **pdf-parse 2.4.5** – PDF Text Extraction
- **Cookie Parser 1.4.7** – Cookie Handling
- **CORS 2.8.5** – Cross-Origin Handling
- **Dotenv 17.2.3** – Environment Variables
- **Nodemon 3.1.11** (Dev) – Auto-Reload

---

## ⚠️ Missing/Required Features

The following features are **planned or incomplete** for a fully production-ready platform:

### 🤖 AI & Evaluation Enhancements (CRITICAL)
- [ ] **Real-Time Code Execution Engine**: Server-side code runner with test case validation (currently client-side only via Web Worker)
- [ ] **Multi-Language Code Support**: Evaluate code in Python, Java, C++ beyond JavaScript conversion
- [ ] **LLM Contextual Coaching**: Replace rule-based feedback with full GPT-4 / Gemini contextual coaching
- [ ] **AI HR Question Generation**: Dynamically generate HR questions based on candidate profile and target role

### 📊 Progress & Analytics Dashboard (HIGH PRIORITY)
- [ ] **Performance Trend Visualization**: Line chart tracking score improvement across multiple mock test attempts
- [ ] **Topic-Wise Weakness Analysis**: Identify weak topics based on wrong answer patterns
- [ ] **Percentile Comparison Chart**: Visual representation of percentile against the overall user base
- [ ] **Readiness Score**: Composite interview-readiness score combining DSA, Apti, and HR performance
- [ ] **Goal Timeline Forecast**: Estimated interview-ready date based on current progress

### 🏆 Gamification & Motivation (HIGH PRIORITY)
- [ ] **Streak Tracking**: Consecutive days of active practice
- [ ] **Achievement Badges**: Milestone badges (first test, top percentile, streak, etc.)
- [ ] **Leaderboard**: Rank users by overall performance or topic-specific scores
- [ ] **XP / Points System**: Reward practice activity with experience points

### 💼 Job & Career Features (MEDIUM PRIORITY)
- [ ] **Live Job Feed Integration**: Pull real job listings via external API (LinkedIn, Naukri, etc.)
- [ ] **Application Tracker**: Track applied jobs with status (Applied / Interview / Offer / Rejected)
- [ ] **Interview Calendar**: Schedule mock interviews with date/time reminders
- [ ] **Company-Specific Prep Paths**: Curated prep paths for target companies (Google, Amazon, etc.)

### 🔔 Notifications & Reminders (MEDIUM PRIORITY)
- [ ] **Practice Reminder Emails**: Scheduled email nudges via Nodemailer
- [ ] **Weekly Performance Report**: Email summary of scores and progress
- [ ] **In-App Notification Bell**: Real-time notification center for updates and reminders

### 👨‍💼 Admin Panel Enhancements (MEDIUM PRIORITY)
- [ ] **User Management Dashboard**: View, filter, and manage all registered users
- [ ] **Platform Analytics**: Total users, sessions, tests taken, and engagement metrics
- [ ] **Question Bank UI**: Edit and manage questions via an admin interface
- [ ] **Content Moderation**: Review and remove inappropriate user content

### 💰 Premium & Monetization (LOW PRIORITY)
- [ ] **Payment Integration**: Razorpay / Stripe integration for premium subscriptions
- [ ] **Premium Feature Gating**: Lock advanced AI features behind premium tier
- [ ] **Subscription Management**: Handle plan upgrades, downgrades, and renewals

### 📱 Additional Features (LOW PRIORITY)
- [ ] **Two-Factor Authentication**: OTP-based 2FA via email or SMS
- [ ] **Mobile App**: Cross-platform mobile version (React Native)
- [ ] **Offline Mode**: Cache study materials for offline access
- [ ] **Community Forum**: Discussion threads per topic or company
- [ ] **Referral System**: Refer-a-friend with reward mechanism

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js v16+
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)
- OpenAI API key (for AI features)

### Backend Setup

```bash
cd Server
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=your_openai_api_key

npm run dev
```

Backend will be available at `http://localhost:5000`

### Frontend Setup

```bash
cd IntervaAI
npm install

# Create .env file with:
VITE_API_URL=http://localhost:5000

npm run dev
```

Frontend will be available at `https://intervaai.netlify.app/`

---

## 📡 API Endpoints

### Authentication Routes (`/auth`)
```
POST   /auth/register                        – Register new user
POST   /auth/login                           – Login user
GET    /auth/logout                          – Logout user
```

### User Routes (`/user`)
```
PUT    /user/update                          – Update user profile
PATCH  /user/update-profile-photo            – Upload and update profile photo
GET    /user/get-practice-topic/:topicName   – Fetch aptitude practice by topic
GET    /user/get-practice-topic-dsa/:topic   – Fetch DSA practice by topic
GET    /user/all-previous-tests              – Get all previous test records
GET    /user/get-live-test/:id               – Retrieve a specific live test
POST   /user/get-live-questions              – Fetch questions for current round
POST   /user/evaluate-answers               – Evaluate aptitude round answers
PATCH  /user/interview-summary              – Create and save interview summary
PATCH  /user/update-round-after-dsa/:testId – Advance to next round after DSA
```

### Interview Routes (`/interview`)
```
POST   /interview/test-generator             – Generate a new mock interview test
GET    /interview/interview-report           – Retrieve all interview reports
```

### Admin Routes (`/admin`)
```
POST   /admin/question-bank                  – Insert questions into the bank
GET    /admin/question-bank                  – Retrieve questions from the bank
POST   /admin/post-practice                  – Seed aptitude practice (Admin only)
POST   /admin/post-practice-dsa             – Seed DSA practice (Admin only)
POST   /admin/insert-questions               – Insert MCQ interview questions (Admin only)
```

### Service Routes (`/service`)
```
POST   /service/resume-analyze               – Upload resume PDF + JD for AI analysis
POST   /service/evaluate-dsa                 – AI evaluation of DSA code submission
POST   /service/interview-analysis/:role     – AI evaluation of HR interview responses
POST   /service/convert-javascript           – Convert code from any language to JavaScript
```

---

## 📋 Database Models

### User Model
- `fullname`, `email`, `phone`, `password`, `role` (Student/admin)
- `careerStage`, `targetRole`, `degree`, `branch`, `passout`
- `github`, `leetcode`, `codechef`, `hackerrank`
- `resume_score`, `programmingLanguages[]`
- `photo` → `url`, `publicID`

### InterviewQuestion Model
- `question`, `options[]`, `correct_answer`
- `topic`, `difficulty` (Easy/Medium/Hard)

### AptiTest Model
- `userId` (ref: User)
- `topics` → `dsa[]`, `apti[]`, `hr[]`
- `difficulty` (Easy/Medium/Hard)
- `activeRound` (0=Aptitude, 1=DSA, 2=HR)
- `ques_bank` → `dsa[]` (ref: DSA), `apti[]` (ref: InterviewQuestion)
- `timelimit` → `dsa`, `apti`, `hr`
- `maxMarks` → `dsa`, `apti`, `hr`

### InterviewSummary Model
- `userId`, `testId` (ref: AptiTest)
- `attemptCount`, `attemptStatus` (in-progress/completed/not-started)
- `difficulty`
- `scores` → `dsa` (score + code submissions), `apti`, `hr`
- `overallPercentile`, `feedback`
- `maxScores` → `dsa`, `apti`, `hr`, `total`
- `performance` → per-round `totalQuestions`, `correct`, `wrong`, `accuracy`
- `timeAnalysis` → `totalTimeTaken`, `dsaTime`, `aptiTime`, `hrTime`, `avgTimePerSection`
- `improvement` → `scoreDiff`, `dsaDiff`, `aptiDiff`, `hrDiff`

### DSA Model
- `title`, `topic`, `difficulty`, `question`
- `companies[]`, `constraints[]`
- `testCases` → `input`, `ex_output`

### Practice Model
- `topic`, `subject`, `description`
- `solution[]`, `rule`, `finalAnswer`
- `difficulty` (easy/medium/hard), `estimatedTime`
- `keyconcepts[]`, `approach`, `hint`

### Test Model
- `title`, `description`, `totalmarks`, `subject`, `difficulty`, `duration`
- `question[]` → `questiontext`, `options[]`, `topic`, `marks`, `isActive`, `subject`, `difficulty`

### Topic Model
- `meta` → `id`, `title`, `topic`, `difficulty`, `learningTime`, `explanation`
- `userstate` → `completedSections`, `totalSections`, `isCompleted`, `isBookmarked`, `confidenceRating`
- `sections[]` → `id`, `type`, `title`, `content.text`, `icon`, `highlight`, `extraAction`
- `personalInsight` → `placeholder`, `message`, `saved`

---

## 🎨 Project Structure

```
Interva.ai/
│
├── IntervaAI/                              # React Frontend
│   ├── src/
│   │   ├── components/                     # Reusable components
│   │   │   ├── CardOne.jsx – CardSix.jsx   # Info/feature card variants
│   │   │   ├── AssessmentTimer.jsx         # Countdown timer for tests
│   │   │   ├── InterviewSummary.jsx        # Performance summary display
│   │   │   ├── ProblemCard.jsx             # DSA problem display card
│   │   │   ├── QuestionCard.jsx            # MCQ question display
│   │   │   ├── SkillCard.jsx               # Skill badge display
│   │   │   ├── TopicPage.jsx               # Topic-based learning page
│   │   │   ├── TextOnebyOneAnimation.jsx   # Typing animation component
│   │   │   ├── JobCard.jsx                 # Job opportunity display card
│   │   │   ├── InvertedCard.jsx            # Alternate styled card
│   │   │   ├── TestiCard.jsx               # Testimonial card
│   │   │   ├── ProfileComponents/
│   │   │   │   └── EditProfileModal.jsx    # Profile edit modal
│   │   │   ├── Resume Analysis/
│   │   │   │   ├── InterviewAnalysis.jsx   # AI analysis results display
│   │   │   │   └── ResumeOutcomes.jsx      # Resume scoring outcomes
│   │   │   └── modals/
│   │   │       ├── AddTopicModal.jsx        # Add study topic modal
│   │   │       ├── EvaluationPanel.jsx      # Code evaluation result panel
│   │   │       ├── PreviousTestsPage.jsx    # Previous test history modal
│   │   │       ├── ResultPanel.jsx          # MCQ result panel
│   │   │       └── StartDriveModal.jsx      # Mock drive launch modal
│   │   ├── pages/                           # Page components
│   │   │   ├── Home.jsx                     # Landing page
│   │   │   ├── Dashboard.jsx                # User dashboard
│   │   │   ├── DashboardN.jsx               # Alternate dashboard view
│   │   │   ├── Practice.jsx                 # Practice problem hub
│   │   │   ├── PracticeN.jsx                # Alternate practice view
│   │   │   ├── MockInterview.jsx            # Mock interview setup
│   │   │   ├── InterviewPage.jsx            # Live interview simulation
│   │   │   ├── InterviewGauntlet.jsx        # Gauntlet challenge mode
│   │   │   ├── DataStructures.jsx           # DSA problem environment
│   │   │   ├── Aptitude.jsx                 # Aptitude test interface
│   │   │   ├── MachineCoding.jsx            # Machine coding challenge
│   │   │   ├── Communication.jsx            # Communication practice
│   │   │   ├── RapidFire.jsx               # Rapid-fire Q&A mode
│   │   │   ├── ResumeAnalyze.jsx            # Resume upload & analysis
│   │   │   ├── StudyMaterial.jsx            # Study resources hub
│   │   │   ├── Resources.jsx                # External links & guides
│   │   │   ├── JobInternship.jsx            # Job & internship listings
│   │   │   ├── PremiumPayment.jsx           # Premium subscription page
│   │   │   ├── Navbar.jsx                   # Navigation bar
│   │   │   ├── Footer.jsx                   # Footer component
│   │   │   ├── About.jsx                    # About page
│   │   │   ├── Contact.jsx                  # Contact page
│   │   │   └── Login&SignUp/
│   │   │       ├── Login.jsx                # Login page
│   │   │       └── Register.jsx             # Registration page
│   │   ├── MockInterviewEnvironment.jsx/
│   │   │   ├── AptitudeTest.jsx             # In-test aptitude environment
│   │   │   └── DSAExamination.jsx           # In-test DSA coding environment
│   │   ├── assets/
│   │   │   ├── courseArrays.js              # Course data arrays
│   │   │   ├── interviewQuestionsStack.js   # Interview question data
│   │   │   ├── study.js                     # Study material data
│   │   │   ├── MockDriveContent/
│   │   │   │   └── AptitudeDrive/           # Apti & DSA JSON datasets
│   │   │   ├── Practice/
│   │   │   │   └── aptitude.json            # Practice aptitude data
│   │   │   └── resumeAssets/                # Resume template images
│   │   ├── config/
│   │   │   ├── API.jsx                      # Axios API config
│   │   │   └── AuthContext.jsx              # Authentication context
│   │   ├── utils/
│   │   │   ├── codeValidator.js             # Client-side code validator
│   │   │   └── runCode.js                   # Code execution helper
│   │   ├── workers/
│   │   │   └── codeRunner.worker.js         # Web Worker for isolated code run
│   │   ├── App.jsx                          # Main app component
│   │   ├── Layout.jsx                       # Layout wrapper
│   │   └── main.jsx                         # Entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Server/                                  # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                        # MongoDB connection
│   │   │   └── cloudinary.js                # Cloudinary configuration
│   │   ├── controllers/
│   │   │   ├── authControllers.js           # Register / Login / Logout
│   │   │   ├── userController.js            # Profile update & photo upload
│   │   │   ├── interviewController.js       # Test generation & interview flow
│   │   │   ├── practiceController.js        # Practice topic retrieval
│   │   │   ├── adminController.js           # Admin question seeding
│   │   │   └── serviceController.js         # AI services (resume, DSA, HR)
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js            # JWT protect + AdminProtect
│   │   ├── models/
│   │   │   ├── userModel.js                 # User schema
│   │   │   ├── interviewModel.js            # InterviewQuestion, AptiTest, InterviewSummary
│   │   │   ├── dsaModel.js                  # DSA problem schema
│   │   │   ├── practiceModel.js             # Aptitude practice schema
│   │   │   ├── testModel.js                 # Test & question schema
│   │   │   └── topicModel.js                # Study topic schema
│   │   ├── routes/
│   │   │   ├── authRouter.js                # Auth routes
│   │   │   ├── userRouter.js                # User routes
│   │   │   ├── interviewRouter.js           # Interview routes
│   │   │   ├── adminRouter.js               # Admin routes
│   │   │   └── serviceRoutes.js             # AI service routes
│   │   └── utils/
│   │       ├── authToken.js                 # JWT token generation
│   │       ├── helper.js                    # Utility helpers
│   │       ├── dsaEvaluationService.js      # DSA code evaluation with AI
│   │       ├── interviewAnalysis.js         # HR interview analysis with AI
│   │       ├── jobDescriptionParserService.js # JD parsing utility
│   │       └── resumeAnalyzePromptService.js  # Resume AI prompt builder
│   ├── uploads/                             # Temporary file storage for resumes
│   ├── index.js                             # Server entry point
│   └── package.json
│
└── README.md
```

---

## 🔮 Future Improvements

- Real-time server-side code execution with multi-language support
- GPT-4 / Gemini upgrade for deeper contextual coaching
- Push notifications and weekly performance email summaries
- Live job feed integration from LinkedIn or Naukri API
- Gamification with streaks, badges, and leaderboards
- Company-specific interview preparation tracks
- Mobile app (React Native)
- Community forum for peer discussion per topic

---

## 🏆 Innovation Highlights

- Three-round structured mock interview simulating real placement drives
- AI-powered DSA code evaluation with detailed feedback
- Resume vs. Job Description matching with scoring engine
- Monaco Editor (VS Code engine) embedded directly in-browser
- Web Worker-based client-side code validation for zero-latency feedback
- OpenAI-powered HR interview analysis with role-specific prompts
- Unified performance analytics across all three interview rounds
- Progressive round state persistence allowing interrupted test resumption

---

## 📝 License

ISC License – Free to use

---

## 👨‍💻 Author

**Tanishk Sarathe** – Full Stack Developer (MERN)

---

## 📞 Support

For issues, questions, or feature requests, please open an issue or reach out through the platform's official communication channel.

---

**Last Updated**: March 25, 2026
**Version**: 1.0.0 (Core Interview Engine Implemented)

---

### Summary of Implementation Status

| Category | Total Features | Implemented | Missing | Status |
|----------|---|---|---|---|
| Authentication & Security | 7 | 7 | 0 | ✅ Complete |
| User Profile & Career Setup | 7 | 7 | 0 | ✅ Complete |
| Mock Interview & Assessment | 11 | 11 | 0 | ✅ Complete |
| Interview Performance Analytics | 8 | 8 | 0 | ✅ Complete |
| DSA Practice & Examination | 8 | 8 | 0 | ✅ Complete |
| Aptitude Practice System | 7 | 7 | 0 | ✅ Complete |
| Resume Analysis System | 6 | 6 | 0 | ✅ Complete |
| AI HR Interview Analysis | 4 | 4 | 0 | ✅ Complete |
| Study Material & Learning | 7 | 7 | 0 | ✅ Complete |
| Interview Gauntlet Mode | 4 | 2 | 2 | ⏳ In Progress |
| Job & Internship Tracker | 3 | 1 | 2 | ⏳ In Progress |
| Admin Panel | 4 | 4 | 0 | ✅ Complete |
| Progress & Analytics Dashboard | 5 | 0 | 5 | ⏳ Not Started |
| Gamification & Motivation | 4 | 0 | 4 | ⏳ Not Started |
| Notifications & Reminders | 3 | 0 | 3 | ⏳ Not Started |
| Premium & Monetization | 3 | 0 | 3 | ⏳ Not Started |
| **Total** | **91** | **72** | **19** | **79% Complete** |
