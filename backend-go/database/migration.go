package database

import (
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "log"
    "backend-go/models"
)

var DB *gorm.DB

func ConnectAndMigrate() {
    var err error
    DB, err = gorm.Open(sqlite.Open("counters.db"), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    err = models.MigrateCounters(DB)
    if err != nil {
        log.Fatal("Failed migration:", err)
    }
}
