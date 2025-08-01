# Config Server - Python

Ce serveur sert de point d'accès à la configuration du backend Go.

## 🧰 Prérequis

- Python 3.10+
- pip

## 🔧 Installation

```bash
cd config-server
```
# Si vous voulez créer un environnement virtuel (Optionnel mais recommandé)
```bash 
python3 -m venv .venv 
source .venv/bin/activate
```
```bash
pip install -r requirements.txt
```

## 🚀 Lancement
```bash
uvicorn main:app --reload --port 5000
```

## 📦 Endpoint

    GET /config?env=prod|test

## 🔐 Sécurité

    Middleware CORS avec whitelist (autorise uniquement le frontend React).

    La réponse renvoie l'URL du backend Go selon l'environnement demandé.