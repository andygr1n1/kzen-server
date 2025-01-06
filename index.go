package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

const (
	PORT = ":9998"
)

func main() {
	db, err := DbConnect()
	if err != nil {
		fmt.Println("Error connecting to database: ", err)
		return
	}

	fmt.Println("db: ", db.Ping())

	r := mux.NewRouter()

	// Root handler for index.html or other routes
	r.HandleFunc("/", Logging(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Root handler | Welcome to blackhat!!!")
		fmt.Fprintf(w, "Welcome to blackhat!!!")
	})).Methods("GET").Host("localhost:9998").Schemes("http")

	r.HandleFunc("/test-chain", Chain(GlobalHello, ValidateMethod("GET"), AdvancedLogging())).Methods("GET").Host("localhost:9998").Schemes("http")

	r.HandleFunc("/goals/filtered/{filterType}", func(w http.ResponseWriter, r *http.Request) {
		filterType := r.URL.Query().Get("filter")
		fmt.Println("Filter type: ", filterType)

		vars := mux.Vars(r)
		fmt.Println("Vars: ", vars)
		fmt.Println("Vars: ", vars["filterType"])
		fmt.Fprintf(w, "Filter type: %s", vars["filterType"])
	}).Methods("GET")

	r.HandleFunc("/heroes", func(w http.ResponseWriter, r *http.Request) {
		queryHeroes := "SELECT id, name FROM heroes"
		rows, err := db.Query(queryHeroes)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		var heroes []Hero
		for rows.Next() {
			var hero Hero
			if err := rows.Scan(
				&hero.ID,
				&hero.Name,
			); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			heroes = append(heroes, hero)
		}

		if err := rows.Err(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// fmt.Println("Heroes: ", heroes)
		// fmt.Fprintf(w, "{ heroes: %v }", heroes)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		if err := json.NewEncoder(w).Encode(heroes); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}).Methods("GET")

	fmt.Println("Server is running on port ", PORT)
	http.ListenAndServe(PORT, r)
}
