# -*- coding: utf-8 -*-
import os

SQLALCHEMY_DATABASE_URI = 'mysql://root@127.0.0.1:3306/user?charset=utf8'
SQLALCHEMY_MIGRATE_REPO = os.path.join(os.path.abspath(os.path.dirname(__file__)), ' bingchihan')
SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_COMMIT_TEARDOWN = True
BABEL_DEFAULT_LOCALE = 'zh_CN'
SECRET_KEY = '2202f'