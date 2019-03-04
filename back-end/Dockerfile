FROM python:stretch

WORKDIR /app

ADD . /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD python server.py