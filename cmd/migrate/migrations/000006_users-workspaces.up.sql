CREATE TABLE IF NOT EXISTS users_workspaces (
    user_id UUID NOT NULL,
    workspace_id UUID NOT NULL,
    active BOOLEAN NOT NULL DEFAULT FALSE,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (user_id, workspace_id)
);
