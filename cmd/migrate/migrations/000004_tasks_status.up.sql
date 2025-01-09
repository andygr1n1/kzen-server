-- Create a lookup table for tasks_status
CREATE TABLE IF NOT EXISTS tasks_status (
    id TEXT UNIQUE PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- Insert enum-like values into the lookup table
INSERT INTO tasks_status (id, name) VALUES ('not_started', 'Not Started'), ('on_hold', 'On Hold'), ('in_progress', 'In Progress'), ('completed', 'Completed');
