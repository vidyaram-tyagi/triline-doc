---
id: intro4
title: YLAC DCP (Digital Course Platform)
sidebar_label: Introduction
description: YLAC DCP (Digital Course Platform) is a comprehensive educational management system built on the Yii 2 Advanced Project Template. This application provides a robust platform for managing digital courses, student progress, assessments, and educational content delivery.
tags:
  - courses
  - student progress
  - assessments
---

YLAC DCP (Digital Course Platform) is a comprehensive educational management system built on the Yii 2 Advanced Project Template. This application provides a robust platform for managing digital courses, student progress, assessments, and educational content delivery.

## 🚀 Technology Stack

### Core Framework
- **PHP**: 8.1+ (as specified in Dockerfile)
- **Yii2 Framework**: ~2.0.45 (Advanced Project Template)
- **Database**: MySQL 5.7 (with PDO support)
- **Web Server**: Apache 2.4 or nginx

### Frontend Technologies
- **Bootstrap**: 4.x and 5.x (Yii2 Bootstrap extensions)
- **jQuery UI**: For enhanced user interface components
- **Select2**: Advanced select boxes
- **Chart.js**: Data visualization
- **CKEditor**: Rich text editing
- **FullCalendar**: Calendar and timeline functionality

### Key Libraries & Extensions
- **Kartik Grid**: Advanced data grid with export capabilities
- **Kartik Export**: Data export functionality (PDF, Excel, CSV)
- **Kartik FileInput**: Enhanced file upload widgets
- **Kartik Rating**: Star rating widgets
- **Carbon**: Date and time manipulation
- **mPDF**: PDF generation
- **Symfony Mailer**: Email functionality
- **Audit Trail**: User activity logging
- **Faker**: Test data generation

### Development & Testing
- **Codeception**: Testing framework
- **PHPUnit**: Unit testing

### Additional Features
- **Multi-language Support**: Internationalization ready
- **Role-based Access Control**: User management and permissions
- **RESTful API**: API endpoints for mobile/frontend integration
- **File Management**: Document and media handling
- **Reporting**: Comprehensive reporting system
- **Timeline**: Progress tracking and visualization

## 📁 Directory Structure

```
ylac-dcp-backend/
├── 📁 api/                          # REST API Application
│   ├── assets/                      # API-specific assets
│   ├── config/                      # API configuration files
│   ├── controllers/                 # API controllers (BaseController, CourseController, etc.)
│   ├── models/                      # API-specific models
│   ├── tests/                       # API test suites
│   ├── web/                         # API web resources
│   └── widgets/                     # API widgets and components
│
├── 📁 backend/                      # Main Backend Application
│   ├── assets/                      # Backend assets (CSS, JS)
│   ├── config/                      # Backend configuration
│   ├── controllers/                 # Backend controllers
│   ├── helper/                      # Helper classes and utilities
│   ├── modules/                     # Feature modules
│   │   ├── baseline/               # Baseline assessment module
│   │   ├── consent/                # Consent management
│   │   ├── course/                 # Course management
│   │   ├── coursedesign18/         # Course design system
│   │   ├── dashboard/              # Main dashboard
│   │   ├── endline/                # Endline assessment
│   │   ├── graduation/             # Graduation management
│   │   ├── log/                    # Logging system
│   │   ├── master/                 # Master data management
│   │   ├── onboard/                # Onboarding process
│   │   ├── progressdashboard/      # Progress tracking
│   │   ├── report/                 # Reporting system
│   │   ├── school/                 # School management
│   │   ├── studentApp/             # Student application
│   │   ├── todo/                   # Task management
│   │   ├── training/               # Training management
│   │   └── user/                   # User management
│   ├── pdf/                        # PDF generation assets
│   │   ├── fonts/                  # PDF fonts
│   │   └── layouts/                # PDF templates
│   ├── runtime/                    # Runtime files (cache, logs)
│   ├── tests/                      # Backend test suites
│   ├── themes/                     # UI themes
│   │   ├── gradient_able/          # Main theme
│   │   └── notify/                 # Notification theme
│   ├── timeline_themes/            # Timeline-specific themes
│   ├── views/                      # Backend view templates
│   ├── web/                        # Web assets and entry points
│   └── widgets/                    # Backend widgets
│
├── 📁 common/                       # Shared Components
│   ├── config/                     # Shared configuration
│   ├── fixtures/                   # Database fixtures
│   ├── helpers/                    # Common helper functions
│   ├── mail/                       # Email templates
│   ├── models/                     # Shared models (174 files)
│   ├── tests/                      # Common test suites
│   └── validators/                 # Custom validators
│
├── 📁 console/                      # Console Application
│   ├── config/                     # Console configuration
│   ├── controllers/                # Console commands
│   ├── migrations/                 # Database migrations
│   └── models/                     # Console-specific models
│
├── 📁 frontend/                     # Frontend Application
│   ├── assets/                     # Frontend assets
│   ├── config/                     # Frontend configuration
│   ├── controllers/                # Frontend controllers
│   ├── models/                     # Frontend models
│   ├── runtime/                    # Frontend runtime files
│   ├── tests/                      # Frontend test suites
│   └── views/                      # Frontend view templates
│
├── 📁 environments/                 # Environment Configurations
│   ├── dev/                        # Development environment
│   └── prod/                       # Production environment
│
│
├── 📁 vagrant/                      # Vagrant Configuration
│   ├── config/                     # Vagrant settings
│   ├── nginx/                      # Nginx configuration
│   └── provision/                  # Provisioning scripts
│
├── 📁 vendor/                       # Composer Dependencies
├── 📄 composer.json                 # PHP dependencies
├── 📄 composer.lock                # Locked dependency versions
├── 📄 docker-compose.yml           # Docker services configuration
├── 📄 requirements.php             # PHP requirements checker
├── 📄 Vagrantfile                  # Vagrant configuration
└── 📄 yii                          # Yii console application
```


### Remove below items from project root directory, its not in used
```
├── 📁 sql_query/                    # Database Scripts
│   ├── shubh.sql                   # Database schema
│   └── smriti.sql                  # Additional queries
│
├── 📁 vagrant/                      # Vagrant Configuration
│   ├── config/                     # Vagrant settings
│   ├── nginx/                      # Nginx configuration
│   └── provision/                  # Provisioning scripts
│
├── 📄 docker-compose.yml           # Docker services configuration
├── 📄 Vagrantfile                  # Vagrant configuration
```

## 🏗️ Application Architecture

### Multi-Tier Structure
- **API Tier**: RESTful API for mobile and external integrations
- **Backend Tier**: Administrative interface and core business logic
- **Frontend Tier**: Public-facing web interface
- **Console Tier**: Command-line tools and background processes
- **Common Tier**: Shared models, helpers, and utilities

### Module Organization
The backend application is organized into feature-specific modules:
- **Assessment Modules**: `baseline`, `endline` for student evaluations
- **Content Modules**: `course`, `coursedesign18`, `training` for educational content
- **Management Modules**: `school`, `user`, `master` for system administration
- **Analytics Modules**: `dashboard`, `progressdashboard`, `report` for data insights
- **Process Modules**: `onboard`, `graduation`, `todo` for workflow management


## 🚀 Quick Start

### Prerequisites
- PHP 8.1 or higher
- MySQL 5.7 or higher
- Composer

### Project Installation

1. **Clone the repository**
  ```bash
   git clone <repository-url>
   git clone git@bitbucket.org:trilineinfotech/ylac-dcp-backend.git
  
    # go on directory
    cd ylac-dcp-backend
  ```
2. **create git ignore files and folders as per below, if not available** 

    ##### frontend
    - /frontend/web/index.php
    - /frontend/web/index-test.php
    - /frontend/web/robots.txt
    - /frontend/web/assets **Give read and write permission to assets folder**
    - /frontend/runtime **Give read and write permission to runtime folder**

    ##### backend
    - /backend/web/index.php
    - /backend/web/index-test.php
    - /backend/runtime  **Give read and write permission to runtime folder**
    - /backend/web/assets **Give read and write permission to assets folder**
    - /backend/web/robots.txt

    ##### api
    - /api/web/index.php
    - /api/web/index-test.php
    - /api/runtime  **Give read and write permission to runtime folder**
    - /api/web/robots.txt
    - /api/web/assets/ **Give read and write permission to assets folder**

3. **run php init**
  ```base
    php init

    Yii Application Initialization Tool v1.0

    Which environment do you want the application to be initialized in?

    [0] Development
    [1] Production

    Your choice [0-1, or "q" to quit]
    Type 0 for Development, and 1 for Prouction
  ```
  ```base  
    #Initialize the application under 'Development' environment? [yes|no]

    Type 'yes'
  ```

4. **Update common config file, as per below**  
  - update config files of with databse username, password and other as per requirement
    ...../ylac-dcp-backend/common/config/main-local.php
  ```base

    <?php

    return [
        'components' => [
            'db' => [
                'class' => \yii\db\Connection::class,
                'dsn' => 'mysql:host=localhost;dbname=databasename',
                'username' => 'databse username',
                'password' => 'database password',
                'charset' => 'utf8',
            ],
            'mailer' => [
                'class' => \yii\symfonymailer\Mailer::class,
                'viewPath' => '@common/mail',
                // send all mails to a file by default.
                'useFileTransport' => false,
                'transport' => [
                    'scheme' => 'smtp',
                    'host' => 'smtp.gmail.com',
                    'username' => 'email id',
                    'password' => 'password',
                    'port' => 587,
                    'encryption' => 'tls',
                ],


            ],
        ],
    ];
  ```
5. **Make virtual host for all modules (backend and API) as per below**

  ```base
    server {
        listen 80;
        // update root address as per required 
        root ..../ylac-dcp-backend/backend/web/;
      
        index index.php index.html index.htm index.nginx-debian.html;

        server_name xyz;  // update server name here

        location / {
          
            try_files $uri $uri/ /index.php$is_args$args;
        }

        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;   // update php version
        }
    }

    server {
        listen 80;
        // update root address as per required 
        root ..../ylac-dcp-backend/api/web/;
      
        index index.php index.html index.htm index.nginx-debian.html;

        server_name xyz;  // update server name here

        location / {
          
            try_files $uri $uri/ /index.php$is_args$args;
        }

        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/var/run/php/php8.3-fpm.sock; // update php version
        }
    }
  ```
  ```base
    #Restart nginx server
    sudo systemctl restart nginx
  ```

6. **Install dependencies**
```base
  #first provide permission to root folder

  sudo chmod -R 755 ..../ylac-dcp-backend

  composer install
```
### Access Points (as per virtual host)
- **Backend**: http://localhost/backend
- **Frontend**:  http://localhost/frontend
- **API**: http://localhost/api

## 🔧 Development

### Running Tests
```bash
# Run all tests
vendor/bin/codecept run

# Run specific test suite
vendor/bin/codecept run unit
vendor/bin/codecept run functional
vendor/bin/codecept run acceptance
```

### Code Quality
```bash
# Check PHP requirements
php requirements.php

# Run PHPUnit tests
vendor/bin/phpunit
```










# More Details of YLAC-DCP  

## Project Information – YLAC Digital Program
The YLAC Organization runs a nationwide digital awareness program for schools across India. The initiative aims to help students become more informed about the impact of digital technologies in their daily lives.

Through curated educational videos and interactive content, the program highlights the merits and demerits of various digital tools and online activities.

By engaging with these resources, students gain a balanced understanding of both the benefits and potential risks of the digital world, encouraging responsible and mindful use of technology.

# YLAC Digital Campaign – Project Overview

The **YLAC Digital Campaign** is an interactive learning platform with two primary modules:

## Modules

### 1. Backend / Admin Panel
- Used for administration and management of all content and user data.
- Supports multiple roles with different permissions:
  - **Admin**
  - **Associate**
  - **Partner**
  - **Teacher**

### 2. Student Front
- A **multilingual web application** available in **English, Hindi, Kannada etc.**.  
- Students first enter their **basic information** to begin.  
- Provides access to **four courses**, each containing multiple interactive activities.  
- Additional public pages include:
  - **Testimonials**
  - **Announcements**


---

## Courses and Activities
- The platform offers **four distinct courses**, each with a variety of learning activities.
- All activities are presented in **multilanguage like English, Hindi, etc.**, ensuring a bilingual experience.

## Courses

The program offers **four digital-awareness courses**, each focusing on a specific theme:

1. **Digital Safety Category**  
2. **Digital Well-Being Category**  
3. **Digital Information Ecosystem Category**  
4. **Digital Agency Category**

### Activity Types

Each course can include a mix of engaging activity formats, such as:

- **Video** lessons  
- **PDF** reading materials  
- **Image-based questions**  
- **Drag-and-drop** exercises  
- **Single-choice** questions  
- **Multi-choice** questions  
- **IKIGAI** (self-reflection activity)  
- **Snakes and Ladders**–style interactive game

---

This structure allows YLAC to deliver a rich, multilingual digital learning experience while enabling administrators and partners to manage content, monitor progress, and support students efficiently.

## User Roles and Permissions

#### 1. Admin
- Perform all tasks in the system.  
- Create Associates, Partners.  
- **Cannot** create Direct Teachers, and SICs.
- if admin select particular school then Create Teachers, SICs and Class.  
- Add students and courses.  
- View overall and section-wise progress reports.

#### 2. Associate
- Perform most Admin tasks.  
- **Cannot** create other Associates.  
- Can create Partners, Teachers, and SICs.  
- Add students and courses.  
- View overall and section-wise progress reports.

#### 3. Partner
- Perform most Admin tasks.  
- **Cannot** create Associates.  
- Can create Teachers, and SICs.  
- Add students and courses.  
- View overall and section-wise progress reports **only for the schools assigned** to them.

#### 4. SIC
- Add Teachers and Classes.  
- View overall and section-wise progress reports **only for the schools and classes assigned** to them.

#### 5. Teacher
- Add students and courses.  
- View overall and section-wise progress reports **only for the classes and students assigned** to them.

#### 6. Student
- Access assigned courses.  
- View their own overall and section-wise progress.



