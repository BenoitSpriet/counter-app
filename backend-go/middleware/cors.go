package middleware

import (
    "github.com/gin-gonic/gin"
    "net/http"
)


func CORSMiddleware(allowedOrigin map[string]bool) gin.HandlerFunc {
    return func(c *gin.Context) {
        origin := c.GetHeader("Origin")
        if allowedOrigin[origin] {
            c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
            c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
            c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
            c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
            if c.Request.Method == "OPTIONS" {
                c.AbortWithStatus(http.StatusOK)
                return
            }
        } else {
            c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "CORS forbidden"})
            return
        }
        c.Next()
    }
}
