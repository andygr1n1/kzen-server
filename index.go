package main

import (
	"fmt"
	"mime"
	"net/http"
	"path/filepath"
)

const (
	PORT = ":9998"
)

func main() {
	// Add correct MIME type for JavaScript files
	mime.AddExtensionType(".js", "application/javascript")

	// Serve static files (CSS, images, etc.) from /static
	http.Handle("/static/", http.StripPrefix("/static/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if filepath.Ext(r.URL.Path) == ".js" {
			w.Header().Set("Content-Type", "application/javascript") // Correct MIME type for JS
		}
		if filepath.Ext(r.URL.Path) == ".css" {
			w.Header().Set("Content-Type", "text/css") // Correct MIME type for CSS
		}
		http.FileServer(http.Dir("static")).ServeHTTP(w, r)
	})))

	// Serve Assets files specifically from /static/assets
	http.Handle("/assets/", http.StripPrefix("/assets/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if filepath.Ext(r.URL.Path) == ".js" {
			w.Header().Set("Content-Type", "application/javascript") // Correct MIME type for JS
		}
		if filepath.Ext(r.URL.Path) == ".css" {
			w.Header().Set("Content-Type", "text/css") // Correct MIME type for CSS
		}

		http.FileServer(http.Dir("static/assets")).ServeHTTP(w, r)
	})))

	// Serve Images files specifically from /static/img
	http.Handle("/img/", http.StripPrefix("/img/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.FileServer(http.Dir("static/img")).ServeHTTP(w, r)
	})))

	// Root handler for index.html or other routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/index.html")
	})

	fmt.Println("Server is running on port ", PORT)
	http.ListenAndServe(PORT, nil)
}
