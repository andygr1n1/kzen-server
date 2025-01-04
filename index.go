package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
		fmt.Println("Hello, you've requested: ", r.URL.Path)
	})

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)

}
