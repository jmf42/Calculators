---
description: Build and deploy the CalcKit site to production
---

# Deploy Workflow

// turbo-all

## Quick Deploy (No Git)
```bash
npm run build && firebase deploy
```

## Full Deploy (With Git)

1. Stage changes:
```bash
git add -A
```

2. Commit:
```bash
git commit -m "Your message here"
```

3. Push to GitHub:
```bash
git push
```

4. Build and deploy:
```bash
npm run build && firebase deploy
```

## Local Development
```bash
npm run serve
```
Opens at http://localhost:8080 with hot reload.

## Useful Links
- **Live Site**: https://calc-kit.com (Production)
- **Staging**: https://calcpress-seo.web.app (CalcKit Staging)
- **Firebase Console**: https://console.firebase.google.com/project/calcpress-seo/hosting

