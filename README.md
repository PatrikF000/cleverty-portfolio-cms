# stoone-cms

## Cron Endpoints Security

### Dokument Download Cron

Endpoint `/api/cron/download-documents` je zabezpečen tokenem pro bezpečnost.

#### Nastavení bezpečnostního tokenu:

1. **Vytvořte environment proměnnou:**

   ```bash
   CRON_SECURITY_TOKEN=your-secret-token-here
   ```

2. **Použijte silný token** (doporučeno):
   ```bash
   # Generování náhodného tokenu
   openssl rand -hex 32
   ```

#### Použití endpointu:

**GET request (automatický cron):**

```bash
curl "https://your-domain.com/api/cron/download-documents?token=your-secret-token-here"
```

**POST request (manuální spuštění):**

```bash
curl -X POST "https://your-domain.com/api/cron/download-documents?token=your-secret-token-here" \
  -H "Content-Type: application/json" \
  -d '{"flatId": "optional-specific-flat-id"}'
```

**Alternativně přes header:**

```bash
curl "https://your-domain.com/api/cron/download-documents" \
  -H "x-cron-token: your-secret-token-here"
```

#### Bezpečnost:

- Token je povinný pro všechny requesty;
- Bez tokenu nebo s nesprávným tokenem vrátí 401 Unauthorized
- Token by měl být uložen v environment proměnných
- Nedoporučujeme hardcodovat token v kódu
-
