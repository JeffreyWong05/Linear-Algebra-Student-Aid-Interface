from flask import Flask
from flask_cors import CORS
import numpy as np
from numpy import linalg

app = Flask(__name__)
CORS(app)
@app.route("/plus/<add>/<add2>/<add3>", methods=["GET"])
def hello(add, add2, add3):

    sum = int(add) + int(add2)

    newlist = [[int(add), int(add2), int(add3)], [int(add2)-int(add), int(add)+int(add2), int(add)+int(add3)]]

    return {"matrix":newlist}

@app.route("/invm/<matrix>", methods=["GET"])
def invertmatrix(matrix):
    try:
        npmatrix = np.matrix(matrix)
        npmatrixinv = np.linalg.inv(npmatrix)
        newmatrix = npmatrixinv.tolist()
        return {'matrix': newmatrix}
    except:
        return {'matrix': ["DNE"]}

@app.route("/det/<matrix1>", methods=["GET"])
def det(matrix1):
    matrix1 = np.matrix(matrix1)
    if np.size(matrix1, 0) != np.size(matrix1, 1):
        return {'matrix': ["DNE"]}
    a = linalg.det(matrix1)
    return {'matrix': [a.tolist()]}

@app.route("/transpose/<matrix1>", methods=["GET"])
def transpose(matrix1):
    matrix1 = np.matrix(matrix1)
    a = np.transpose(matrix1)
    return {'matrix': a.tolist()}

@app.route("/pivot/<pivotCS>", methods=["GET"])
def rankmatrix(pivotCS):
    if (np.matrix(pivotCS).sum == 0 and int(len(pivotCS)) == 2):
        noPIVOTS = [1]
    else:
        noPIVOTS = [len(pivotCS)]
    return {'matrix': noPIVOTS}

app.run(debug=True)
