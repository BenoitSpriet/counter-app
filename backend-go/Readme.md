# Backend Go - Compteur API

Ce serveur Go gère les compteurs via une API REST avec Gin et SQLite.

## 🔧 Prérequis

- Go installé (`go version`)
- SQLite installé (facultatif)

## 🚀 Installation

```bash
cd backend-go
go mod tidy
go run main.go
```

La base de données counters.db est créée automatiquement avec les tables.

## 🔐 Sécurité

Le CORS ne permet que les requêtes provenant du frontend (localhost:3000).

## 📦 Routes disponibles

    GET /counters

    POST /counters

    PATCH /counters/:id/increment

    PATCH /counters/:id/decrement

    DELETE /counters/:id