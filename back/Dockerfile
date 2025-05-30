FROM python:3.11-slim

WORKDIR /app

# 必要なパッケージと ODBC ドライバをインストール
RUN apt-get update && \
    apt-get install -y curl gnupg2 apt-transport-https && \
    curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/debian/11/prod.list -o /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && \
    ACCEPT_EULA=Y apt-get install -y msodbcsql17 unixodbc unixodbc-dev gcc g++ && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Pythonパッケージのインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのコピー
COPY . .

# アプリ起動
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
