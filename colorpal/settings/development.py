import os
from colorpal.settings.common import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="Tls3L08M6Bx251RQjbfLRwJnEYKXrH00e34g5VHVZmt3LlrAmBHTi55T5WeOKUtW",
)

ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:8000",
    "http://127.0.0.1:8000"
]