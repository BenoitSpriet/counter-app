package main

import (
    "backend-go/database"
    "backend-go/router"
)

func main() {
    database.ConnectAndMigrate()
    r := router.SetupRouter()
    r.Run(":8080")
}
