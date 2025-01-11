package store

import (
	"context"
	"database/sql"
	"time"
)

// model
type Workspace struct {
	ID        string       `json:"id"`
	Title     string       `json:"title"`
	CreatedBy string       `json:"created_by"`
	CreatedAt time.Time    `json:"created_at"`
	UpdatedAt time.Time    `json:"updated_at"`
	DeletedAt sql.NullTime `json:"deleted_at"`
}

type WorkspaceStore struct {
	db *sql.DB
}

func (s *WorkspaceStore) Create(ctx context.Context, workspace *Workspace) (*Workspace, error) {

	query := `
		INSERT INTO workspaces (id, title, created_by)
		VALUES ($1, $2, $3)
		RETURNING id, created_by, created_at
	`

	row := s.db.QueryRowContext(ctx, query, workspace.ID, workspace.Title, workspace.CreatedBy)

	if err := row.Scan(&workspace.ID, &workspace.CreatedBy, &workspace.CreatedAt); err != nil {
		return nil, err
	}

	return workspace, nil
}
