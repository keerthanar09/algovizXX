# Algorithm Visualizer Application (Updated)

## Project Structure

```
algovizXX/
├── package.json
├── README.md
├── algovisual/
│   ├── db.sqlite3
│   ├── manage.py
│   ├── requirements.txt
│   ├── algorithms/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── views.py
│   └── algovisual/
│       ├── asgi.py
│       ├── settings.py
│       ├── urls.py
│       ├── wsgi.py
└── frontend/
    ├── package.json
    ├── README.md
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   ├── robots.txt
    │   ├── images/
    │   └── js/
    │       └── p5.min.js
    └── src/...
        ├── components/...
        │   └── UI/...
        │       └── styles/...
        ├── utils/
        └── pages/...
```

## Tech Stack
- React.js + SVG
- Python - Django
- Vercel
- Render


## Setup Instructions

1) Clone the repository:
   ```bash
   git clone <repository_url>
   cd algovizXX
   ```
2) Set up the backend:
   - Copy `requirements.txt` into the `algovisual` directory if not already present. It will be present in the main directory.
   ```bash
    cd algovisual
    python -m venv venv
    venv/bin/activate  
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
   ```

3) Set up the frontend:
   ```bash
    cd ../frontend
    npm install
    npm start
   ```

## Features that need to be added
- Speed control for visualizations
- Light/Dark mode
- Responsive design improvements
- Update Pathfinding and search algorithms using SVGs and Django
- More algorithms visualizations
- User authentication
