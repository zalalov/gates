import tornado


class DashboardHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

