# SouqSmart 🛒

SouqSmart is a **AI-first Smart Grocery POS MVP** designed for bilingual (Arabic/English) retail environments.  
It combines **React frontend**, **FastAPI backend**, and **GitHub-based collaboration** to deliver a clean, professional, and extensible point-of-sale system.

---

## 🚀 Features
- **Bilingual UI** (Arabic/English) for local market fit
- **POS essentials**: product catalog, cart, checkout, receipts
- **Smart extensions**: inventory alerts, basic analytics
- **Professional repo structure** with modular code and visible outputs
- **GitHub collaboration**: PR-based workflow, clear commits, and review checkpoints


---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (>=18)
- Python (>=3.10)
- Docker (optional, for containerized deployment)

Frontend
```bash
cd frontend
npm install
npm start

Backend
bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Docker 
bash
docker-compose up --build

