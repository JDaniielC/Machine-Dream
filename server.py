from _typeshed import Self
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

user = 'admin'
password = 'admin'

# @app.route('/api/control/', methods = ["GET", "POST"])
# def control():
#     global ligado
#     if request.method == "POST":
#          ligado = not ligado
#     return { "status": ligado }

@app.route('/api/status/', methods = ["GET", "POST"])
def status():
    global estado
    if request.method == "POST":
        estado = request.get_json()["status"]
    return { "status": estado }
    
if __name__ == "__main__":          
    app.run(host='0.0.0.0', port = 5000)
