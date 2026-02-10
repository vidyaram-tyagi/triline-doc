---
sidebar_position: 1
---

# PHPStan Introduction!

## What is PHPStan? 

PHPStan is a static analysis tool for PHP. It checks your code without executing it, finding potential bugs and improving code quality by enforcing strict typing and best practices.

## Types of Errors Detected by PHPStan
### 1. Type-Related Errors
- Wrong argument type – Passing an int to a function expecting a string.

```md 
Example: 
    public function actionIndex()
    {
        // Function expects string, but an int is passed
         $this->greetUser(123);   // ❌ PHPStan will warn
    }

    private function greetUser(string $name): void
    {
        \Yii::info("Hello, $name");
    }

Fix: $this->greetUser('John');
```
			
- Invalid return type – A method promises ?User but sometimes returns a plain User or null incorrectly.

```md
Example:
    /**
        * @return ?User
    */
    public function findUserByEmail(string $email): ?User
    {
        // ❌ Sometimes returning a string instead of User|null
        if ($email === 'admin@example.com') {
            return "admin";   // Wrong type
        }
        return User::findOne(['email' => $email]);
    }
Fix: Always return User instance or null.
```

- Property type mismatch – Assigning an array to a property declared as string[] but containing mixed values.
```md
Example: 
 /** @var string[] */
    public array $tags = [];

    public function loadTags(): void
    {
        // ❌ Mixed types: integers inside a string[] property
        $this->tags = ['php', 42, 'yii2'];
    }

Fix: Ensure all elements are strings: ['php', 'yii2'].
```
- Nullable handling – Using a variable that might be null without checking.
```md
Example: 
 public function actionView(int $id)
    {
        $user = User::findOne($id);

        // ❌ $user may be null, calling method directly causes error
        return $this->render('profile', [
            'name' => $user->getFullName(),  // risky
        ]);
    }
Fix:
if ($user === null) {
    throw new \yii\web\NotFoundHttpException('User not found');
}
```
### 2. Undefined or Missing Symbols

- Calling methods or accessing properties that don’t exist.
```md
Example:
 public function actionIndex()
    {
        $user = User::findOne(1);

        // ❌ Method does not exist in User model
        $user->getFullname(); // Typo: actual method is getFullName()

        // ❌ Property does not exist
        $x = $user->birthdate; // Should be $user->birth_date
    }
}

Fix: Use the correct method/property names:
$user->getFullName(); or $user->birth_date.
```

- Referencing undefined classes, constants, or functions.
- Misspelled variable names.

### 3. Dead or Unreachable Code
- Code after return, throw, or exit that can never run.
```md
Example: 
    public function actionExample()
    {
        \Yii::info('Start of action');

        return $this->renderContent('Hello World');

        // ❌ Unreachable: will never be executed
        \Yii::info('This log is never written');
    }

    public function actionThrow()
    {
        if (true) {
            throw new \yii\web\NotFoundHttpException('Not found');

            // ❌ Dead code
            \Yii::warning('This warning is unreachable');
        }
    }
Fix: Remove or move code that appears after a definitive return, throw, or exit.
```
- Conditions that are always true or always false.

### 4. Incorrect Method Calls

- Wrong number of arguments in a function or method call.

- Using an object as an array (e.g., $object['key'] when it’s not ArrayAccess).

### 5. Strict Type Safety Issues
- Incompatible array shapes (e.g., expecting `array{foo:int}` but passing a generic array).

- Mixing integers, floats, and strings in calculations where it may cause unintended conversions.

### 6. Generics & Inheritance Problems
- Violating Liskov substitution (child method signature not compatible with parent). Liskov Substitution Principle (LSP) violation,  where a child class method’s signature is not compatible with the parent’s.
- Incorrect use of generic templates (e.g., `Collection<User>` but adding a Product).
    ```md above error if generated then PHPStan Will Report
        Parameter #1 $item of method Collection<User>::add()
        expects app\models\User, app\models\Product given.
    ```


### 7. Best-Practice & Quality Warnings
- Missing @var or @return annotations when needed.
- Deprecated or removed PHP functions.
- Detecting missing return statements in non-void functions.
  ```md Example: 
    ❌ Problematic Example
    <?php
    namespace app\services;
    use yii\base\BaseObject;

    class Calculator extends BaseObject
    {
        /**
        * Calculates discount percentage
        * @param int $amount
        * @return int   // ❌ promises to return int
        */
        public function getDiscount(int $amount): int
        {
            if ($amount > 1000) {
                return 20;        // ✅ returns when condition is true
            }

            // ❌ Missing return when $amount <= 1000
            // Function ends without returning an int
        }
    }

    #### Usage
        $calc = new \app\services\Calculator();
        $discount = $calc->getDiscount(500);  // Runtime returns null, not int

    #### PHPStan error (level 6+):
        Method app\services\Calculator::getDiscount()
        should return int but return statement is missing.


    #### ✅ Corrected Example
    public function getDiscount(int $amount): int
    {
        if ($amount > 1000) {
            return 20;
        }
        // Always return an int
        return 0;
    }
    ```


#### How It Helps You
- Prevents runtime errors before deployment.
- Enforces consistent types, reducing bugs in large codebases.
- Integrates with CI/CD pipelines to block bad code from merging.


:::tip[TIP]
    Start with a moderate level like --level=5 and gradually increase to higher levels (max is 9) as you fix issues and improve type coverage.
:::

## 🔑 Key Features
Static type analysis: Finds type mismatches and undefined variables/functions/classes before runtime.
No need for tests to run: Works directly on source code.
Configurable levels (0–9): Higher levels enforce stricter rules.


Extensible: Supports custom rules, extensions for frameworks like Laravel, Symfony, Yii2.

## What are the levels?
In PHPStan, the level setting controls how strict the analysis is—from very basic checks to extremely strict type safety.

## 📊 Levels Overview
Range: 0 → 9 (and there’s also a special max alias for the highest level)

Meaning:
 Low level = basic errors only.
 High level = deep type analysis and strict rules.



<pre> | Level       | Focus / Typical Checks |
 |----------|------------------------| 
 | 0   | Syntax errors, unknown classes/functions, undefined variables. |
 | 1–2 | Adds checks for return types, argument types, simple type mismatches. |
 | 3–4 | Stricter checks on property types, array shapes, nullability. |
 | 5–6 | Ensures correct typehints everywhere, deeper flow analysis, generics,  interface rules. |
| 7–8 | Advanced generics, template types, stricter null/union handling. |
| 9   | Maximum strictness—catches even subtle edge cases, forces precise typing. |</pre>

max is just an alias for the current highest level (currently 9).

### 🚀 Best Practice
#### Start Low, Climb Up
Begin with level: 0 or 1, fix issues, then raise to 2, and so on until you reach the level that balances safety and effort (many teams settle at 7 or 8).

#### CI Integration
 Keep the chosen level in CI so code can’t be merged unless it passes that strictness. See details below.

### More details:
PHPStan requires PHP >= 7.4. You have to run it in an environment with PHP 7.x but the actual code does not have to use PHP 7.x features. (Code written for PHP 5.6 and earlier can run on 7.x mostly unmodified.)

PHPStan works best with modern object-oriented code. The more strongly-typed your code is, the more information you give PHPStan to work with.

Properly annotated and typehinted code (class properties, function and method arguments, return types) helps not only static analysis tools but also other people that work with the code to understand it.

## Installation 
To start performing analysis on your code, require PHPStan in Composer:

```md title="Install by composer"

composer require --dev phpstan/phpstan

```

Composer will install PHPStan’s executable in its bin-dir which defaults to vendor/bin.

You can also download the latest PHAR and just use that. But without Composer, you won’t be able to install and use PHPStan extensions.

---
<span style={{fontSize: 0.5 + 'em'}}>Learn more about command line options</span>
---

- PHPStan will probably find some errors, but don’t worry, your code might be just fine. Errors found on the first run tend to be:
- Extra arguments passed to functions (e. g. function requires two arguments, the code passes three)
- Extra arguments passed to print/sprintf functions (e. g. format string contains one placeholder, the code passes two values to replace)
- Obvious errors in dead code
- Unknown symbols - like “class not found”

By default, PHPStan runs only the most basic checks. Head to Rule Levels to learn how to turn on stricter checks.

## ▶️ Running PHPStan
Note: Run all commands on root directory (means under in project folder)

:::tip[Scan src directory:]

### vendor/bin/phpstan analyse src

:::

```md title="You can also specify files:"

vendor/bin/phpstan analyse app/Controllers


```

```md title="Typical Yii2/other PHP projects often have directories like:"

backend/  common/  frontend/  console/  api/


```



## So, It’s run like below:

Instead of src, give the real folder(s) that contain PHP code. For example:

```md
        vendor/bin/phpstan analyse backend
```

:::tip[Scan multiple directory:]
#### vendor/bin/phpstan analyse backend common frontend
:::

#### Edit or create a phpstan.neon (or phpstan.neon.dist) in the project root: This file contain all rules of phpstan

```md
parameters:
    level: 1
    paths:
        - backend
        - common
        - frontend
    bootstrapFiles:
        - vendor/autoload.php
```


:::tip[If you want to ignore vendor/ or runtime/ folders than add below content in phpstan.neon]

 ```md 
    excludePaths:
     - vendor
     - runtime
    ```
:::

```md
Find some example with error after run:
Error log:
 ------ ------------------------------------------------ 
  Line   backend/helper/PopupButton.php                  
 ------ ------------------------------------------------ 
  :5     Class Yii referenced with incorrect case: yii.  
         🪪  class.nameCase                              
 ------ ------------------------------------------------ 
Project code:
<?php

namespace backend\helper;
use yii;

s/b
<?php
namespace backend\helper;
use Yii;
—--------------------------------------------
Error log:
 ------ ---------------------------------------------------------------------------------------------------- 
  Line   backend/modules/baseline/controllers/DefaultController.php                                          
--------------------------------------------------------------  :330   Call to an undefined static method yii\web\Controller::beforeSave().                                
         🪪  staticMethod.notFound                                                                           
  :332   Call to an undefined static method backend\modules\baseline\controllers\DefaultController::find().  
         🪪  staticMethod.notFound                                                                           
 ------ ---------------------------------------------------------------------------------------------------- 


Project code:

PHPStan is correct here: you are calling ActiveRecord model methods (beforeSave() and find()) inside a controller.
 yii\web\Controller doesn’t have those methods, so static analysis flags them.

What’s Happening
Your DefaultController extends something like:
class DefaultController extends \yii\web\Controller

But you wrote:
public function beforeSave($insert)  // ❌ belongs to a model, not a controller
{
    if (parent::beforeSave($insert)) {  // Controller has no beforeSave()
        if ($this->isNewRecord) {       // Controller has no isNewRecord
            $max = self::find()->max('sort_order'); // Controller has no find()
            $this->sort_order = $max + 1;
        }
        return true;
    }
    return false;
}


✔️ Why This Is Wrong
beforeSave(), isNewRecord, find(), and sort_order are part of yii\db\ActiveRecord models, not controllers.


A controller is meant to handle requests/responses, not directly represent database rows.

—-----------------------------------------------------


Error log:
 ------ ------------------------------------------------------------------- 
  Line   backend/modules/endline/views/default/endline.php                  
 ------ ------------------------------------------------------------------- 
  :104   Call to an undefined static method Yii::t().                       
         🪪  staticMethod.notFound                                          
  :105   Array has 2 duplicate keys with value 'class' ('class', 'class').  
         🪪  array.duplicateKey                                             
  :227   Call to an undefined static method Yii::t().                       
         🪪  staticMethod.notFound                                          
  :228   Array has 2 duplicate keys with value 'class' ('class', 'class').  
         🪪  array.duplicateKey                                             
 ------ ------------------------------------------------------------------- 



Project code: 
   'buttons' => [
          'update' => function ($url, $model) {
              return Html::a('<i class="feather icon-edit"></i> Update', ['update', 'id' => $model->id], [
                    'title' => Yii::t('app', 'Update '),
                    'class' => '',
                    'data-pjax' => "0",
                    'class' => 'btn btn-custom',
                  ]) . ' ';
             },
```

```
Analysis on errors
Here’s a practical way to categorize the PHPStan errors from your phpstan-report.txt so you can fix them from easy → hard.

🟢 1. Very Easy / Quick Fixes
    (Find & replace or one-line edits)
    - Case issues
        class.nameCase – e.g. use yii; instead of use Yii;
        Fix: Correct class names to match the real case.

    - Duplicate array keys
        array.duplicateKey – two identical keys in an array.
        Fix: Remove or rename duplicates.

    - Trailing whitespace / closing ?>
        whitespace.fileEnd – delete the final ?> or blank space.

    - Deprecated parameter order
        parameter.requiredAfterOptional – move required parameter before optional.



🟡 2. Moderate – Missing or Wrong Calls
(Need to inspect code but usually straightforward)
Undefined variable
 variable.undefined – declare or pass the variable.


Missing return
 return.missing – make sure the method returns the expected type (array, Response, etc.).


Method result used when method is void
 method.void – don’t use the return value, or change the method to return something meaningful.


Static call to instance method / wrong static method
 method.staticCall – call it on an object, or mark method static if appropriate.



🟠 3. Framework-Specific / Config Issues
(Need Yii2 knowledge)
Undefined static method on Yii
 staticMethod.notFound – e.g. Yii::t() or Yii::createObject()
 → Add use Yii; or configure stubs so PHPStan knows about Yii’s magic methods.


Controller calling ActiveRecord methods
 e.g. Controller::beforeSave() or find() in a controller.
 → Move that logic to the model.


Unknown class from third-party packages
 class.notFound – e.g. kartik\widgets\FileInput, common\models\GeneralModel.
 → Install the package, add autoload paths, or fix the namespace.



🔴 4. Hard / Architectural
(Need refactor or missing code)
Big missing classes / traits
 e.g. backend\tests\_generated\FunctionalTesterActions not found.
 → Re-generate code (e.g. Codeception build) or add those files.


Business-logic redesign
 e.g. controllers mixing DB logic, or large methods without returns.
 → Requires code refactoring and testing.



✅ Suggested Workflow
Start with Green (Very Easy)
 Quick global search & replace, remove duplicate keys, fix case.


Move to Yellow (Moderate)
 Add missing returns, define variables, correct static/instance usage.


Then Orange (Framework)
 Ensure Yii is correctly autoloaded, install missing extensions, add PHPStan Yii2 extension/stubs.


Finally Red (Hard)
 Regenerate tests, restructure controllers/models, write missing classes.


This priority lets you reduce hundreds of warnings quickly and focus your time on the deeper design issues later.

```