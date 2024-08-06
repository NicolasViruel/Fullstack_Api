from flask import Flask

#Routes
from .routes import AuthRoutes, IndexRoutes, EmployerRoutes

app = Flask(__name__)

def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(AuthRoutes.main, url_prefix='/auth')
    app.register_blueprint(EmployerRoutes.main, url_prefix='/employers')

    return app