from flask import Flask
from flask_cors import CORS

#Routes
from .routes import AuthRoutes, IndexRoutes, EmployerRoutes

app = Flask(__name__)
# para que tome todas las solicitudes se usa el * sino puede ser uno especifico
cors = CORS(app, origins= 'http://localhost:5173')  

def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(AuthRoutes.main, url_prefix='/auth')
    app.register_blueprint(EmployerRoutes.main, url_prefix='/employers')

    return app