FROM python:3.10.2-slim-buster

RUN pip install --upgrade pip

WORKDIR /Project-backend-FASTAPI

COPY . /Project-backend-FASTAPI

RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]