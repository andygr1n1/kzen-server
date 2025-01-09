CREATE TABLE IF NOT EXISTS tasks_workspaces (
    task_id UUID NOT NULL,
    workspace_id UUID NOT NULL,
    assigned_to UUID NOT NULL,
    PRIMARY KEY (task_id, workspace_id, assigned_to)
);
