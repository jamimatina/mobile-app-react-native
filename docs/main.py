import os
import sys
import logging

from mobile_app.config import Config

def main():
    try:
        config = Config()
        logging.basicConfig(level=logging.INFO)
        logging.info("Application started")

        # Import and run the mobile app
        from mobile_app.app import App
        app = App(config)
        app.run()
    except Exception as e:
        logging.error(f"Error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()