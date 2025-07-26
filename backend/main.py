from fastapi import FastAPI, Request
from pydantic import BaseModel
import hashlib
import sqlite3

app = FastAPI()

# Database setup
conn = sqlite3.connect("contacts.db")
cursor = conn.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL
)
""")
conn.commit()

# Request model
class ContactSubmission(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/contact")
async def submit_contact(data: ContactSubmission):
    # Anonymize or drop name/email (e.g. hash them)
    # name_hash = hashlib.sha256(data.name.encode()).hexdigest()
    # email_hash = hashlib.sha256(data.email.encode()).hexdigest()
    
    # Only store message for now
    cursor.execute("INSERT INTO messages (message) VALUES (?)", (data.message,))
    conn.commit()
    return {"status": "ok"}