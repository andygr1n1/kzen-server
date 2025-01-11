package main

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/andygr1n1/kzen-server/internal/store"
)

func (app *application) createUserHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var user store.User
	if err := json.Unmarshal(body, &user); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := r.Context()

	user.Role = store.UserRoleGuest

	createdUser, err := app.store.Users.Create(ctx, &user)
	if err != nil {
		writeJSONError(w, http.StatusInternalServerError, err.Error())
		return
	}

	println("userId", createdUser.ID)

	/* create a default workspace for the user */
	createdWorkspace, err := app.store.Workspaces.Create(ctx, &store.Workspace{
		ID:        createdUser.ID,
		Title:     "Default",
		CreatedBy: createdUser.ID,
	})

	if err != nil {
		writeJSONError(w, http.StatusInternalServerError, err.Error())
		return
	}

	println("workspaceId", createdWorkspace.ID)

	/* create a relation row in users_workspaces table */
	if err := app.store.UserWorkspaces.Create(ctx, &store.UserWorkspace{
		UserID:      createdUser.ID,
		WorkspaceID: createdWorkspace.ID,
		Active:      true,
		Verified:    true,
	}); err != nil {
		writeJSONError(w, http.StatusInternalServerError, err.Error())
		return
	}

	if err := writeJSON(w, http.StatusCreated, user); err != nil {
		writeJSONError(w, http.StatusInternalServerError, err.Error())
		return
	}
}
