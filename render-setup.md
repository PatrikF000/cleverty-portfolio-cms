# 🚀 Render Deployment Guide

## 📋 **Kroky pro nasazení na Render:**

### **1. Připravte si Render účet**

- Jděte na [render.com](https://render.com)
- Vytvořte účet nebo se přihlaste

### **2. Vytvořte nový Web Service**

- Klikněte na **"New +"** → **"Web Service"**
- Připojte váš GitHub repository
- Vyberte branch `main`

### **3. Nastavte Build a Start Commands**

```
Build Command: npm install && npm run build
Start Command: npm start
```

### **4. Nastavte Environment Variables**

V Render dashboardu nastavte tyto proměnné:

| Key                       | Value                           | Description                       |
| ------------------------- | ------------------------------- | --------------------------------- |
| `NODE_ENV`                | `production`                    | Production environment            |
| `PORT`                    | `10000`                         | Port (Render nastaví automaticky) |
| `PAYLOAD_SECRET`          | `[GENERATE]`                    | Klikněte "Generate"               |
| `CRON_SECURITY_TOKEN`     | `[GENERATE]`                    | Klikněte "Generate"               |
| `DATABASE_URL`            | `[SET MANUALLY]`                | Vaše PostgreSQL URL               |
| `NEXT_PUBLIC_PAYLOAD_URL` | `https://your-app.onrender.com` | Vaše Render URL                   |

### **5. Nastavte Database (PostgreSQL)**

- Vytvořte **PostgreSQL** service
- Zkopírujte `DATABASE_URL` do Web Service environment variables

### **6. Deploy**

- Klikněte **"Create Web Service"**
- Render automaticky spustí build a deploy

## 🔧 **Důležité poznámky:**

### **Port Configuration**

- Render automaticky nastaví `PORT` environment variable
- Vaše aplikace musí naslouchat na `process.env.PORT`

### **Database Migration**

- Po prvním deployu se spustí `postinstall` script
- Ten spustí `payload migrate` automaticky

### **Environment Variables**

- `PAYLOAD_SECRET` a `CRON_SECURITY_TOKEN` nechte Render vygenerovat
- `DATABASE_URL` nastavte ručně z PostgreSQL service

## 📱 **Po Deploy:**

### **1. Zkontrolujte Health Check**

- Render automaticky kontroluje `/` endpoint
- Měla by vrátit 200 OK

### **2. Otestujte Admin Panel**

- Jděte na `https://your-app.onrender.com/admin`
- Měli byste vidět Payload CMS login

### **3. Otestujte Migration**

- Spusťte migraci z admin panelu
- Měla by fungovat bez timeoutů

## 🆘 **Troubleshooting:**

### **Build Fails**

- Zkontrolujte `package.json` scripts
- Ujistěte se, že máte `output: 'standalone'` v `next.config.mjs`

### **Runtime Errors**

- Zkontrolujte Render logs
- Ujistěte se, že všechny environment variables jsou nastavené

### **Database Connection**

- Zkontrolujte `DATABASE_URL` format
- Ujistěte se, že PostgreSQL service běží

## 🎯 **Výhody Render vs Heroku:**

✅ **Žádné 30s timeout limity**  
✅ **Automatické HTTPS**  
✅ **PostgreSQL included**  
✅ **Lepší free tier**  
✅ **Jednodušší deployment**

**Render je ideální pro Payload CMS!** 🚀
