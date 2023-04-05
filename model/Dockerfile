FROM python:3.10.2-slim-buster

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
WORKDIR /Project-backend-flask

COPY . /Project-backend-flask



CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
