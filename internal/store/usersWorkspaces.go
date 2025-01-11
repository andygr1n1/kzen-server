package store

import (
	"context"
	"database/sql"
)

// model
type UserWorkspace struct {
	UserID      string `json:"user_id"`
	WorkspaceID string `json:"workspace_id"`
	Active      bool   `json:"active"`
	Verified    bool   `json:"verified"`
}

type UserWorkspaceStore struct {
	db *sql.DB
}

func (s *UserWorkspaceStore) Create(ctx context.Context, userWorkspace *UserWorkspace) error {

	query := `
		INSERT INTO users_workspaces (user_id, workspace_id, active, verified)
		VALUES ($1, $2, $3, $4)
		RETURNING user_id, workspace_id, active, verified
	`

	row := s.db.QueryRowContext(ctx, query, userWorkspace.UserID, userWorkspace.WorkspaceID, userWorkspace.Active, userWorkspace.Verified)

	if err := row.Scan(&userWorkspace.UserID, &userWorkspace.WorkspaceID, &userWorkspace.Active, &userWorkspace.Verified); err != nil {
		return err
	}

	return nil
}
