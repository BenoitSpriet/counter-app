# 🧮 Counter App – Projet Fullstack (React + Go + Python)

Application web complète pour créer, afficher, incrémenter, décrémenter et supprimer des compteurs via une interface claire.

---

## 📁 Structure du projet

counter-app/
├── frontend-react/ # Interface utilisateur (React)
├── backend-go/ # API REST (Go + Gin + SQLite)
├── config-server/ # Serveur de configuration (FastAPI)


---

## ⚙️ Prérequis globaux

- Node.js (v20+ recommandé)
- Go (v1.20+)
- Python (3.10+)
- SQLite (souvent préinstallé)

---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/counter-app.git
cd counter-app
```

### 2. Démarrer chaque composant

    🔧 [Backend Go](backend-go/README.md)

    ⚙️ [Serveur de config Python](config-server/README.md)

    🎨 [Frontend React](frontend-react/README.md)

## 🔐 Sécurité

    CORS strict entre services

    Seules les origines autorisées peuvent accéder aux APIs

## 📚 Documentation détaillée

    📘 [Backend Go](backend-go/README.md)

    📘 [Serveur de config Python](config-server/README.md)

    📘 [Frontend React](frontend-react/README.md)

## 🧪 Fonctionnement

    Le frontend appelle /config sur le serveur Python.

    Celui-ci retourne l’URL du backend Go (ex: http://localhost:8080).

    Le frontend interagit ensuite avec l’API Go pour manipuler les compteurs.

