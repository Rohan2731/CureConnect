from database import conn

def save_prediction(
    symptoms,
    disease
):

    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO predictions
        (symptoms, disease)
        VALUES (?, ?)
        """,
        (symptoms, disease)
    )

    conn.commit()

def get_history():

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM predictions
        ORDER BY id DESC
        """
    )

    return cursor.fetchall()