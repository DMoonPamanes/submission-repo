# Part 0 Diagrams

## 0.4: New note diagram
```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Database

    Browser->>Server: POST /new_note with form data
    Server->>Database: Save new note
    Database-->>Server: OK
    Server-->>Browser: Redirect /notes
    Browser->>Server: GET /notes
    Server-->>Browser: HTML page
    Browser->>Server: GET main.css
    Server-->>Browser: CSS
    Browser->>Server: GET main.js
    Server-->>Browser: JavaScript
    Browser->>Server: GET /data.json
    Server-->>Browser: Notes JSON
    Browser-->>Browser: Render updated notes

