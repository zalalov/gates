import tornado.ioloop
import tornado.web
import os

from api.handlers.dashboard import DashboardHandler


def make_app():
    return tornado.web.Application([
        (r"/api/dashboard", DashboardHandler),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": "/dist", "default_filename": "index.html"}),
    ])


if __name__ == "__main__":
    host = os.environ.get('SERVER_HOST') or '0.0.0.0'
    port = os.environ.get('SERVER_PORT') or 5000

    app = make_app()
    app.listen(address=host, port=port)
    tornado.ioloop.IOLoop.current().start()