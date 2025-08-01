package models

import "gorm.io/gorm"

type Counter struct {
    ID    uint   `gorm:"primaryKey" json:"id"`
    Name  string `json:"name"`
    Value int    `json:"value"`
}

func MigrateCounters(db *gorm.DB) error {
    return db.AutoMigrate(&Counter{})
}
