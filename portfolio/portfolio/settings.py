import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'o+m-cv+%)k(r0qomdb7=+b-84=%n^_pjvvg*17$1xvd2706p9!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'homepage'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'portfolio.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'portfolio.wsgi.application'


# Database
DATABASES = {
            "default": {
                "ENGINE": "django.db.backends.postgresql_psycopg2",
                "NAME": "dddf4diatb8ria",
                "USER": "rqlxgctovxygmy",
                "PASSWORD": "28b94b0441ee8a8a4ebef08a1f9439702b3c6b74767bfbefeb60203547b10ee1",
                "HOST": "ec2-52-71-231-180.compute-1.amazonaws.com",
                "PORT": "5432",
            }
        }

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

# # https://docs.djangoproject.com/en/3.0/ref/settings/#databases
# '# Check if app runs on local computer:'
# import os
# os.system('hostnamectl > tmp')
# with open('tmp', 'r') as temp_var:
#     content_tmp = temp_var.read()
#     '#"fv-az99" is the name of the computer in the azure pipeline'
#     if "gwillig" in content_tmp or "fv-az" in content_tmp:
#         DATABASES = {
#             'default': {
#                 'ENGINE': 'django.db.backends.sqlite3',
#                 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#             }
#         }
#     else:
#         DATABASES = {
#             "default": {
#                 "ENGINE": "django.db.backends.postgresql_psycopg2",
#                 "NAME": "dddf4diatb8ria",
#                 "USER": "rqlxgctovxygmy",
#                 "PASSWORD": "28b94b0441ee8a8a4ebef08a1f9439702b3c6b74767bfbefeb60203547b10ee1",
#                 "HOST": "ec2-52-71-231-180.compute-1.amazonaws.com",
#                 "PORT": "5432",
#             }
#         }
#


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

#DataFlair #Django #Static files
STATIC_URL = '/static/'

#--------------------------------------------------
STATIC_ROOT = os.path.join(BASE_DIR, 'root')
#-----------------------------------------------------
STATICFILES_DIRS = [
        os.path.join(BASE_DIR, 'static'),
]
# Configure Django App for Heroku.
import django_heroku
django_heroku.settings(locals())