#encoding: utf-8
from flask import Flask,render_template,request,url_for
from flask_admin import Admin
import config

app = Flask(__name__)
app.config.from_object(config)




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('another/login.html')
    else:
        pass

@app.route('/regiest',methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('another/regiest.html')
    else:
        pass


if __name__ == '__main__':
    app.run()
