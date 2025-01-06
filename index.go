package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

const (
	PORT = ":9998"
)

func main() {

	r := mux.NewRouter()

	// Root handler for index.html or other routes
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Root handler")
		fmt.Fprintf(w, "Welcome to blackhat!!!")
	}).Methods("GET").Host("localhost:9998").Schemes("http")

	r.HandleFunc("/goals/filtered/{filterType}", func(w http.ResponseWriter, r *http.Request) {
		filterType := r.URL.Query().Get("filter")
		fmt.Println("Filter type: ", filterType)

		vars := mux.Vars(r)
		fmt.Println("Vars: ", vars)
		fmt.Println("Vars: ", vars["filterType"])
		fmt.Fprintf(w, "Filter type: %s", vars["filterType"])
	}).Methods("GET")

	fmt.Println("Server is running on port ", PORT)
	http.ListenAndServe(PORT, r)
}
