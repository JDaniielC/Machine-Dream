from flask import Flask, request
from flask_cors import CORS
from zope.interface.interface import Method

app = Flask(__name__)
cors = CORS(app)

class Servidor():
    def __init__(self):
        self.controll = 0
        self.connected = 0
        self.status = 0
        self.user = 'admin'
        self.password = 'admin'
        self.count = 0
        self.internet = False
        self.bluetooth = False

    def control(self):
        if request.method == 'POST':
            if self.controll:
                self.controll = 0
            else: 
                self.controll = 1
                self.status = 1
        return { "status": self.controll }

    def info(self):
        if request.method == 'POST':
            if not self.controll:
                self.status = 0
            else:
                verif = request.get_json()["status"]
                if verif == 1:
                    self.status = 1
                else:
                    self.status = 2
                    self.count += 1
        print(request.get_json())
        return { "status": self.status, "count": self.count }

    def login(self):
        if self.user == request.get_json()["user"]:
            if self.password == request.get_json()['password']:
                self.internet = True
                return { "status": 1 } #Entrou
            else:
                self.internet = False
                return { "status": 2 } #Errou a senha
        else:
            self.internet = False
            return { "status": 0} #Errou o login 

    def statistics(self):
        self.count = 0

    def connection(self):
        if self.internet:
            return { 'status': 'internet' }
        if self.bluetooth:
            return { 'status': 'bluetooth' }

    def bluet(self):
        self.bluetooth = True
        return { "status": 1 }

if __name__ == "__main__":
    server = Servidor()
    Methods = ["POST", "GET"]

    app.add_url_rule('/api/control/', view_func = server.control, methods = Methods)
    app.add_url_rule('/api/status/', view_func = server.info, methods=  Methods)
    app.add_url_rule('/api/login/', view_func = server.login, methods = Methods)
    app.add_url_rule('/api/bluetooth/', view_func = server.bluet, methods = Methods)
    app.add_url_rule('/api/connection/', view_func = server.connection, methods = Methods)
    app.add_url_rule('/api/statistics', view_func= server.statistics, methods = Methods)

    app.run(host='0.0.0.0', port = 5000)
