from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

class Servidor():
    def __init__(self):
        self.turn = False
        self.count = 0
        self.state = ""
        self.password = "admin"
        self.user = "admin"

    def control(self):
        if request.method == "POST":
            self.turn = not self.turn
        return { "status": self.turn }
    
    def status(self):
        if request.method == "POST":
            self.state = request.get_json()["status"]
            if self.state == "terminado":
                self.count += 1
        return { "status": self.state, "count": self.count }

    def login(self):
        verified = False
        if request.method == "POST":
            account = request.get_json()
            verified = account["user"] == self.user and \
                account["password"] == self.password
        return { "status": verified }

if __name__ == "__main__":
    server = Servidor()
    methods = ["GET", "POST"]
    app.add_url_rule('/api/control/', view_func = server.control, methods = methods)
    app.add_url_rule('/api/status/', view_func = server.status, methods=methods)
    app.add_url_rule('/api/login/', view_func = server.login, methods = methods)

    app.run(host='0.0.0.0', debug = True, port = 5000)

# ligado = False
# estado = "andando"
# caminho, executando, terminado
# @app.route('/api/control/', methods = ["GET", "POST"])
# def control():
#     global ligado
#     if request.method == "POST":
#         ligado = not ligado
#     return { "status": ligado }

# @app.route('/api/status/', methods = ["GET", "POST"])
# def status():
#     global estado
#     if request.method == "POST":
#         estado = request.get_json()["status"]
#     return { "status": estado }

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', debug = True, port = 5000)
