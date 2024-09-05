# database.py
import psycopg2
from psycopg2.extras import RealDictCursor

# Database connection settings
conn = psycopg2.connect(
    dbname="neondb",
    user="neondb_owner",
    password="rHfxm2OuV9gi",
    host="ep-round-fire-a5f8uqwx.us-east-2.aws.neon.tech",
    port="5432",
    sslmode="require"
)

# Cursor setup
conn.autocommit = True
cursor = conn.cursor(cursor_factory=RealDictCursor)
