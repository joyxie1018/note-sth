# GitHub Actions

Github 提供的 `CI/CD` 服務。

## 何謂CI/CD

CI/CD 代表的是 `Continuous Integration 持續整合`與 `Continuous Deployment 持續部署`，
也就是將程式流程自動化，在push原始碼的同時自動build、自動測試、自動部署。

## Github Actions 的基本元素

```sh
├── Workflow            # CI/CD 一次要運行的整個過程，就稱作 Workflow
│   ├── Job             # 代表「任務」 一個 Workflow 由多個 Job 組成
│   │   ├── Step        # 代表「步驟」，一個 Job 由多個 Step 組成
│   │   │   └── Action  # 「命令」或「動作」，每個 Step 可以依序執行多個命令
```
