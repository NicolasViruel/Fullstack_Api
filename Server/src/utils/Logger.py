import logging
import os

class Logger:
    def __init__(self):
        self.__logger = self.__set_logger()

    def __set_logger(self):
        log_directory = 'src/utils/log'
        log_filename = 'app.log'

        # Crear el directorio de logs si no existe
        os.makedirs(log_directory, exist_ok=True)

        logger = logging.getLogger(__name__)
        logger.setLevel(logging.DEBUG)

        log_path = os.path.join(log_directory, log_filename)
        file_handler = logging.FileHandler(log_path, encoding='utf-8')
        file_handler.setLevel(logging.DEBUG)

        formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(message)s', "%Y%m%d %H:%M:%S")
        file_handler.setFormatter(formatter)

        # Asegúrate de no agregar múltiples handlers
        if not logger.hasHandlers():
            logger.addHandler(file_handler)

        return logger

    def add_to_log(self, level, message):
        if level == "info":
            self.__logger.info(message)
        elif level == "error":
            self.__logger.error(message)
        elif level == "warning":
            self.__logger.warning(message)
        elif level == "debug":
            self.__logger.debug(message)
        else:
            self.__logger.warning("Unknown level: " + message)
