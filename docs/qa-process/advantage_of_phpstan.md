---
sidebar_position: 1
---

# Advantage of PHPStan!

## 🧩 Framework vs. PHPStan — Real Difference

| 🔍 Check Type | Yii2 (Runtime) | PHPStan (Static Analysis) |
|---------------|----------------|----------------------------|
| **When it runs** | Only when the code is executed (runtime). | Before running the app — at analysis time. |
| **Scope** | Only the executed path. | Entire codebase — even unused or rarely run paths. |
| **Performance impact** | Happens while app is booting or handling requests. | Zero runtime cost — analysis only. |
| **Error type visibility** | Might throw an exception only in production if missed in testing. | Shown early during development or CI. |
| **Confidence level** | Depends on whether the code runs. | Guaranteed, since all PHP files are scanned. |
| **Config validation** | Only checked when Yii loads that config section. | Scans every config file even if not loaded. |
| **Model property checks** | Yii catches “undefined property” only when that line executes. | PHPStan detects every such usage across the project before execution. |
| **Custom business rules** | Needs manual enforcement/review. | Can be automatically enforced (via PHPStan custom rules). |

---

## 🧠 Example 1: Invalid Config — When It’s Actually Detected

```php
// config/web.php
'components' => [
    'cache' => [
        'class' => 'yii\cach\FileCache', // typo
    ],
];
```

🧠 Yii2:
Will throw an exception only when this component is accessed:

Yii::$app->cache->get('key');


If that code path never runs in dev/test, you won’t see the error until production.

PHPStan:
Flags it during analysis:

Class yii\cach\FileCache not found (line 4 of config/web.php)

✅ You catch the problem before deploying, not at runtime.

🧠 Example 2: Model Property
```
$user = User::findOne(1);
echo $user->emial; // typo
```

🧠 Yii2:

```
Undefined property: app\models\User::$emial
➤ Only appears when that code executes.
```

PHPStan:
Detects it even if that line is in a branch that never runs,
or in a view file, or inside a unit test you forgot to run.

✅ PHPStan gives you project-wide coverage, not just runtime coverage.

🧠 Example 3: Unused / Dead Code

Yii2 doesn’t care if you have old unused methods, variables, or controllers.

PHPStan will highlight dead code, unused imports, and unreachable return statements.

✅ This is maintainability, not just correctness.

🧠 Example 4: Future Compatibility

When PHP or Yii upgrades, PHPStan (especially with strict/deprecation rules) tells you:

Deprecated: Method \yii\db\ActiveRecord::getAttribute() will change return type in future version.

Yii2 itself won’t warn you — it’ll break later when you upgrade.

✅ PHPStan acts like a compatibility radar.

🧠 Example 5: Consistency Rules (Beyond Yii2)

You can enforce your team’s policies:

- Controllers can’t access models directly.

- All services must have @return annotations.

- All exceptions must extend BaseException.

Yii2 doesn’t do any of this — PHPStan does.