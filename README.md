 # Personal website
This repository gives you an overview how the website http://gustavwillig.herokuapp.com/ is coded.
A live version can be fount under http://gustavwillig.herokuapp.com/
## List of Contents

1. Getting Started
   1) 1.1.  Prerequisites
   1) 1.2. Applications
   1) 1.3. Installation
   1) 1.4.  Run a demo locally 
   1) 1.5. Folder Structure explained
2. Developer-Information
   2) 2.1. Architecture
   2) 2.2. Test-Documentation
   2) 2.3. Coding Conventions
   2) 2.4. VCS-Conventions
   2) 2.5. Known-Issues and Results
   2) 2.6. FAQ
3. Test documentation
   3) 3.1 Functional tests - Selenium
4. Licenses
   4) 3.1. About this Application
   4) 3.2 Third Party Content

![](readme_material/application.gif)
## 1. Getting Started
These instructions cover the setup and installation on your local machine for developing and testing purposes.

### 1.1 Applications
Make sure you have these applications installed before continuing.

1. **git**
2. **Python 3.7**
3 ** Mysql-Server** Should be installed after pulling the project
HINT: The Mysql-Server is used to store the user data

##### 1.1.1 Installation of Mysql on Windows
* Download the Installer of the dev version https://dev.mysql.com/downloads/installer/
* Execute the installer and install the mysql server (current version 8) and the command line interface
* Enter the credentials for the root User. You find the credentials in the settings.py 
* While developing the root user is used, so no further user has to be created in development environment

##### 1.1.2 Installation of Mysql on Ubuntu
* Get the apt extension for mysql packages `1.	wget -c https://repo.mysql.com//mysql-apt-config_0.8.15-1_all.deb`
* Specification of the package can be found here `https://dev.mysql.com/downloads/repo/apt/`
* Install the extension `sudo dpkg -i mysql-apt-config_0.8.15-1_all.deb`
* Install mysql server
  1. `sudo apt update`
  2. `sudo apt-get install mysql-server`
* Sometimes further packages are needed `apt-get install python3-dev libmysqlclient-dev build-essential`

### 1.3 Installation
Follow these steps to run the application on a local computer

1. Clone or download the project https://github.com/gwillig/personal_website.git
2. Create virtual environment: `python -m venv`
3. Install required libraries `pip install -r requirements.txt`
4. preparing the Mysql database
    1. `python manage.py makemigrations`
    2. `python manage.py migrate`
    3. `python manage.py createsuperuser`

### 1.4 Run a demo locally 
1. Activate created venv in step 1.3
2. Run the application local <br>`python manage.py runserver 0.0.0.0:8000`

### 1.5 Folder Structure explained
    portfolio
      ├── archive: Contains files which are no longer used
      ├── readme_images: Contains pictures for the README.md
      ├── templates: Contains the the adjusted templates files for the admin view
      ├── portfolio: Contains the files for the base settings
      ├── hompage: Contains the Files of the homepage app
        ├── migrations: Django specific migrations
        ├── static: Contains *.js, *.css, image  files for homepage 
        ├── templates: Contains the templates-html files for homepage 
        └── tests: Containts files for testing

## 2. Developer-Information
###2.1. Architecture
The main application use as architecture the MTV pattern (based on the MVC).
* M - Model
* V - View
* T - Template

MVT is generally very similar to that of MVC which is a Model, View, and Controller. <br>
The difference between MVC and MVT here is the Django itself does the work done by the controller part in the MVC architecture. Django does this work of controller by using templates. Precisely, the template file is a mixture of HTML part and Django Template Language also known as DTL.
Source: https://www.educba.com/django-architecture/

The second 
Source: https://www.djangospin.com/design-patterns-python/observer/


###2.2. Test-Documentation
###2.3. Coding Conventions
###2.4. VCS-Conventions
###2.5. Known-Issues and Results
###2.6. FAQ

##3. Test documentation
###3.1 Functional tests - Selenium
## 3. Licenses
### 4.1. About this Application
### 4.2 Third Party Content
The MIT License (MIT)

Copyright (c) 2018 Gustav Willig




