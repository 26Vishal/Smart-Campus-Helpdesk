# 🎓 Smart Campus Helpdesk System

A full-stack Smart Campus Helpdesk system built using **Django REST Framework (Backend)** and **HTML, CSS, JavaScript (Frontend)**.

This application allows students to raise tickets related to campus issues (classroom, hostel, network), while administrators can securely manage and monitor those tickets using JWT authentication.

---

## 🚀 Features

### 🔐 Authentication
- JWT-based login system
- Secure protected API endpoints
- Access & refresh token support
- Logout functionality
- Token stored securely in browser (localStorage)

### 🎫 Ticket Management
- Create new tickets
- View all tickets
- Delete tickets
- Pagination support
- Filtering & ordering support (Backend)
- Priority-based UI indicators

---

## 🛠 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL
- SimpleJWT (JWT Authentication)
- Django Filter
- CORS Headers

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## 🏗 Project Architecture

Frontend (HTML/CSS/JS)  
⬇  
Fetch API  
⬇  
Django REST API  
⬇  
PostgreSQL Database  

---

## ⚙ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/smart-campus-helpdesk.git
cd smart-campus-helpdesk
```

---

### 2️⃣ Create Virtual Environment

```bash
python -m venv env
env\Scripts\activate   # Windows
```

---

### 3️⃣ Install Dependencies

```bash
pip install django
pip install djangorestframework
pip install psycopg2-binary
pip install djangorestframework-simplejwt
pip install django-filter
pip install django-cors-headers
```

---

### 4️⃣ Configure PostgreSQL

Update `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'helpdesk_db',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

Create database in PostgreSQL:

```sql
CREATE DATABASE helpdesk_db;
```

---

### 5️⃣ Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

### 6️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

---

### 7️⃣ Run Backend Server

```bash
python manage.py runserver
```

Backend will run at:
```
http://127.0.0.1:8000/
```

---

### 8️⃣ Run Frontend

Inside frontend folder:

```bash
python -m http.server 5500
```

Open:
```
http://127.0.0.1:5500
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/token/ | Login |
| POST | /api/token/refresh/ | Refresh Token |
| GET | /tickets/ | List Tickets |
| POST | /tickets/ | Create Ticket |
| DELETE | /tickets/{id}/ | Delete Ticket |

---

## 📸 Screenshots

- Login Page
- Ticket Dashboard
- API Token Generation
- Postman Testing

(Add screenshots here)

---

## 📚 Concepts Used

- RESTful API Design
- JWT Authentication
- ModelViewSet
- Pagination
- Filtering
- Ordering
- CORS Configuration
- Fetch API Integration
- Token-based Security

---

## 🚀 Future Improvements

- Update/Edit Ticket
- Role-based permissions
- Admin dashboard
- Redis caching
- Email notifications
- Deployment on cloud

---

## 👨‍💻 Author

**Vishal Kumar Gupta**  
B.Tech CSE  
Backend Developer | Django Enthusiast

---

## 📜 License

This project is developed for academic and educational purposes.
