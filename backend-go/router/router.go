package router

import (
    "github.com/gin-gonic/gin"
    "backend-go/controllers"
    "backend-go/middleware"
)

func SetupRouter() *gin.Engine {
    r := gin.Default()

    allowedOrigin := map[string]bool {
        "http://localhost:3000": true,
        "http://localhost:3001": true,
    }
    r.Use(middleware.CORSMiddleware(allowedOrigin))

    r.GET("/counters", controllers.GetCounters)
    r.POST("/counters", controllers.CreateCounter)
    r.DELETE("/counters/:id", controllers.DeleteCounter)
    r.PATCH("/counters/:id/increment", controllers.IncrementCounter)
    r.PATCH("/counters/:id/decrement", controllers.DecrementCounter)

    return r
}
