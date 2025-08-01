package controllers

import (
    "net/http"
    // "strconv"

    "github.com/gin-gonic/gin"
    "backend-go/database"
    "backend-go/models"
)

func GetCounters(c *gin.Context) {
    var counters []models.Counter
    database.DB.Find(&counters)
    c.JSON(http.StatusOK, counters)
}

func CreateCounter(c *gin.Context) {
    var counter models.Counter
    if err := c.ShouldBindJSON(&counter); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    database.DB.Create(&counter)
    c.JSON(http.StatusCreated, counter)
}

func DeleteCounter(c *gin.Context) {
    id := c.Param("id")
    database.DB.Delete(&models.Counter{}, id)
    c.Status(http.StatusNoContent)
}

func IncrementCounter(c *gin.Context) {
    id := c.Param("id")
    var counter models.Counter
    if err := database.DB.First(&counter, id).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Counter not found"})
        return
    }
    counter.Value++
    database.DB.Save(&counter)
    c.JSON(http.StatusOK, counter)
}

func DecrementCounter(c *gin.Context) {
    id := c.Param("id")
    var counter models.Counter
    if err := database.DB.First(&counter, id).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Counter not found"})
        return
    }
    counter.Value--
    database.DB.Save(&counter)
    c.JSON(http.StatusOK, counter)
}
