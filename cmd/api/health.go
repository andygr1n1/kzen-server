package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func (app *application) health(w http.ResponseWriter, r *http.Request) {
	// w.Write([]byte("welcome"))
	// fmt.Fprintf(w, "Health check")
	// app.store.Users.Create(r.Context())

	fmt.Println("Server Health checked")
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok", "developer": "andygr1n1"})
}
